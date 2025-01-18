i18next.init({
    lng: 'en', 
    resources: {
        uk: {
            translation: {
                "title": "Резюме",
                "name": "Романюк Ярослав",
                "skills-title": "Стек:",
                "experience-title": "Досвід:",
                "experience-details": "Більш детально про прикладний досвід:",
                "education-title": "Освіта:",
                "contacts-title": "Контакти:",
                "phone": "Телефон",
                "email": "Email",
                "experience1": "Розробка вебсайтів використовуючи стандартні HTML, CSS, JS | PHP.",
                "experience2": "Розробка вебсайтів з фреймворками: React, ASP.NET MVC.",
                "experience3": "Досвід у створенні консольних додатків C++ | C# | Python.",
                "experience4": "Створення системи CRUD на вебсайті, використовуючи БД MySQL.",
                "experience5": "Навички роботи з MySQL (підключення до проєкту, зв'язки).",
                "experience6": "Створення парсерів з GUI, на Python.",
                "experience7": "Досвід у створенні ігор на Godot Engine (Python).",
                "experience8": "Навички роботи у команді з системою контролю версій Git.",
                "experience9": "Розуміння принципів розробки в команді по методологіям: Kanban, Agile, Scrum і тд",
                "education-status": "Студент 2 курсу",
                "university": "Державний університет інформаційно-комунікаційних технологій (ДУІКТ)",
                "specialty": "Спеціальність: 121 Інженерія Програмного забезпечення. Освітня програма: Технології цифрового розвитку",
                "characteristics-title": "Особистість:",
                "characteristics-text": "Прямолінійність, наполегливість, добре працюю і в команді, і сам, дисциплінованість і креативність",
                "hobbies-title": "Хоббі:",
                "hobbies-text": "Займаюсь спортом (тренажерний зал), читаю багато книжок (в основному фентезі або фантастика), іноді граю в комп'ютерні ігри, саморозвиток (курси, книги).",
                "copyright" : "2025 Романюк Ярослав. Всі права захищені.",
            }
        },
        en: {
            translation: {
                "title": "CV",
                "name": "Romaniuk Yaroslav ",
                "skills-title": "Steck:",
                "experience-title": "Experience:",
                "experience-details": "More detailed experience:",
                "education-title": "Education:",
                "contacts-title": "Contacts:",
                "phone": "Phone:",
                "email": "Email:",
                "experience1": "Developing websites using standard HTML, CSS, JS | PHP.",
                "experience2": "Developing websites with frameworks: React, ASP.NET MVC.",
                "experience3": "Experience in creating console apps in C++ | C# | Python.",
                "experience4": "Creating a CRUD system on a website using MySQL database.",
                "experience5": "Skills in working with MySQL (connecting to projects, relationships).",
                "experience6": "Creating parsers with GUI, in Python.",
                "experience7": "Experience in creating games on Godot Engine (Python).",
                "experience8": "Teamwork skills with version control system Git.",
                "experience9": "Understanding team development principles with methodologies: Kanban, Agile, Scrum, etc.",
                "education-status": "2nd Year Student",
                "university": "State University of Information and Communication Technologies (DUICT)",
                "specialty": "Specialty: 121 Software Engineer. Study program: Digital Development Technologies  ",
                "characteristics-title": "Personality:",
                "characteristics-text": "Straightforwardness, perseverance, I work well both in a team and independently, Discipline and Creativity",
                "hobbies-title": "Hobbies:",
                "hobbies-text": "I engage in sports (gym), I read a lot of books (mainly fantasy or sci-fi), sometimes play computer games, self-development (courses, books).",
                "copyright" : "2025  Romaniuk Yaroslav. All rights deserved.",
            }
        },
        ru: {
            translation: {
                "title": "Резюме",
                "name": "Романюк Ярослав",
                "skills-title": "Стек:",
                "experience-title": "Опыт:",
                "experience-details": "Более подробный о опыте:",
                "education-title": "Образование:",
                "contacts-title": "Контакты:",
                "phone": "Телефон",
                "email": "Email",
                "experience1": "Разработка сайтов с использованием стандартных HTML, CSS, JS | PHP.",
                "experience2": "Разработка сайтов с фреймворками: React, ASP.NET MVC.",
                "experience3": "Опыт создания консольных приложений на C++ | C# | Python.",
                "experience4": "Создание системы CRUD на сайте с использованием базы данных MySQL.",
                "experience5": "Навыки работы с MySQL (подключение к проекту, связи).",
                "experience6": "Создание парсеров с GUI на Python.",
                "experience7": "Опыт создания игр на Godot Engine (Python).",
                "experience8": "Навыки работы в команде с системой контроля версий Git.",
                "experience9": "Понимание принципов разработки в команде по методологиям: Kanban, Agile, Scrum и тд",
                "education-status": "Студент 2 курса",
                "university": "Государственный университет информационно-коммуникационных технологий (ДУИКТ)",
                "specialty": "Специальность: 121 Инженерия Программного обеспечения. Програма обучения: Технологии Цифрового Развития",
                "characteristics-title": "Личные качества:",
                "characteristics-text": "Прямолинейность, настойчивость, хорошо работаю как в команде, так и самостоятельно, дисциплинованость и креативность.",
                "hobbies-title": "Хобби:",
                "hobbies-text": "Занимаюсь спортом (тренажерный зал), читаю много книг (в основном фэнтези или фантастика), иногда играю в компьютерные игры, саморазвитие (курсы, книги).",
                "copyright" : "2025 Романюк Ярослав. Всі права защищены",
            }
        }
    }
});


function changeLanguage(language) {
    i18next.changeLanguage(language, () => {
        updateContent();
    });
}


function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18next.t(key);
    });
}


updateContent();
