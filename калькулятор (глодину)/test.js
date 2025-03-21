describe("Калькулятор", function() {
        it("2 + 3 должно быть 5", function() {
            assert.equal(add(2, 3), 5);
        });
        it("-2 + (-3) должно быть -5", function() {
            assert.equal(add(-2, -3), -5);
        });
        it("Сложение с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(add("abc", 3));
        });
        it("5 - 3 должно быть 2", function() {
            assert.equal(subtract(5, 3), 2);
        });
        it("-5 - (-3) должно быть -2", function() {
            assert.equal(subtract(-5, -3), -2);
        });
        it("Вычитание с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(subtract("abc", 3));
        });
        it("2 * 3 должно быть 6", function() {
            assert.equal(multiply(2, 3), 6);
        });
        it("-2 * (-3) должно быть 6", function() {
            assert.equal(multiply(-2, -3), 6);
        });
        it("Умножение с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(multiply("abc", 3));
        });
        it("6 / 3 должно быть 2", function() {
            assert.equal(divide(6, 3), 2);
        });
        it("-6 / (-3) должно быть 2", function() {
            assert.equal(divide(-6, -3), 2);
        });
        it("Деление на ноль должно вернуть Infinity", function() {
            assert.equal(divide(6, 0), Infinity);
        });
        it("Деление с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(divide("abc", 3));
        });
        it("Квадратный корень из 9 должен быть 3", function() {
            assert.equal(squareRoot(9), 3);
        });
        it("Квадратный корень из -1 должен быть NaN", function() {
            assert.isNaN(squareRoot(-1));
        });
        it("Квадратный корень из строки 'abc' должен быть NaN", function() {
            assert.isNaN(squareRoot("abc"));
        });
        it("2 в квадрате должно быть 4", function() {
            assert.equal(square(2), 4);
        });
        it("-2 в квадрате должно быть 4", function() {
            assert.equal(square(-2), 4);
        });
        it("Возведение в квадрат строки 'abc' должно вернуть NaN", function() {
            assert.isNaN(square("abc"));
        });
    });