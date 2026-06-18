const counter = document.getElementById('counter');
const btn = document.getElementById('add_1');
let count = 0;

// Fetch the current counter value from the server on page load
function updateCounterFromServer() {
    fetch('/counter')
        .then(response => response.json())
        .then(data => {
            count = data.counter;
            counter.textContent = count;
        })
        .catch(err => {
            counter.textContent = 'Ошибка';
            console.error('Ошибка при получении значения счетчика:', err);
        });
}

updateCounterFromServer();

btn.addEventListener('click', () => {
    fetch('/counter', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        count = data.counter;
        counter.textContent = count;
    })
    .catch(err => {
        counter.textContent = 'Ошибка';
        console.error('Ошибка при увеличении счетчика:', err);
    });
});

document.getElementById('virus').addEventListener('click', function() {
    alert("Downloading malware is in progress");
    const link = document.getElementById('downloadLink');
    if (link.href) {
        link.click();  // Инициируем клик по ссылке
    } else {
        console.error('Ошибка: ссылка на файл не задана или файл не найден.');}
});
