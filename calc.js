function add(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let result = n1 + n2;
    document.getElementById("result").innerHTML="<strong>Result : "+ String(result) + "</strong>"
}
function sub(){
    let n3 = Number(document.getElementById("num1").value);
    let n4 = Number(document.getElementById("num2").value);
    if n3>=n4{
        let result = n3 - n4;
        document.getElementById("result").innerHTML="<strong>Result : "+ String(result) + "</strong>"
    }

}
function div(){
    let n5 = Number(document.getElementById("num1").value);
    let n6 = Number(document.getElementById("num2").value);

    let result = n5 / n6;
    document.getElementById("result").innerHTML="<strong>Result : "+ String(result) + "</strong>"
}
function mul(){
    let n7 = Number(document.getElementById("num1").value);
    let n8 = Number(document.getElementById("num2").value);

    let result = n7 * n8;
    document.getElementById("result").innerHTML="<strong>Result : "+ String(result) + "</strong>"
}