$(function(){
    let currentQuiz = null;
    $("#startButton").on("click",function(){
        console.log("Hello");
        if(currentQuiz == null)
        {
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`
                );
            });
            $("#startButton").attr("value","下一題");//把buttom的名稱修改成'下一題'
        }
        else
        {
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //是否已走到最後要產生結果(A~D)
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        answerScore.push(i+1);
                        var scoreForTiger = answerScore[4] + answerScore[9]+answerScore[13]+answerScore[17]+answerScore[23]+answerScore[29];
                        var scoreForPeacock = answerScore[2]+answerScore[5]+answerScore[12]+answerScore[19]+answerScore[21]+answerScore[28];
                        var scoreForKoala = answerScore[1]+answerScore[7]+answerScore[14]+answerScore[16]+answerScore[24]+answerScore[27];
                        var scoreForOwl = answerScore[0]+answerScore[6]+answerScore[10]+answerScore[15]+answerScore[20]+answerScore[25];
                        var scoreForChameleon = answerScore[3]+answerScore[8]+answerScore[11]+answerScore[18]+answerScore[22]+answerScore[26];

                        let finalAnswers={
                                "老虎":scoreForTiger,
                                "孔雀":scoreForPeacock,
                                "無尾熊":scoreForKoala,
                                "貓頭鷹":scoreForOwl,
                                "變色龍":scoreForChameleon
                        };
                        //answerScore[pt++]=i+1;
                        //通往最終結果
                        //var finalResult=questions[currentQuiz].answers[i][1];
                        //顯示最終結果的標題
                        $("#question").text("測驗結果");
                        //將選項區域
                        $("#options").empty();
                        //顯示最終結果
                        $("#options").append(
                            `老虎 : ${finalAnswers["老虎"]}<br>
                             孔雀 : ${finalAnswers["孔雀"]}<br>
                            無尾熊 : ${finalAnswers["無尾熊"]}<br>
                            貓頭鷹 : ${finalAnswers["貓頭鷹"]}<br>
                            變色龍 : ${finalAnswers["變色龍"]}<br>
                            <br>
                            <br>
                            <br>
                            老虎型 (支配型Dominance)<br>
                            有自信，夠權威，決斷力高，競爭性強，胸懷大志，喜歡評估。<br>
                            <br>
                            孔雀型 (表達型Extroversion)<br>
                            很熱心，夠樂觀，口才流暢，好交朋友，風度翩翩，誠懇熱心。<br>
                            <br>
                            無尾熊型 (耐心型Patience)<br>
                            很穩定，夠敦厚，溫和規律，不好衝突。<br>
                            <br>
                            貓頭鷹型 (精確型Conformity)<br>
                            很傳統，注重細節，條理分明，責任感強，重視紀律。<br>
                            <br>
                            變色龍型 (整合型1/2 Sigma)<br>
                            善於在工作中調整自己的角色去適應環境，具有很好的溝通能力。<br>
                            <br>`
                        );
                        currentQuiz = null;
                        pt=0;
                        $("#startButton").attr("value","重新開始");
                    }
                    else
                    {
                        answerScore.push(i+1);
                        //answerScore[pt++]=i+1;                        
                        //指定下一題，原始資料從1開始，所以要-1
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                        console.log(answerScore);
                    }
                    return false;//跳離迴圈的方式
                }
            });
        }
    });
});
var pt=0; 
