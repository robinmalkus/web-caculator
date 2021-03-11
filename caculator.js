function add_number() {
    var value1=parseInt(document.getElementById("number").value);
    var value2=parseInt(document.getElementById("numbertwo").value);
    var sum=value1+value2;
    document.getElementById("result").value=sum;
    alert(sum);
}

function minus_number() {
    var value3=parseInt(document.getElementById("numberthree").value);
    var value4=parseInt(document.getElementById("numberfour").value);
    var subtract=value3-value4;
    document.getElementById("difference").value=subtract;
    alert(subtract);
    
}

function division_number() {
    var value5=parseInt(document.getElementById("numberfive").value);
    var value6=parseInt(document.getElementById("numbersix").value);
    var division=value5 / value6;
    document.getElementById("divide").value=division;
    alert(division);

}

function multiple_number() {
    var value7=parseInt (document.getElementById("numberseven").value);
    var value8=parseInt(document.getElementById("numberseven").value);
    var multiple=value7 * value8;
    document.getElementById("multiplication").value=multiple;
    alert(multiple);
}