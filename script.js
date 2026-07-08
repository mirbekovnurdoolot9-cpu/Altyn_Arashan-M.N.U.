// БАЗА ДАННЫХ ПЕРЕВОДОВ
const translations = {
    kg: {
        "nav-about": "Аймак жөнүндө",
        "nav-gallery": "Галерея",
        "nav-route": "Маршрут & 2GIS",
        "nav-contacts": "Байланышуу",
        "nav-reviews": "Пикирлер",
        "hero-title": "Алтын-Арашан капчыгайы",
        "hero-desc": "Ысык-Көлдүн ысык булактары, залкар тоолору жана кол тийбеген табияты",
        "hero-btn": "Маршрутту көрүү",
        "about-title": "Кереметтүү Алтын-Арашан",
        "about-p1": "<strong>Алтын-Арашан</strong> — бул Кыргызстандагы эң атактуу жана кооз капчыгайлардын бири, Каракол шаарына жакын жерде жайгашкан.",
        "about-p2": "Бул жер 2600 метр бийиктикте, Тянь-Шань карагайларынын арасында ачык асман алдында чыккан дарылык касиети бар радон жана күкүрт суулуу ысык булактары менен белгилүү. Бул жерде сиз анык кыргыз боз үйлөрүндө жашап, кымыз ичип, көчмөн турмушту сезе аласыз.",
        "about-road": "<strong>Бул жакка келүүчү жол — өзүнчө бир укмуштуу окуя!</strong> Жөнөкөй унаа бул жерден өтө албайт. Сизди советтик аскердик УАЗ же ГАЗ-66 жол тандабастары менен таштак жолдор, чоң валундар жана тоо суулары аркылуу өтүүчү экстремалдык жана унутулгус саякат күтөт. Бул адреналинди өмүр бою унутпайсыз!",
        "f-height": "Бийиктиги: ~2600 м",
        "f-springs": "Термалдык булактар",
        "f-yurts": "Боз үйлөрдө түнөө",
        "f-track": "Экстремалдык оффроуд",
        "gallery-title": "Сүрөт галереясы",
        "route-title": "Интерактивдүү маршрут",
        "route-desc": "Биз сиздер үчүн ыңгайлуу карта даярдадык. Алтын-Арашандын так жайгашкан жерин Кыргызстандагы популярдуу 2GIS навигатору аркылуу көрө аласыз.",
        "twogis-title": "2GISтеги Алтын-Арашан картасы",
        "twogis-p": "Караколдон баштап унаа же жөө жүрүү маршрутун түзүү үчүн төмөнкү баскычты басыңыз.",
        "twogis-btn": "2GISте ачуу",
        "social-title": "Биз менен байланышыңыз",
        "insta-box-text": "Кантип жетүүнү, кайда калууну билип алыңыз жана актуалдуу сторисдерди көрүңүз.",
        "insta-btn": "Instagram ачуу",
        "wa-box-text": "Жол тандабас унааны же боз үйдү брондоо үчүн азыр түз жазыңыз!",
        "wa-btn": "WhatsAppка жазуу",
        "reviews-title": "Конокторубуздун пикирлери",
        "reviews-swipe-help": "Бардык пикирлерди окуу үчүн капталга сүрүңүз",
        "r1-text": "\"Бул укмуштуудай жер! Ал жакка баруучу жол — жол тандабас унаалар менен чыныгы укмуштуу окуя, ал эми узак жөө жүрүштөн кийин ысык булактарга түшүү — бул жөн эле бейиш.\"",
        "r1-author": "— Александр, Бишкек",
        "r2-text": "\"Палатка чокусунун көрүнүшү абдан сонун. Конок үйүндө калдык, адамдары абдан меймандос экен. Сөзсүз түрдө дагы келем!\"",
        "r2-author": "— Эмили, Франция",
        "r3-text": "\"Таза аба, карагайдын жыты жана жапайы табият. Instagram маршруту трекингге алдын ала даярданууга жардамведди. Баарыңарга сунуштайм!\"",
        "r3-author": "— Нурбек, Ош",
        "r4-text": "\"Жергиликтүү үй-бүлөнүн боз үйүндө жашадык. Кечинде ысык чай ичип, жылдыздарды карадык — ал жактагы асман укмуш экен! Жолу катаал, бирок татыктуу.\"",
        "r4-author": "— Данияр, Каракол",
        "r5-text": "\"Кыргызстандын табиятына толугу менен суктануу. Өрөөндө чуркап жүргөн аттар жана дарыянын жээгиндеги термалдык ванналар. Соцтармактагы сүрөттөр алдабайт!\"",
        "r5-author": "— Лиза, Германия",
        "footer-text": "&copy; 2026 Алтын-Арашан Туризм. Кыргызстанга кош келиңиздер!"
    },
    ru: {
        "nav-about": "О месте",
        "nav-gallery": "Галерея",
        "nav-route": "Маршрут & 2GIS",
        "nav-contacts": "Контакты",
        "nav-reviews": "Отзывы",
        "hero-title": "Ущелье Алтын-Арашан",
        "hero-desc": "Горячие источники, величественные горы и первозданная природа Иссык-Куля",
        "hero-btn": "Смотреть маршрут",
        "about-title": "О прекрасном Алтын-Арашане",
        "about-p1": "<strong>Алтын-Арашан</strong> (в переводе «Золотой источник») — это одно из самых знаменитых и живописных ущелий в Кыргызстане, расположенное недалеко от города Каракол.",
        "about-p2": "Оно знаменито своими целебными горячими радоновыми и сероводородными источниками, которые бьют прямо под открытым небом среди тянь-шаньских елей на высоте 2600 метров. Здесь можно пожить в настоящих кыргызских юртах, попить кумыс и ощутить кочевой быт.",
        "about-road": "<strong>Дорога сюда — это отдельное приключение!</strong> Обычная машина здесь не проедет. Вас ждет экстремальный и незабываемый подъем на советских военных внедорожниках УАЗ или ГАЗ-66 по каменистым ухабам, огромным валунам и горным рекам. Этот адреналин вы запомните на всю жизнь!",
        "f-height": "Высота: ~2600 м",
        "f-springs": "Термальные источники",
        "f-yurts": "Ночевка в юртах",
        "f-track": "Экстремальный оффроуд",
        "gallery-title": "Галерея",
        "route-title": "Интерактивный маршрут",
        "route-desc": "Мы подготовили для вас удобную карту. Вы можете посмотреть точное расположение Алтын-Арашана прямо через популярный в Кыргызстане навигатор 2GIS.",
        "twogis-title": "Карта Алтын-Арашан в 2GIS",
        "twogis-p": "Нажмите на кнопку ниже, чтобы открыть карту, проложить автомобильный или пеший маршрут от Каракола.",
        "twogis-btn": "Открыть в 2GIS",
        "social-title": "Свяжитесь с нами",
        "insta-box-text": "Узнай, как добраться, где остановиться и посмотри актуальные сторис.",
        "insta-btn": "Открыть Instagram",
        "wa-box-text": "Напишите нам прямо сейчас, чтобы забронировать внедорожник или юрту!",
        "wa-btn": "Написать в WhatsApp",
        "reviews-title": "Отзывы наших гостей",
        "reviews-swipe-help": "Листайте пальцем влево или вправо, чтобы прочесть все истории",
        "r1-text": "\"Это невероятное место! Дорога туда — настоящее приключение на внедорожниках, а купание в горячих источниках после долгого похода — это просто рай.\"",
        "r1-author": "— Александр, Бишкек",
        "r2-text": "\"Вид на пик Палатка открывается потрясающий. Останавливались в гостевом доме, люди очень гостеприимные. Обязательно вернусь еще раз!\"",
        "r2-author": "— Эмили, Франция",
        "r3-text": "\"Чистейший воздух, запах хвои и дикая природа. Instagram маршрут помог заранее подготовиться к трекингу. Всем советую!\"",
        "r3-author": "— Нурбек, Ош",
        "r4-text": "\"Жили в юртах у местной семьи. Вечером пили горячий чай и смотрели на звезды — небо там космическое! Дорога жесткая, но она того стоит.\"",
        "r4-author": "— Данияр, Каракол",
        "r5-text": "\"Абсолютный восторг от природы Кыргызстана. Лошади, бегущие по долине, и термальные ванны прямо у реки. Слайды в соцсетях не врут!\"",
        "r5-author": "— Лиза, Германия",
        "footer-text": "&copy; 2026 Алтын-Арашан Туризм. Добро пожаловать в Кыргызстан!"
    },
    en: {
        "nav-about": "About",
        "nav-gallery": "Gallery",
        "nav-route": "Route & 2GIS",
        "nav-contacts": "Contacts",
        "nav-reviews": "Reviews",
        "hero-title": "Altyn-Arashan Gorge",
        "hero-desc": "Hot springs, majestic mountains and pristine nature of Issyk-Kul",
        "hero-btn": "View Route",
        "about-title": "About Beautiful Altyn-Arashan",
        "about-p1": "<strong>Altyn-Arashan</strong> ('Golden Spa') is one of the most famous and picturesque gorges in Kyrgyzstan, located near Karakol city.",
        "about-p2": "It is famous for its healing hot radon and hydrogen sulfide springs, which flow right under the open sky among Tien Shan spruces at an altitude of 2600 meters. Here you can live in real Kyrgyz yurts, drink kymyz and experience nomadic life.",
        "about-road": "<strong>The road here is an adventure of its own!</strong> A regular car cannot drive here. An extreme and unforgettable climb awaits you on Soviet military off-road vehicles UAZ or GAZ-66 over rocky bumps, huge boulders and mountain rivers. You will remember this adrenaline for the rest of your life!",
        "f-height": "Altitude: ~2600 m",
        "f-springs": "Thermal Springs",
        "f-yurts": "Stay in Yurts",
        "f-track": "Extreme Offroad",
        "gallery-title": "Gallery",
        "route-title": "Interactive Route",
        "route-desc": "We have prepared a handy map for you. You can check the exact location of Altyn-Arashan directly via the 2GIS navigator, which is popular in Kyrgyzstan.",
        "twogis-title": "Altyn-Arashan Map in 2GIS",
        "twogis-p": "Click the button below to open the map and set a driving or trekking route from Karakol.",
        "twogis-btn": "Open in 2GIS",
        "social-title": "Contact Us",
        "insta-box-text": "Find out how to get there, where to stay, and check out current stories.",
        "insta-btn": "Open Instagram",
        "wa-box-text": "Text us right now to book an off-road truck or a yurt!",
        "wa-btn": "Text on WhatsApp",
        "reviews-title": "Guest Reviews",
        "reviews-swipe-help": "Swipe left or right to read all stories",
        "r1-text": "\"This place is incredible! The road there is a real off-road adventure, and swimming in hot springs after a long hike is just paradise.\"",
        "r1-author": "— Alexander, Bishkek",
        "r2-text": "\"The view of Palatka Peak is stunning. We stayed in a guesthouse, the people are very hospitable. Will definitely come back!\"",
        "r2-author": "— Emily, France",
        "r3-text": "\"Purest air, the smell of pine, and wild nature. The Instagram route helped to prepare for the trek in advance. Highly recommend!\"",
        "r3-author": "— Nurbek, Osh",
        "r4-text": "\"We lived in yurts with a local family. In the evening we drank hot tea and looked at the stars — the sky there is cosmic! The road is tough, but it's worth it.\"",
        "r4-author": "— Daniyar, Karakol",
        "r5-text": "\"Absolute delight from the nature of Kyrgyzstan. Horses running through the valley and thermal baths right by the river. Slides on social networks don't lie!\"",
        "r5-author": "— Lisa, Germany",
        "footer-text": "&copy; 2026 Altyn-Arashan Tourism. Welcome to Kyrgyzstan!"
    }
};

// 1. ПЕРЕВОДЧИК
document.querySelectorAll('[data-btn-lang]').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-btn-lang');
        
        document.querySelectorAll('[data-lang]').forEach(element => {
            const translationKey = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][translationKey]) {
                element.innerHTML = translations[lang][translationKey];
            }
        });

        document.querySelectorAll('[data-btn-lang]').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});

// 2. МОБИЛЬНОЕ БУРГЕР-МЕНЮ (Открытие / Закрытие)
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // Меняем иконку с трех полосок на крестик
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// Закрытие меню при клике на любую ссылку (чтобы удобно перемещаться)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// 3. ЭМУЛЯЦИЯ СВАЙПА ДЛЯ МЫШКИ НА ПК
const slider = document.getElementById('swipeContainer');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

// 4. УВЕЛИЧЕНИЕ ФОТО (МОДАЛКА)
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener('click', () => modal.style.display = "none");
modal.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = "none"; });

// 5. ПЛАВНЫЙ СКРОЛЛ-ЭФФЕКТ
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();