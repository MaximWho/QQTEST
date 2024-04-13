document.addEventListener('DOMContentLoaded', function() {
    const answers = ['a', 'b', 'c', 'd'];

    for (let i = 0; i <= 108; i++) {
        const questionGroups = document.querySelectorAll('.Question-group' + i );

        questionGroups.forEach((group) => {
            const radioButtons = group.querySelectorAll('input[type="radio"]');

            radioButtons.forEach((radio, index) => {
                radio.value = answers[index];
            });
        });
    }
});

document.getElementById('checkButton').addEventListener('click', function(event) {
    let correctAnswers = 0;
    const totalQuestions = 108;
    const correctAnswersArray = [
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
    let selectedAnswersArray = [];
    let incorrectAnswersArray = []; // Список неправильных ответов
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="Group${i}"]:checked`);
        if (selectedAnswer) {
            selectedAnswersArray.push(selectedAnswer.value);
            if (selectedAnswer.value === correctAnswersArray[i - 1]) { // Исправлено здесь
                correctAnswers++;
            } else {
                incorrectAnswersArray.push(i); // Добавляем номер вопроса в список неправильных ответов
            }
        }
    }
    const percentageCorrect = (correctAnswers / totalQuestions) * 100;
    if (percentageCorrect >= 30) {
        window.location.href = `success.html?correct=${correctAnswers}&total=${totalQuestions}&correctAnswers=${correctAnswersArray}&selectedAnswers=${selectedAnswersArray}&incorrectAnswers=${incorrectAnswersArray}`;
    } else {
        window.location.href = `fail.html?correct=${correctAnswers}&total=${totalQuestions}&correctAnswers=${correctAnswersArray}&selectedAnswers=${selectedAnswersArray}&incorrectAnswers=${incorrectAnswersArray}`;
    }
});
