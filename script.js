// Переключение темы
const themeToggle = document.getElementById('theme-toggle');

// Проверяем, была ли выбрана тёмная тема ранее
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = 'Светлая тема';
}

// Обработчик кнопки темы
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        // Переключаем на светлую
        document.body.classList.remove('dark-theme');
        themeToggle.textContent = 'Тёмная тема';
        localStorage.setItem('darkTheme', 'false');
    } else {
        // Переключаем на темную
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Светлая тема';
        localStorage.setItem('darkTheme', 'true');
    }
});

// Кнопка "Наверх"
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Имитация отправки формы
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Сообщение об успехе
        alert('Сообщение успешно отправлено!');
        
        // Очищаем форму
        contactForm.reset();
    });
}