const cards = [

    // ФАКТЫ

    {
        id: 1,
        type: "fact",
        title: "У некоторых грибов есть собственные «часы»",
        text: "У ряда грибов обнаружены циркадные ритмы: их активность и процессы обмена веществ могут меняться в зависимости от времени суток даже при постоянном освещении.",
        extra: "Биология · Микология",
        source: { label: "PubMed: How fungi keep time", url: "https://pubmed.ncbi.nlm.nih.gov/17064954/" }
    },

    {
        id: 2,
        type: "fact",
        title: "У акул есть органы, чувствующие электричество",
        text: "Ампулы Лоренцини позволяют акулам воспринимать очень слабые электрические поля. Благодаря этому они могут обнаруживать добычу даже тогда, когда не видят её.",
        extra: "Зоология · Морская биология",
        source: { label: "Florida Museum: Shark Biology", url: "https://www.floridamuseum.ufl.edu/discover-fish/sharks/shark-biology/" }
    },

    {
        id: 3,
        type: "fact",
        title: "Некоторые черепахи способны получать кислород через клоаку",
        text: "У некоторых пресноводных черепах существуют участки, через которые они могут поглощать кислород из воды. Это особенно полезно во время длительного пребывания под водой.",
        extra: "Зоология · Адаптация",
        source: { label: "Australian Zoologist: aquatic respiration in turtles", url: "https://connectsci.au/az/article/35/2/276/267449/The-importance-of-the-cloacal-bursae-as-the" }
    },

    {
        id: 4,
        type: "fact",
        title: "Вороны могут запоминать лица людей",
        text: "Эксперименты показали, что вороны способны различать конкретных людей и связывать их с положительным или отрицательным опытом.",
        extra: "Этология · Поведение животных",
        source: { label: "PNAS: crow recognition of human faces", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3465369/" }
    },

    {
        id: 5,
        type: "fact",
        title: "У некоторых растений температура цветка выше температуры воздуха",
        text: "Некоторые растения способны выделять тепло за счёт усиленного клеточного дыхания. Например, такое явление наблюдается у отдельных растений семейства ароидных.",
        extra: "Ботаника · Термогенез",
        source: { label: "Royal Botanic Gardens, Kew: plant heat production", url: "https://www.kew.org/read-and-watch/hot-or-not-plant-heat-production" }
    },

    {
        id: 6,
        type: "fact",
        title: "Существуют бактерии, которые используют магнитное поле Земли",
        text: "Магнитотактические бактерии содержат крошечные магнитные частицы — магнитосомы. Они помогают клеткам ориентироваться вдоль магнитного поля планеты.",
        extra: "Микробиология · Магнетизм",
        source: { label: "Nature Reviews Microbiology: magnetotactic bacteria", url: "https://www.nature.com/articles/s41579-025-01234-2" }
    },

    {
        id: 7,
        type: "fact",
        title: "У морских слизней бывает способность красть хлоропласты",
        text: "Некоторые морские слизни поедают водоросли, но сохраняют внутри своих клеток их хлоропласты. Благодаря этому они некоторое время могут использовать продукты фотосинтеза.",
        extra: "Биология · Фотосинтез",
        source: { label: "PubMed Central: kleptoplasty in sea slugs", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9642861/" }
    },



    // ФИЛЬМЫ


    {
        id: 8,
        type: "movie",
        title: "The Hourglass Sanatorium",
        text: "Сюрреалистический польский фильм, в котором герой оказывается в странном санатории, где время и реальность существуют по собственным правилам.",
        extra: "1973 · Польша · Сюрреализм",
        source: { label: "The Sanatorium Under the Sign of the Hourglass — справка", url: "https://en.wikipedia.org/wiki/The_Sanatorium_Under_the_Sign_of_the_Hourglass_(film)" }
    },

    {
        id: 9,
        type: "movie",
        title: "Hausu",
        text: "Японский хоррор о девушках, приезжающих в старый загородный дом. Фильм сочетает абсурд, психоделику, необычные визуальные эффекты и чёрный юмор.",
        extra: "1977 · Япония · Ужасы",
        source: { label: "House (1977) — справка о фильме", url: "https://en.wikipedia.org/wiki/House_(1977_film)" }
    },

    {
        id: 10,
        type: "movie",
        title: "The Cremator",
        text: "Мрачный чехословацкий фильм о владельце крематория, чьи взгляды и поступки постепенно становятся всё более пугающими.",
        extra: "1969 · Чехословакия · Психологическая драма",
        source: { label: "The Cremator — справка о фильме", url: "https://en.wikipedia.org/wiki/The_Cremator_(film)" }
    },

    {
        id: 11,
        type: "movie",
        title: "The Wolf House",
        text: "Необычный чилийский мультфильм, созданный в технике покадровой анимации. Стены, персонажи и предметы постоянно меняются прямо во время сцен.",
        extra: "2018 · Чили · Экспериментальная анимация",
        source: { label: "The Wolf House — справка о фильме", url: "https://en.wikipedia.org/wiki/The_Wolf_House" }
    },

    {
        id: 12,
        type: "movie",
        title: "The Holy Mountain",
        text: "Психоделическое произведение Алехандро Ходоровского, наполненное символами, странными ритуалами и сюрреалистическими образами.",
        extra: "1973 · Мексика · Сюрреализм",
        source: { label: "The Holy Mountain — справка о фильме", url: "https://en.wikipedia.org/wiki/The_Holy_Mountain_(1973_film)" }
    },

    {
        id: 13,
        type: "movie",
        title: "Tetsuo: The Iron Man",
        text: "Экспериментальный японский киберпанк о человеке, чьё тело начинает превращаться в нечто механическое. Фильм снят в агрессивной чёрно-белой стилистике.",
        extra: "1989 · Япония · Киберпанк",
        source: { label: "Tetsuo: The Iron Man — справка о фильме", url: "https://en.wikipedia.org/wiki/Tetsuo:_The_Iron_Man" }
    },



    // ЦИТАТЫ


    {
        id: 14,
        type: "quote",
        title: "О творчестве",
        text: "«Вдохновение открывает нам будущее».",
        extra: "Хаяо Миядзаки"
    },

    {
        id: 15,
        type: "quote",
        title: "О сомнениях",
        text: "«Продлить сомнения, значило бы продлить надежду».",
        extra: "Шарлотта Бронте · «Джейн Эйр»",
        source: { label: "Project Gutenberg: Jane Eyre", url: "https://www.gutenberg.org/ebooks/1260" }
    },

    {
        id: 16,
        type: "quote",
        title: "О мыслях",
        text: "«Кто жил и мыслил, тот не может в душе не презирать людей».",
        extra: "А. С. Пушкин · «Евгений Онегин»",
        source: { label: "А. С. Пушкин: «Евгений Онегин»", url: "https://ru.wikisource.org/wiki/Евгений_Онегин_(Пушкин)" }
    },

    {
        id: 17,
        type: "quote",
        title: "О забавах",
        text: "«Только настоящий мужик, который живёт, не оглядываясь на чужие суждения, сможет сесть на спину девушки, чтобы прокатиться на ней!».",
        extra: "Неизвестный автор"
    },

    {
        id: 18,
        type: "quote",
        title: "О странности",
        text: "«Нормальность — это асфальтированная дорога: по ней удобно идти, но цветов на ней не растёт».",
        extra: "Приписывается Винсенту Ван Гогу"
    },

    {
        id: 19,
        type: "quote",
        title: "О любопытстве",
        text: "«Любопытно, чего люди больше всего боятся? Нового шага, нового собственного слова они больше всего боятся. А впрочем, я слишком много болтаю. Оттого и ничего не делаю, что болтаю. Пожалуй, впрочем, и так: оттого болтаю, что ничего не делаю».",
        extra: "Ф. М. Достоевский · «Преступление и наказание»",
        source: { label: "Ф. М. Достоевский: «Преступление и наказание»", url: "https://ru.wikisource.org/wiki/Преступление_и_наказание_(Достоевский)" }
    },



    // МЕСТА


    {
        id: 20,
        type: "place",
        title: "Остров Сокотра",
        text: "Остров у берегов Йемена, где из-за длительной изоляции сформировалась необычная флора. Одно из самых узнаваемых растений — драконово дерево с огромной зонтичной кроной.",
        extra: "Йемен · Индийский океан",
        source: { label: "UNESCO: Socotra Archipelago", url: "https://whc.unesco.org/en/list/1263/" }
    },

    {
        id: 21,
        type: "place",
        title: "Каппадокия под землёй",
        text: "В Каппадокии существуют древние подземные города с многоуровневыми тоннелями, помещениями, вентиляционными шахтами и проходами, уходящими глубоко под землю.",
        extra: "Турция · Каппадокия",
        source: { label: "UNESCO: Göreme and Cappadocia", url: "https://whc.unesco.org/en/list/357/" }
    },

    {
        id: 22,
        type: "place",
        title: "Гора Рорайма",
        text: "Огромная столовая гора на границе Венесуэлы, Гайаны и Бразилии. Её вершина выглядит как гигантское каменное плато, окружённое отвесными стенами.",
        extra: "Венесуэла · Гайана · Бразилия",
        source: { label: "Naturalis Repository: Islands in the Sky", url: "https://repository.naturalis.nl/pub/801225/Kok-2013-Islands-in-the-sky-c-A.pdf" }
    },

    {
        id: 23,
        type: "place",
        title: "Озеро Келимуту",
        text: "На вулкане Келимуту находятся три кратерных озера, которые имеют разные цвета. Их оттенки могут меняться из-за химических процессов в воде.",
        extra: "Индонезия · Остров Флорес",
        source: { label: "Smithsonian Global Volcanism Program: Kelimutu", url: "https://volcano.si.edu/volcano.cfm?vn=264140" }
    },

    {
        id: 24,
        type: "place",
        title: "Вади-эль-Хитан — Долина китов",
        text: "В пустыне Египта находится место, где обнаружены многочисленные окаменелости древних китов. Они показывают, как предки современных китообразных постепенно перешли от жизни на суше к жизни в воде.",
        extra: "Египет · Окаменелости",
        source: { label: "UNESCO: Wadi Al-Hitan", url: "https://whc.unesco.org/en/list/1186/" }
    },

    {
        id: 25,
        type: "place",
        title: "Остров Мадагаскар",
        text: "Мадагаскар настолько долго развивался изолированно, что здесь сформировалось множество эндемичных видов. Например, знаменитые баобабы и лемуры встречаются в таком сочетании именно благодаря этой изоляции.",
        extra: "Мадагаскар · Эндемичная природа",
        source: { label: "WWF: Madagascar", url: "https://www.worldwildlife.org/places/madagascar/" }
    }
    ,
    {
        id: 26,
        type: "fact",
        title: "У осьминога три сердца",
        text: "Два сердца прокачивают кровь через жабры, а третье направляет насыщенную кислородом кровь к остальным органам. Голубоватый оттенок крови связан с содержащим медь белком гемоцианином.",
        extra: "Зоология · Головоногие",
        source: { label: "Smithsonian Ocean: Cephalopods", url: "https://ocean.si.edu/ocean-life/invertebrates/octopuses-squids-and-relatives" }
    },
    {
        id: 27,
        type: "movie",
        title: "Fantastic Planet",
        text: "Французско-чехословацкий научно-фантастический мультфильм Рене Лалу о планете, где гигантские драаги держат маленьких людей — омов — в качестве домашних питомцев. Фильм известен сюрреалистичной анимацией и необычным визуальным стилем.",
        extra: "1973 · Франция / Чехословакия · Фантастика",
        source: { label: "The Criterion Collection: Fantastic Planet", url: "https://www.criterion.com/films/28636" }
    },
    {
        id: 28,
        type: "quote",
        title: "О любви",
        text: "«Любви все возрасты покорны».",
        extra: "А. С. Пушкин · «Евгений Онегин»",
        source: { label: "А. С. Пушкин: «Евгений Онегин»", url: "https://ru.wikisource.org/wiki/Евгений_Онегин_(Пушкин)" }
    },
    {
        id: 29,
        type: "place",
        title: "Петра",
        text: "Древний город на территории современной Иордании, значительная часть которого высечена прямо в скалах. Петра была важным центром набатейской цивилизации и крупным торговым узлом.",
        extra: "Иордания · Археология",
        source: { label: "UNESCO: Petra", url: "https://whc.unesco.org/en/list/326/" }
    }

];


const typeNames = {

    fact: "Факт",
    movie: "Фильм",
    quote: "Цитата",
    place: "Место"

};


let currentCard = null;
let shownCount = 0;


/* ИЗБРАННОЕ */

function getFavorites() {
    try {
        const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (!Array.isArray(saved)) return [];
        // Подтягиваем актуальные карточки, чтобы старое избранное тоже показывало источники.
        return saved.map(item => cards.find(card => card.id === item.id) || item);
    } catch (error) {
        return [];
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        return true;
    } catch (error) {
        alert("Не удалось сохранить избранное. Проверьте настройки хранения данных браузера.");
        return false;
    }
}

/* HTML КАРТОЧКИ */

function cardHTML(card, favorite = false) {
    let button = "";

    if (favorite) {
        button = `
            <div class="card-tools">
                <button class="remove-favorite" onclick="removeFavorite(${card.id})">
                    Удалить из избранного
                </button>
                <button class="small-button" onclick="copyCardLink(${card.id})">
                    Копировать ссылку
                </button>
            </div>
        `;
    }

    const source = card.source
        ? `<p class="card-source"><a href="${card.source.url}" target="_blank" rel="noopener noreferrer">Источник: ${card.source.label}</a></p>`
        : "";

    return `
        <article class="card">
            <span class="card-type">${typeNames[card.type]}</span>
            <h2>${card.title}</h2>
            <p>${card.text}</p>
            <p><b>${card.extra}</b></p>
            ${source}
            ${button}
        </article>
    `;
}

/* РУЛЕТКА */

function showRandomCard() {

    const selected =
        [...document.querySelectorAll(
            ".filters input:checked"
        )].map(input => input.value);


    if (selected.length === 0) {

        alert(
            "Выберите хотя бы одну категорию."
        );

        return;

    }


    const available =
        cards.filter(card =>
            selected.includes(card.type)
        );


    currentCard =
        available[
            Math.floor(
                Math.random() * available.length
            )
        ];


    const rouletteCard =
        document.getElementById(
            "rouletteCard"
        );


    rouletteCard.classList.remove(
        "placeholder"
    );


    rouletteCard.innerHTML =
        cardHTML(currentCard);


    document.getElementById(
        "cardActions"
    ).hidden = false;


    shownCount++;


    const counter =
        document.getElementById("counter");


    if (counter) {

        counter.textContent =
            shownCount;

    }


    updateSaveButton();

}


/* КНОПКА ИЗБРАННОГО */

function updateSaveButton() {

    const button =
        document.getElementById("saveBtn");


    if (!button || !currentCard) {
        return;
    }


    const favorites =
        getFavorites();


    const exists =
        favorites.some(
            card => card.id === currentCard.id
        );


    button.setAttribute("aria-pressed", String(exists));

    if (exists) {
        button.textContent = "✓ В избранном";
    } else {
        button.textContent = "♡ В избранное";
    }

}


/* СОХРАНЕНИЕ */

function addFavorite() {
    if (!currentCard) return;

    const favorites = getFavorites();
    const alreadySaved = favorites.some(card => card.id === currentCard.id);

    if (alreadySaved) {
        updateSaveButton();
        return;
    }

    favorites.push(currentCard);

    // Меняем состояние кнопки только после успешной записи в localStorage.
    if (saveFavorites(favorites)) {
    updateSaveButton();
    ym(114435342, 'reachGoal', 'add_favorite');
    }
}


/* УДАЛЕНИЕ ОДНОЙ КАРТОЧКИ */

function removeFavorite(id) {

    let favorites =
        getFavorites();


    favorites =
        favorites.filter(
            card => card.id !== id
        );


    if (saveFavorites(favorites)) {
        renderFavorites();
    }

}


/* ИЗБРАННОЕ */

function renderFavorites() {

    const grid =
        document.getElementById(
            "favoritesGrid"
        );


    const empty =
        document.getElementById(
            "emptyFavorites"
        );


    if (!grid) {
        return;
    }


    const favorites =
        getFavorites();

    const clearButton = document.getElementById("clearFavorites");
    if (clearButton) {
        clearButton.disabled = favorites.length === 0;
    }

    if (favorites.length === 0) {

        grid.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;

    }


    if (empty) {
        empty.hidden = true;
    }


    grid.innerHTML =
        favorites
            .map(card =>
                cardHTML(card, true)
            )
            .join("");

}


/* ГЛАВНАЯ КНОПКА */

const randomButton =
    document.getElementById(
        "randomBtn"
    );


if (randomButton) {

    randomButton.addEventListener("click", () => {
    showRandomCard();
    if (document.querySelector(".filters input:checked")) {
        ym(114435342, 'reachGoal', 'show_content');
    }
});

}

/* ОТСЛЕЖИВАНИЕ ВЫБОРА КАТЕГОРИЙ */

const categoryGoals = {
    fact: 'category_facts',
    movie: 'category_films',
    quote: 'category_quotes',
    place: 'category_places'
};

document.querySelectorAll('#categories input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', () => {
        // Учитываем только выбор категории, а не снятие галочки.
        if (!input.checked) return;

        const goal = categoryGoals[input.value];

        if (goal) {
            ym(114435342, 'reachGoal', goal);
        }
    });
});
/* ЕЩЁ */

