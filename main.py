from os import replace
from typing import Optional
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
from catboost import CatBoostRegressor, Pool
import pandas as pd
import seaborn as sns; sns.set()
import numpy as np
import matplotlib.pyplot as plt 
import catboost as cb
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score

model_env = CatBoostRegressor(loss_function="MultiRMSE", iterations=200, depth = 6, l2_leaf_reg= 0.2, learning_rate = 0.1)
model_env.load_model('models/GazSilver.cbm', format='cbm')
models = []
for i in range(10):
    model = CatBoostRegressor(loss_function="MultiRMSE")
    model.load_model(f'models/{i+1}.cbm', format='cbm')
    models.append(model)

model_env_headers = ['P_1', 'P_2', 'P_3', 'P_4', 'P_5', 'P_6', 'P_7', 'P_8', 'P_9', 'Q_1', 'Q_2', 'Q_3', 'Q_4', 'Q_5', 'Q_6', 'Q_7', 'QPlant_1', 'QPlant_2', 'QPlant_3', 'QPlant_4', "QGRS_1", "QGRS_2", 'PGRS_1', 'PGRS_2']
coefs_importance = [[22.69770680463984,
  27.51875668404631,
  0.04427238233637861,
  0.04766639714664333,
  37.200119996419936,
  0.20008392717054735,
  0.12185454673705043,
  0.052033468374368785,
  0.959496757348716,
  1.4355617345882699,
  1.9627818833792428,
  7.759665417812698],
 [27.201605292013856,
  27.258485143672615,
  0.12080010917226475,
  0.10227203060592457,
  25.84250639302111,
  0.7017436960232447,
  0.5939073969868578,
  0.08575097663670142,
  2.2331255096183895,
  3.3435257984630216,
  4.515234557772449,
  8.00104309601357],
 [32.87815492140878,
  29.045544629465223,
  0.15356294199287604,
  0.29829369709499176,
  4.755464343885898,
  1.9557308735826524,
  1.1907985593666133,
  0.1460112929711364,
  4.590972474573851,
  6.784287890883716,
  8.330314613052272,
  9.870863761722003],
 [37.9103566554332,
  26.502018493556953,
  0.10718188669774,
  0.21078719081137265,
  0.36612797879641074,
  0.6585556083396635,
  3.3173702451550287,
  0.20098160655914984,
  4.594906021647773,
  6.6953745289166715,
  9.42089062917704,
  10.015449154908985],
 [37.087928625781544,
  31.359413237849857,
  0.15305919208733912,
  0.6567030119456945,
  0.9821425574295829,
  0.4357989099903778,
  1.8308805487282975,
  0.2755272319639595,
  3.3248990146475124,
  4.796412384543063,
  6.709212201815999,
  12.388023083216751],
 [35.33314487215731,
  25.997084395609466,
  20.161082524814827,
  0.6542749668767508,
  0.42348483588746894,
  0.01131110411602991,
  0.021880883189714328,
  0.5739674548853051,
  0.6221476702988907,
  0.9594890190908124,
  1.48043886166858,
  13.761693411404826],
 [19.468902913035528,
  25.746050913173644,
  0.03303420353164232,
  0.013900126934663977,
  0.05883187343893614,
  0.07686844628664148,
  0.019314964532845716,
  0.08682080338595839,
  26.96622341486985,
  11.909222200874824,
  12.242771335483619,
  3.3780588044518596],
 [14.535948589103661,
  18.015283741475844,
  0.018748711071685707,
  0.0062421969772484135,
  0.044496715167090105,
  0.04991791455324541,
  0.01660533389963535,
  0.01164626644315552,
  5.704419183501051,
  47.79541749288823,
  10.864129729382217,
  2.9371441255369453],
 [13.041694213973916,
  15.871821262025883,
  0.019704428151448607,
  0.016240700897406073,
  0.0461769380445567,
  0.023156286818099493,
  0.028469968088968536,
  0.06352513470297119,
  3.183716389072764,
  5.481396959026206,
  59.528382533445495,
  2.6957151857522876],
 [33.835401792201935,
  22.706506818238115,
  0.10729833358727418,
  0.13374402879722652,
  0.43400869873563586,
  0.00040912856222943654,
  0.008202256699400685,
  0.07942343534703106,
  0.26646669477181656,
  0.4495595718069013,
  0.7667122797927811,
  41.21226696145967]]
