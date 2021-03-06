function add_number() {
    var value1=parseInt (document.getElementById("number").value);
    var value2=parseInt (document.getElementById("numbertwo").value);
    var sum=value1+value2;
    document.getElementById("result").value=sum;
    alert(sum);
}