const nextButton =
    document.getElementById(
        "nextBtn"
    );


if (nextButton) {

    nextButton.addEventListener(
        "click",
        showRandomCard
    );

}


/* СОХРАНИТЬ */

const saveButton =
    document.getElementById(
        "saveBtn"
    );


if (saveButton) {

    saveButton.addEventListener(
        "click",
        addFavorite
    );

}


/* ОЧИСТИТЬ ВСЁ */

const clearButton =
    document.getElementById(
        "clearFavorites"
    );


if (clearButton) {
    clearButton.addEventListener("click", () => {
        const favorites = getFavorites();
        if (favorites.length === 0) return;

        const confirmed = window.confirm("Удалить все сохранённые карточки?");
        if (!confirmed) return;

        if (saveFavorites([])) {
            renderFavorites();
        }
    });
}


/* ССЫЛКИ И ПОДЕЛИТЬСЯ */
function makeCardUrl(id) {
    const url = new URL("index.html", window.location.href);
    url.searchParams.set("card", String(id));
    return url.href;
}

async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
    }

    // Резервный способ для браузеров без Clipboard API.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    let copied = false;
    try {
        copied = document.execCommand("copy");
    } finally {
        textarea.remove();
    }
    return copied;
}

async function copyCardLink(id) {
    const card = cards.find(item => item.id === Number(id));
    if (!card) return;

    const link = makeCardUrl(card.id);
    try {
        const copied = await copyText(link);
        if (copied) {
            alert("Ссылка на карточку скопирована.");
        } else {
            window.prompt("Скопируйте ссылку на карточку:", link);
        }
    } catch (error) {
        window.prompt("Скопируйте ссылку на карточку:", link);
    }
}

