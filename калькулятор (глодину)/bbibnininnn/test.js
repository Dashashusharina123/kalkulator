function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 + num2;
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 - num2;
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 * num2;
}
function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2))  return NaN;
    if (num2 === 0) return "На ноль делить нельзя";
    const result = num1 / num2;
    if (Math.abs(result) < 0.0000001) return "Число слишклм маленькое при делении";
    document.getElementById("result").innerText = Math.round(result * 1000000) / 1000000;
 }

function square() {
    const num1 = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").innerText = num1 * num1;
}

function cube() {
    const num1 = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").innerText = num1 * num1 * num1;
}

function sqrt() {
    const num1 = parseFloat(document.getElementById("num1").value);
    if (num1 >= 0) {
        document.getElementById("result").innerText = Math.sqrt(num1);
    } else {
        document.getElementById("result").innerText = "Ошибка: корень из отрицательного числа";
    }
}
