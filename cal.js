var calstr = '';
function add1() {
    if(calstr=='') calstr = '1';
    else{
        calstr += '1';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add2() {
    if(calstr=='') calstr = '2';
    else{
        calstr += '2';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add3() {
    if(calstr=='') calstr = '3';
    else{
        calstr += '3';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add4() {
    if(calstr=='') calstr = '4';
    else{
        calstr += '4';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add5() {
    if(calstr=='') calstr = '5';
    else{
        calstr += '5';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add6() {
    if(calstr=='') calstr = '6';
    else{
        calstr += '6';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add7() {
    if(calstr=='') calstr = '7';
    else{
        calstr += '7';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add8() {
    if(calstr=='') calstr = '8';
    else{
        calstr += '8';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add9() {
    if(calstr=='') calstr = '9';
    else{
        calstr += '9';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function add0() {
    if(calstr=='') calstr = '0';
    else{
        calstr += '0';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}

function addPlus() {
    if(calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-'){
        calstr = calstr.substring(0, calstr.length-1);
        calstr += '+';
    }
    else{
        calstr += '+';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function addMinus() {
    if(calstr.charAt(calstr.length-1)=='-' || calstr.charAt(calstr.length-1)=='+'){
        calstr = calstr.substring(0, calstr.length-1);
        calstr += '-';
    }
    else{
        calstr += '-';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function addTimes() {
    //符号*+ *- /+ /- 删去2
    if((calstr.charAt(calstr.length-2)=='*' && (calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-'))|| (calstr.charAt(calstr.length-2)=='/' && (calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-'))){
        calstr = calstr.substring(0, calstr.length-2);
        calstr += '*';
    }
    //符号** 删去1
    else if(calstr.charAt(calstr.length-2)=='*' && calstr.charAt(calstr.length-1)=='*')
    {
        calstr = calstr.substring(0, calstr.length-1);
        calstr += '*';
    }
    //符号+ - / 删去1
    else if(calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-' || calstr.charAt(calstr.length-1)=='/'){
        calstr = calstr.substring(0, calstr.length-1);
        calstr += '*';
    }
    else{
        calstr += '*';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function addDivide() {
    //符号**+ 或者**- 删去3
    if(calstr.charAt(calstr.length-3)=='*' && calstr.charAt(calstr.length-2)=='*' && (calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-')){
        calstr = calstr.substring(0, calstr.length-3);
        calstr += '/';
    }
    //符号*+ *- ** /+ /-删去2
    else if((calstr.charAt(calstr.length-2)=='*' && (calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-' || calstr.charAt(calstr.length-1)=='*'))|| (calstr.charAt(calstr.length-2)=='/' && (calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-'))){
        calstr = calstr.substring(0, calstr.length-2);
        calstr += '/';
    }
    //符号+ - * / 删去1
    else if(calstr.charAt(calstr.length-1)=='+' || calstr.charAt(calstr.length-1)=='-' || calstr.charAt(calstr.length-1)=='*' || calstr.charAt(calstr.length-1)=='/'){
        calstr = calstr.substring(0, calstr.length-1);
        calstr += '/';
    }
    else{
        calstr += '/';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function addPoint() {
    if(calstr=='') calstr = '.';
    else{
        calstr += '.';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}

function addLeftPare() {
    if(calstr=='') calstr = '(';
    else{
        calstr += '(';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}
function addRightPare() {
    if(calstr=='') calstr = ')';
    else{
        calstr += ')';
    }
    ifOverflow();
    document.getElementById("view").value = calstr;
}

function back() {
    calstr = calstr.substring(0, calstr.length-1);
    document.getElementById("view").value = calstr;
}
function clearAll() {
    calstr = '';
    document.getElementById("view").value = calstr;
}
function getResult() {
    try{
        if(calstr==''){
            result = '';
        }else if(isNaN(eval(calstr))){
            throw 'wrong';
        }          
        else{
            result = eval(calstr);
        }
    }
    catch(err){
        alert('算式有误');
        result = 'Error';
    }
    calstr = '';
    document.getElementById("view").value = result;
    result = null;
}

function ifOverflow() {
    if(calstr.length>22){
        calstr = calstr.substring(0, 22);
        alert("超出最大算式长度");
    }       
}