document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки нажатия всех трех клавиш Ctrl + Alt + Shift
    function areAllKeysPressed(event) {
        return event.ctrlKey && event.altKey && event.shiftKey;
    }

    // Функция для запуска скрипта по нажатию комбинации клавиш Ctrl + Alt + Shift
    function runAutoTest(event) {
        if (areAllKeysPressed(event)) {
            // Ваш код для запуска автотеста
            const answers = [
                'a', 'c', 'c', 'a', 'a', 'b', 'd', 'c', 'c', 'a',
                'c', 'a', 'c', 'd', 'a', 'a', 'c', 'a', 'a', 'a',
                'c', 'c', 'c', 'd', 'b', 'c', 'c', 'c', 'b', 'd', 
                'a', 'd', 'd', 'd', 'c', 'a', 'b', 'c', 'a', 'a',
                'b', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b', 'b',
                'b', 'a', 'a', 'b', 'b', 'b', 'b', 'a', 'b', 'b',
                'a', 'b', 'a', 'b', 'b', 'a', 'a', 'a', 'b', 'b',
                'b', 'a', 'b', 'b', 'b', 'b', 'a', 'a', 'b', 'b',
                'b', 'b', 'a', 'b', 'b', 'a', 'a', 'b', 'a', 'a',
                'a', 'b', 'b', 'b', 'b', 'a', 'a', 'b', 'd', 'd', 'b'
            ];

            for (let i = 1; i <= 108; i++) {
                const radioButtons = document.querySelectorAll(`.Question-group${i} input[type="radio"]`);
                radioButtons.forEach((radio, index) => {
                    if (answers[i - 1] === radio.value) {
                        radio.checked = true;
                    }
                });
            }
        }
    }

    // Добавляем обработчик события на глобальном уровне
    document.addEventListener('keydown', runAutoTest);
});
