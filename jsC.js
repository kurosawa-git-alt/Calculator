var result = document.getElementById("inputDisplay");
totalNum = 0;
display = "";
tInput = "+";
judg = 1;

function num(val) {
    judg = 0;
    display += val.value;
    result.value = display;
}

function mark(val) {
    if(judg == 0){
        judg = 1;
        calc = totalNum + tInput + display;
        totalNum = (new Function("return " + calc))();
        display = "";
        result.value = totalNum;
    }
    if(val == "=") {
        totalNum = 0;
        tInput = "+";
    }else{
        tInput =val.value;
    }
}

function power() {
    totalNum = 0;
    tInput = "+";
    display = "";
    result.value = totalNum;
}