async function shareCurrentCard() {
    if (!currentCard) return;

    const link = makeCardUrl(currentCard.id);

    // Не открываем системное меню navigator.share:
    // копируем ссылку, чтобы избежать сбоя в браузерах с проблемной поддержкой Share API.
    try {
        const copied = await copyText(link);

        if (copied) {
            alert("Ссылка на карточку скопирована. Теперь её можно отправить друзьям.");
        } else {
            window.prompt("Скопируйте ссылку на карточку:", link);
        }
    } catch (error) {
        window.prompt("Скопируйте ссылку на карточку:", link);
    }
}

/* ОТКРЫТИЕ КАРТОЧКИ ПО ПЕРСОНАЛЬНОЙ ССЫЛКЕ */
function openCardFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("card")) return;

    const cardId = Number(params.get("card"));
    const card = cards.find(item => item.id === cardId);
    if (!card) return;

    currentCard = card;

    const rouletteCard = document.getElementById("rouletteCard");
    if (!rouletteCard) return;

    rouletteCard.classList.remove("placeholder");
    rouletteCard.innerHTML = cardHTML(currentCard);

    const actions = document.getElementById("cardActions");
    if (actions) actions.hidden = false;

    updateSaveButton();
}

/* ПОДЕЛИТЬСЯ КАРТОЧКОЙ */
const shareButton = document.getElementById("shareBtn");
if (shareButton) {
    shareButton.addEventListener("click", shareCurrentCard);
}

/* ФОРМА ОБРАТНОЙ СВЯЗИ
   Форма открывает почтовое приложение пользователя, серверной отправки нет. */
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const topic = formData.get("topic");
        const category = formData.get("category") || "Не выбрана";
        const email = formData.get("email") || "Не указан";
        const message = formData.get("message");

        const subject = encodeURIComponent(`[Что-нибудь] ${topic}`);
        const body = encodeURIComponent(
            `Тип сообщения: ${topic}\nКатегория: ${category}\nE-mail для ответа: ${email}\n\nСообщение:\n${message}`
        );
        ym(114435342, 'reachGoal', 'form_submit');
        window.location.href = `mailto:fuffyb@mail.ru?subject=${subject}&body=${body}`;
    });
}

/* ОТКРЫТИЕ КАРТОЧКИ ПО ПЕРСОНАЛЬНОЙ ССЫЛКЕ */
openCardFromUrl();


/* ЗАПУСК */

renderFavorites();
