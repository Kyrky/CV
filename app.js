i18next.init({
    lng: 'uk', 
    resources: {
        uk: {
            translation: {
                "title": "Моє Резюме",
                "personal-info": "Особисті Дані",
                "name": "ПІБ:",
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
                "specialty": "Спеціальність: 121 Інженерія Програмного забезпечення"
            }
        },
        en: {
            translation: {
                "title": "My Resume",
                "personal-info": "Personal Info",
                "name": "Full Name:",
                "skills-title": "Skills:",
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
                "specialty": "Specialty: 121 Software Engineering"
            }
        },
        ru: {
            translation: {
                "title": "Мое Резюме",
                "personal-info": "Личные Данные",
                "name": "ФИО:",
                "skills-title": "Навыки:",
                "experience-title": "Опыт:",
                "experience-details": "Более подробный опыт:",
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
                "specialty": "Специальность: 121 Инженерия Программного обеспечения"
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
