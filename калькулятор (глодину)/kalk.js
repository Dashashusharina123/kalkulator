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
let result = document.getElementById("result")
function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("result").innerText = num1 / num2;
    } else if(num2 == 0){
        document.getElementById("result").innerText = "Ошибка: деление на ноль";
    } if (Math.abs(result) < 0.0000001) { // Сравниваем с 0.0000001 (7 нулей)
        document.getElementById("result").innerText = "Число слишком маленькое при делении";
    } else {
        document.getElementById("result").toFixed(7); // Форматируем до 7 знаков
    }
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