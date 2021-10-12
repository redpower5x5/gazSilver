$(window).ready(function () {

    $('#button_update').click(function(){
        var data ='';
        data += $('#butt_1').val();
        data += ' ';
        data += $('#butt_2').val();
        data += ' ';
        data += $('#butt_3').val();
        data += ' ';
        data += $('#butt_4').val();
        data += ' ';
        data += $('#butt_5').val();
        data += ' ';
        data += $('#butt_6').val();
        data += ' ';
        data += $('#butt_7').val();
        data += ' ';
        data += $('#butt_8').val();
        data += ' ';
        data += $('#butt_9').val();
        data += ' ';
        data += $('#butt_10').val();
        data += ' ';
        data += $('#butt_11').val();
        data += ' ';
        data += $('#butt_12').val();
        $.get("/api/update", { data: data }, function(data, status) {
            var ret = data.updated_data.split(" ");
            
            $('#_1').text("P1: " + (parseFloat(ret[0]) / 100000).toFixed(3));
            $('#_2').text("P2: " + (parseFloat(ret[1]) / 100000).toFixed(3));
            $('#_3').text("P3: " + (parseFloat(ret[2]) / 100000).toFixed(3));
            $('#_4').text("P4: " + (parseFloat(ret[3]) / 100000).toFixed(3));
            $('#_5').text("P5: " + (parseFloat(ret[4]) / 100000).toFixed(3));
            $('#_6').text("P6: " + (parseFloat(ret[5]) / 100000).toFixed(3));
            $('#_7').text("P7: " + (parseFloat(ret[6]) / 100000).toFixed(3));
            $('#_8').text("P8: " + (parseFloat(ret[7]) / 100000).toFixed(3));
            $('#_9').text("P9: " + (parseFloat(ret[8]) / 100000).toFixed(3));

            $('#a1').text("Q1: " + (parseFloat(ret[9])).toFixed(3));
            $('#a2').text("Q2: " + (parseFloat(ret[10])).toFixed(3));
            $('#a3').text("Q3: " + (parseFloat(ret[11])).toFixed(3));
            $('#a4').text("Q4: " + (parseFloat(ret[12])).toFixed(3));
            $('#a5').text("Q5: " + (parseFloat(ret[13])).toFixed(3));
            $('#a6').text("Q6: " + (parseFloat(ret[14])).toFixed(3));
            $('#a7').text("Q7: " + (parseFloat(ret[15])).toFixed(3));

            $('#a8').text("QP1: " + (parseFloat(ret[16])).toFixed(3));
            $('#a9').text("QP2: " + (parseFloat(ret[17])).toFixed(3));
            $('#a10').text("QP3: " + (parseFloat(ret[18])).toFixed(3));
            $('#a11').text("QP4: " + (parseFloat(ret[19])).toFixed(3));

            $('#a12').text("QG1: " + (parseFloat(ret[20])).toFixed(3));
            $('#a13').text("QG2: " + (parseFloat(ret[21])).toFixed(3));
            $('#_10').text("PG1: " + (parseFloat(ret[22]) / 100000).toFixed(3));
            $('#_11').text("PG2: " + (parseFloat(ret[23]) / 100000).toFixed(3));

            console.log(data.updated_data);
        }, "json");
    });


    $('#button_fix').click(function(){
        var data ='';
        data += $('#butt_1').val();
        data += ' ';
        data += $('#butt_2').val();
        data += ' ';
        data += $('#butt_3').val();
        data += ' ';
        data += $('#butt_4').val();
        data += ' ';
        data += $('#butt_5').val();
        data += ' ';
        data += $('#butt_6').val();
        data += ' ';
        data += $('#butt_7').val();
        data += ' ';
        data += $('#butt_8').val();
        data += ' ';
        data += $('#butt_9').val();
        data += ' ';
        data += $('#butt_10').val();
        data += ' ';
        data += $('#butt_11').val();
        data += ' ';
        data += $('#butt_12').val();
        $.get("/api/fix", { data: data }, function(data, status) {
            var ret = data.fixed_date.split(" ");
            
            $('#_1').text("P1: " + (parseFloat(ret[0]) / 100000).toFixed(3));
            $('#_2').text("P2: " + (parseFloat(ret[1]) / 100000).toFixed(3));
            $('#_3').text("P3: " + (parseFloat(ret[2]) / 100000).toFixed(3));
            $('#_4').text("P4: " + (parseFloat(ret[3]) / 100000).toFixed(3));
            $('#_5').text("P5: " + (parseFloat(ret[4]) / 100000).toFixed(3));
            $('#_6').text("P6: " + (parseFloat(ret[5]) / 100000).toFixed(3));
            $('#_7').text("P7: " + (parseFloat(ret[6]) / 100000).toFixed(3));
            $('#_8').text("P8: " + (parseFloat(ret[7]) / 100000).toFixed(3));
            $('#_9').text("P9: " + (parseFloat(ret[8]) / 100000).toFixed(3));

            $('#a1').text("Q1: " + (parseFloat(ret[9])).toFixed(3));
            $('#a2').text("Q2: " + (parseFloat(ret[10])).toFixed(3));
            $('#a3').text("Q3: " + (parseFloat(ret[11])).toFixed(3));
            $('#a4').text("Q4: " + (parseFloat(ret[12])).toFixed(3));
            $('#a5').text("Q5: " + (parseFloat(ret[13])).toFixed(3));
            $('#a6').text("Q6: " + (parseFloat(ret[14])).toFixed(3));
            $('#a7').text("Q7: " + (parseFloat(ret[15])).toFixed(3));

            $('#a8').text("QP1: " + (parseFloat(ret[16])).toFixed(3));
            $('#a9').text("QP2: " + (parseFloat(ret[17])).toFixed(3));
            $('#a10').text("QP3: " + (parseFloat(ret[18])).toFixed(3));
            $('#a11').text("QP4: " + (parseFloat(ret[19])).toFixed(3));

            $('#a12').text("QG1: " + (parseFloat(ret[20])).toFixed(3));
            $('#a13').text("QG2: " + (parseFloat(ret[21])).toFixed(3));
            $('#_10').text("PG1: " + (parseFloat(ret[22]) / 100000).toFixed(3));
            $('#_11').text("PG2: " + (parseFloat(ret[23]) / 100000).toFixed(3));
            
            var list_of_valvs = data.new_valvs;
            
            $('#butt_1').val(list_of_valvs[0]);
            $('#butt_2').val(list_of_valvs[1]);
            $('#butt_3').val(list_of_valvs[2]);
            $('#butt_4').val(list_of_valvs[3]);
            $('#butt_5').val(list_of_valvs[4]);
            $('#butt_6').val(list_of_valvs[5]);
            $('#butt_7').val(list_of_valvs[6]);
            $('#butt_8').val(list_of_valvs[7]);
            $('#butt_9').val(list_of_valvs[8]);
            $('#butt_10').val(list_of_valvs[9]);
            $('#butt_11').val(list_of_valvs[10]);
            $('#butt_12').val(list_of_valvs[11]);


            console.log(data.new_valvs);
        }, "json");
    });

    $('#button_update').click(function(){
        var data ='';
        data += $('#butt_1').val();
        data += ' ';
        data += $('#butt_2').val();
        data += ' ';
        data += $('#butt_3').val();
        data += ' ';
        data += $('#butt_4').val();
        data += ' ';
        data += $('#butt_5').val();
        data += ' ';
        data += $('#butt_6').val();
        data += ' ';
        data += $('#butt_7').val();
        data += ' ';
        data += $('#butt_8').val();
        data += ' ';
        data += $('#butt_9').val();
        data += ' ';
        data += $('#butt_10').val();
        data += ' ';
        data += $('#butt_11').val();
        data += ' ';
        data += $('#butt_12').val();
        $.get("/api/update", { data: data }, function(data, status) {
            var ret = data.updated_data.split(" ");
            
            $('#_1').text("P1: " + (parseFloat(ret[0]) / 100000).toFixed(3));
            $('#_2').text("P2: " + (parseFloat(ret[1]) / 100000).toFixed(3));
            $('#_3').text("P3: " + (parseFloat(ret[2]) / 100000).toFixed(3));
            $('#_4').text("P4: " + (parseFloat(ret[3]) / 100000).toFixed(3));
            $('#_5').text("P5: " + (parseFloat(ret[4]) / 100000).toFixed(3));
            $('#_6').text("P6: " + (parseFloat(ret[5]) / 100000).toFixed(3));
            $('#_7').text("P7: " + (parseFloat(ret[6]) / 100000).toFixed(3));
            $('#_8').text("P8: " + (parseFloat(ret[7]) / 100000).toFixed(3));
            $('#_9').text("P9: " + (parseFloat(ret[8]) / 100000).toFixed(3));

            $('#a1').text("Q1: " + (parseFloat(ret[9])).toFixed(3));
            $('#a2').text("Q2: " + (parseFloat(ret[10])).toFixed(3));
            $('#a3').text("Q3: " + (parseFloat(ret[11])).toFixed(3));
            $('#a4').text("Q4: " + (parseFloat(ret[12])).toFixed(3));
            $('#a5').text("Q5: " + (parseFloat(ret[13])).toFixed(3));
            $('#a6').text("Q6: " + (parseFloat(ret[14])).toFixed(3));
            $('#a7').text("Q7: " + (parseFloat(ret[15])).toFixed(3));

            $('#a8').text("QP1: " + (parseFloat(ret[16])).toFixed(3));
            $('#a9').text("QP2: " + (parseFloat(ret[17])).toFixed(3));
            $('#a10').text("QP3: " + (parseFloat(ret[18])).toFixed(3));
            $('#a11').text("QP4: " + (parseFloat(ret[19])).toFixed(3));

            $('#a12').text("QG1: " + (parseFloat(ret[20])).toFixed(3));
            $('#a13').text("QG2: " + (parseFloat(ret[21])).toFixed(3));
            $('#_10').text("PG1: " + (parseFloat(ret[22]) / 100000).toFixed(3));
            $('#_11').text("PG2: " + (parseFloat(ret[23]) / 100000).toFixed(3));

            console.log(data.updated_data);
        }, "json");
    });


    $('#button_fit').click(function(){
        var data ='';
        data += $('#butt_1').val();
        data += ' ';
        data += $('#butt_2').val();
        data += ' ';
        data += $('#butt_3').val();
        data += ' ';
        data += $('#butt_4').val();
        data += ' ';
        data += $('#butt_5').val();
        data += ' ';
        data += $('#butt_6').val();
        data += ' ';
        data += $('#butt_7').val();
        data += ' ';
        data += $('#butt_8').val();
        data += ' ';
        data += $('#butt_9').val();
        data += ' ';
        data += $('#butt_10').val();
        data += ' ';
        data += $('#butt_11').val();
        data += ' ';
        data += $('#butt_12').val();
        data += ' ';
        data += $('#button_13').val();
        $.get("/api/fit", { data: data }, function(data, status) {
            var ret = data.fixed_date.split(" ");
            
            $('#_1').text("P1: " + (parseFloat(ret[0]) / 100000).toFixed(3));
            $('#_2').text("P2: " + (parseFloat(ret[1]) / 100000).toFixed(3));
            $('#_3').text("P3: " + (parseFloat(ret[2]) / 100000).toFixed(3));
            $('#_4').text("P4: " + (parseFloat(ret[3]) / 100000).toFixed(3));
            $('#_5').text("P5: " + (parseFloat(ret[4]) / 100000).toFixed(3));
            $('#_6').text("P6: " + (parseFloat(ret[5]) / 100000).toFixed(3));
            $('#_7').text("P7: " + (parseFloat(ret[6]) / 100000).toFixed(3));
            $('#_8').text("P8: " + (parseFloat(ret[7]) / 100000).toFixed(3));
            $('#_9').text("P9: " + (parseFloat(ret[8]) / 100000).toFixed(3));

            $('#a1').text("Q1: " + (parseFloat(ret[9])).toFixed(3));
            $('#a2').text("Q2: " + (parseFloat(ret[10])).toFixed(3));
            $('#a3').text("Q3: " + (parseFloat(ret[11])).toFixed(3));
            $('#a4').text("Q4: " + (parseFloat(ret[12])).toFixed(3));
            $('#a5').text("Q5: " + (parseFloat(ret[13])).toFixed(3));
            $('#a6').text("Q6: " + (parseFloat(ret[14])).toFixed(3));
            $('#a7').text("Q7: " + (parseFloat(ret[15])).toFixed(3));

            $('#a8').text("QP1: " + (parseFloat(ret[16])).toFixed(3));
            $('#a9').text("QP2: " + (parseFloat(ret[17])).toFixed(3));
            $('#a10').text("QP3: " + (parseFloat(ret[18])).toFixed(3));
            $('#a11').text("QP4: " + (parseFloat(ret[19])).toFixed(3));

            $('#a12').text("QG1: " + (parseFloat(ret[20])).toFixed(3));
            $('#a13').text("QG2: " + (parseFloat(ret[21])).toFixed(3));
            $('#_10').text("PG1: " + (parseFloat(ret[22]) / 100000).toFixed(3));
            $('#_11').text("PG2: " + (parseFloat(ret[23]) / 100000).toFixed(3));

            var list_of_valvs = data.new_valvs;
            
            $('#butt_1').val(list_of_valvs[0]);
            $('#butt_2').val(list_of_valvs[1]);
            $('#butt_3').val(list_of_valvs[2]);
            $('#butt_4').val(list_of_valvs[3]);
            $('#butt_5').val(list_of_valvs[4]);
            $('#butt_6').val(list_of_valvs[5]);
            $('#butt_7').val(list_of_valvs[6]);
            $('#butt_8').val(list_of_valvs[7]);
            $('#butt_9').val(list_of_valvs[8]);
            $('#butt_10').val(list_of_valvs[9]);
            $('#butt_11').val(list_of_valvs[10]);
            $('#butt_12').val(list_of_valvs[11]);

            console.log(data.new_valvs);
        }, "json");
    });
});