new_input_valves = []

def is_q_normal(q_arr):
  q_lim = [1.2,0.6,0.6,0.6,0.6,1.2,0,0,0,0]
  q_deltas = []
  for i in range(len(q_arr)):
    q_deltas.append(q_lim[i] - q_arr[i])
  if max(q_deltas) > 0: return True
  else: return False

def super_solve(q_arr, valv_static, new_input_valves):

  q_lim = [1.2,0.6,0.6,0.6,0.6,1.2,0,0,0,0]
  q_deltas = []
  for i in range(len(q_arr)):
    q_deltas.append(q_lim[i] - q_arr[i])
  for i in range(len(q_deltas)):
    if q_deltas[i] > 0:
      fi = coefs_importance[i]
      for elem in range(len(fi)):
        if elem is not valv_static or valv_static is -1:
          print(f'elem {elem}')
          print(f' i {i}')
          new_input_valves[elem] += q_deltas[i] * (fi[elem]/100)
          if new_input_valves[elem] > 1.0: new_input_valves[elem] = 1.0
  return new_input_valves

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def base():
  return {'kek': str(model_env.feature_importances_)}


@app.get("/api/fix")
def fix_env(data: str):
    input_vlavs = [float(x.replace(',','.')) for x in data.split(' ')]
    output_val = model_env.predict(input_vlavs)
    out_env = pd.DataFrame(data=[output_val], columns=model_env_headers, index=None)
    new_input_valves = input_vlavs.copy()
    flag = True
    i = 0
    while(flag):
        out_env_essential_q = out_env[['Q_1','Q_2','Q_3','Q_4','Q_5','Q_7','QPlant_1','QPlant_2','QPlant_3','QPlant_4']]
        print(out_env_essential_q)
        flag = is_q_normal(out_env_essential_q.iloc[0])
        print(len(out_env_essential_q.iloc[0]))
        if not flag or i > 20: 
            print('ERROR!')
            break
        new_input_valves = super_solve(out_env_essential_q.iloc[0], -1, new_input_valves)
        print(new_input_valves)
        out_env = pd.DataFrame(data=[model_env.predict(new_input_valves)], columns=model_env_headers)
        i+=1
    print(new_input_valves)
    out_env = out_env.to_csv(header=None, index=False).strip(' ').split(' ')
    out_env = out_env[0].replace(',',' ')
    out_env = out_env.replace('\n', '')
    return {"fixed_date": out_env, "new_valvs": new_input_valves}

@app.get("/api/fit")
def fit_env(data: str):
    input_vlavs = [float(x) for x in data.split(' ')]
    fixed_val = int(input_vlavs[-1]) - 1
    input_vlavs = input_vlavs[:-1]

    output_val = model_env.predict(input_vlavs)
    out_env = pd.DataFrame(data=[output_val], columns=model_env_headers, index=None)
    new_input_valves = input_vlavs.copy()
    flag = True
    i = 0
    while(flag):
        out_env_essential_q = out_env[['Q_1','Q_2','Q_3','Q_4','Q_5','Q_7','QPlant_1','QPlant_2','QPlant_3','QPlant_4']]
        print(out_env_essential_q)
        flag = is_q_normal(out_env_essential_q.iloc[0])
        if not flag or i > 20: 
            print('ERROR!')
            break
        new_input_valves = super_solve(out_env_essential_q.iloc[0], fixed_val, new_input_valves)
        print(new_input_valves)
        out_env = pd.DataFrame(data=[model_env.predict(new_input_valves)], columns=model_env_headers)
        i+=1
    out_env = out_env.to_csv(header=None, index=False).strip(' ').split(' ')
    out_env = out_env[0].replace(',',' ')
    out_env = out_env.replace('\n', '')
    return {"fited_date": out_env, "new_valvs": new_input_valves}

@app.get("/api/update")
def update_env(data: str):
    input_vlavs = [float(x) for x in data.split(' ')]
    output_val = model_env.predict(input_vlavs)
    output_str = ''
    for elem in list(output_val):
      val_e = elem
      if elem < val_e:
        val_e = 0.0
      output_str += str(val_e)
      output_str += ' '
    output_str = output_str[:-1]

    return {"updated_data": output_str}