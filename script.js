const counter = document.getElementById('counter');
const btn = document.getElementById('add_1');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    counter.textContent = count;

}); 

document.getElementById('virus').addEventListener('click', function() {
    alert("Downloading malware is in progress");
    const link = document.getElementById('downloadLink');
    if (link.href) {
        link.click();  // Инициируем клик по ссылке
    } else {
        console.error('Ошибка: ссылка на файл не задана или файл не найден.');}
});