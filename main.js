function calcBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var total = (weight * 703) / (height * height);
    var bmi = parseInt(total);
    document.getElementById("result").value = bmi;
}
document.getElementById("submit").addEventListener("click", calcBMI, false);

