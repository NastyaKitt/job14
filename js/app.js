const texts = document.querySelectorAll('.text');
let currentIndex = 0;

function showNextText() {
    texts[currentIndex].classList.remove('show'); // Убираем активный класс у текущего текста
    currentIndex = (currentIndex + 1) % texts.length; // Переход к следующему тексту
    texts[currentIndex].classList.add('show'); // Добавляем активный класс к новому тексту
}

// Изначально показываем первый текст
texts[currentIndex].classList.add('show');

// Меняем текст каждые 5 секунд
setInterval(showNextText, 5000);


// 

document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelectorAll('.sliderItem');
    let currentIndexx = 0;
    const activeCount = 3; // Количество активных слайдов

    function showSlides() {
        sliderItems.forEach(item => item.classList.remove('show'));

        for (let i = 0; i < activeCount; i++) {
            const index = (currentIndexx + i) % sliderItems.length;
            sliderItems[index].classList.add('show');
        }
    }

    function showNextSlide() {
        currentIndexx = (currentIndexx + 1) % sliderItems.length; 
        showSlides();
    }

    showSlides();
    setInterval(showNextSlide, 5000);
});


// 


const sliderItemss = document.querySelectorAll('.howMeItem');
const numberToShow = 3; // Количество слайдов, которые нужно показать
let currentIndexxx = 0; // Индекс текущего слайда

// Функция для отображения текущих слайдов
function showSlide() {
    // Скрываем все слайды
    sliderItemss.forEach(item => item.classList.remove('show'));

    // Показываем три текущих слайда
    for (let i = 0; i < numberToShow; i++) {
        const index = (currentIndexxx + i) % sliderItemss.length; // Оборачиваем индекс, если он превышает длину массива
        sliderItemss[index].classList.add('show');
    }
}

// Функция для переключения на следующий набор слайдов
function showNextSlide() {
    currentIndexxx = (currentIndexxx + 1) % sliderItemss.length; // Переход к следующему слайду
    showSlide(); // Обновляем отображение текущих слайдов
}

// Изначально показываем первый набор слайдов
showSlide();

// Меняем слайд каждые 5 секунд
setInterval(showNextSlide, 5000);

// 


let currentIndes = 0;
const reviewItems = document.querySelectorAll('.reviewItem');

function showNextReview() {
    reviewItems[currentIndes].classList.remove('show');
    currentIndes = (currentIndes + 1) % reviewItems.length;
    reviewItems[currentIndes].classList.add('show');
}

setInterval(showNextReview, 5000);


// 


let popup = document.getElementById('popup')
let cls = document.getElementById('cls')
let cal1 = document.getElementById('call1')
let cal2 = document.getElementById('call2')
let cal3 = document.getElementById('call3')

cal1.addEventListener('click', function(){
    popup.classList.add('show')
})
cal2.addEventListener('click', function(){
    popup.classList.add('show')
})
cal3.addEventListener('click', function(){
    popup.classList.add('show')
})
cls.addEventListener('click', function(){
    popup.classList.remove('show')
})



// 




function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Элементы ввода с идентификаторами #tel и #tel1
    var inputs = [document.querySelector("#tel"), document.querySelector("#tel1")];

    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false);
        input.focus();
        setCursorPosition(3, input);
    });
});
