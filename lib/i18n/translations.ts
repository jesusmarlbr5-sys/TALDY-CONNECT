export const LANGS = ['ru', 'en', 'kk'] as const
export type Lang = (typeof LANGS)[number]

export const LANG_LABELS: Record<Lang, { short: string; full: string }> = {
  ru: { short: 'RU', full: 'Русский' },
  en: { short: 'EN', full: 'English' },
  kk: { short: 'KZ', full: 'Қазақша' },
}

const en = {
  nav: {
    home: 'Home',
    english: 'English',
    volunteer: 'Volunteer',
    events: 'Events',
    speaking: 'Speaking',
    goodDeeds: 'Good Deeds',
    glossary: 'Glossary',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
  },
  controls: {
    language: 'Site language',
    toggleTheme: 'Toggle theme',
    light: 'Light theme',
    dark: 'Dark theme',
    listen: 'Listen',
  },
  hero: {
    kicker: 'Youth community website for Taldykorgan',
    titleLines: ['Your city.', 'Your community.', 'Your future.'],
    subtitle:
      'Learn English, meet new people, volunteer and find useful events — everything young people need, in one place.',
    ctaPrimary: 'Join the community',
    ctaSecondary: 'Open the glossary',
    badge: 'Supported by an English learning grant',
    imageAlt: 'Young friends looking at Taldykorgan and the mountains',
  },
  pillars: {
    title: 'One website with everything young people need',
    items: {
      learn: { title: 'Learn', text: 'Improve your English.' },
      connect: { title: 'Connect', text: 'Meet new people.' },
      help: { title: 'Help', text: 'Do something good.' },
      grow: { title: 'Grow', text: 'Build your future.' },
    },
  },
  overview: {
    title: '4 sections of the website',
    script: 'One website. One community. More opportunities.',
    items: {
      english: { title: 'English Corner', text: 'Learn English with fun lessons, phrases, videos and quizzes.' },
      volunteer: { title: 'Volunteer', text: 'Find volunteer opportunities and make a real impact.' },
      events: { title: 'Taldy Events', text: 'Useful events in Taldykorgan: English clubs, workshops, sports.' },
      speaking: { title: 'Speaking Buddy', text: 'Find a partner to practice English and make new friends.' },
      goodDeeds: { title: 'Good Deeds', text: 'Complete small acts of kindness, get points and be part of the change.' },
    },
  },
  english: {
    title: 'English Corner',
    text: 'Short, useful phrases for everyday life. Listen, repeat and use them today.',
    phrasesTitle: 'Phrases of the week',
    phrases: [
      { phrase: 'Nice to meet you!', meaning: 'A polite greeting when you meet someone for the first time.' },
      { phrase: 'Could you say that again, please?', meaning: 'Ask someone to repeat what they said.' },
      { phrase: "I'm looking forward to it.", meaning: 'You are excited about something in the future.' },
      { phrase: 'What do you think about…?', meaning: 'Ask for someone’s opinion.' },
    ],
    glossaryTitle: 'Terms from your specialty',
    glossaryText:
      'Choose your subject at Zhetysu University and open a trilingual dictionary: English, Russian and Kazakh.',
    glossaryButton: 'Go to glossary',
    imageAlt: 'Students talking at an English speaking club',
  },
  volunteer: {
    title: 'Volunteer',
    text: 'Use your time and skills to help Taldykorgan. Every small action matters.',
    items: [
      { title: 'English for kids', text: 'Help school children learn their first English words through games.', tag: 'Education' },
      { title: 'Green city', text: 'Join clean-ups in city parks and along the Karatal river.', tag: 'Ecology' },
      { title: 'Event team', text: 'Help organize clubs, festivals and workshops for young people.', tag: 'Community' },
    ],
  },
  events: {
    title: 'Taldy Events',
    text: 'Join our weekly English Speaking Club. Come alone — leave with friends.',
    items: [
      { when: 'Wednesday & Thursday · 16:00–18:00', title: 'English Speaking Club', type: 'Club' },
    ],
  },
  speaking: {
    title: 'Speaking Buddy',
    text: 'Practice makes progress. Find a partner with a similar level and talk every week.',
    steps: [
      { title: 'Know your level', text: 'Beginner, intermediate or advanced — everyone is welcome.' },
      { title: 'Meet your buddy', text: 'We match you with a partner who has similar interests.' },
      { title: 'Talk every week', text: '30 minutes of English conversation online or offline.' },
    ],
    topicsTitle: 'Conversation topics to start with',
    topics: ['Hobbies', 'Travel', 'Movies & music', 'University life', 'Food', 'Future plans'],
  },
  deeds: {
    title: 'Good Deeds',
    text: 'Small acts of kindness make a big difference. Tick what you did this week.',
    items: [
      { text: 'Helped a classmate with homework', points: 10 },
      { text: 'Learned 10 new English words', points: 15 },
      { text: 'Picked up litter in your neighbourhood', points: 20 },
      { text: 'Helped an elderly neighbour', points: 20 },
      { text: 'Shared a useful event with friends', points: 5 },
      { text: 'Spoke English for 15 minutes', points: 15 },
    ],
    pointsLabel: 'points',
    progress: 'Your points this week',
    reset: 'Reset',
  },
  team: {
    title: 'Our team',
    subtitle: 'Six people. One idea. One community!',
    members: [
      { role: 'Project Leader', text: 'Leads the project.' },
      { role: 'Researcher', text: 'Studies the problem.' },
      { role: 'Designer', text: 'Creates the website.' },
      { role: 'English Manager', text: 'English content.' },
      { role: 'Social Manager', text: 'Volunteering & events.' },
      { role: 'Media Manager', text: 'Videos, Instagram, PR.' },
    ],
    message:
      'We don’t want to create just another website. We want to create a community where English connects people and people make Taldykorgan better.',
  },
  footer: {
    home: 'Taldykorgan is our home',
    text: 'A youth community website for Taldykorgan.',
    rights: 'Taldy Connect. All rights reserved.',
  },
  glossary: {
    kicker: 'Zhetysu University named after I. Zhansugurov',
    title: 'Glossary',
    subtitle:
      'Choose your subject and get a dictionary of key terms from your specialty in English, Russian and Kazakh.',
    searchSubjects: 'Search subject…',
    allFields: 'All fields',
    terms: 'terms',
    back: 'All subjects',
    searchTerms: 'Search a word in any language…',
    noSubjects: 'No subjects found. Try another search.',
    noTerms: 'No words found.',
    viewList: 'List',
    viewCards: 'Flashcards',
    flip: 'Tap the card to see the translation',
    prev: 'Previous',
    next: 'Next',
    cardOf: 'of',
    columns: { en: 'English', ru: 'Русский', kk: 'Қазақша' },
  },
}

export type Dictionary = typeof en

const ru: Dictionary = {
  nav: {
    home: 'Главная',
    english: 'Английский',
    volunteer: 'Волонтёрство',
    events: 'События',
    speaking: 'Разговорный',
    goodDeeds: 'Добрые дела',
    glossary: 'Глоссарий',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    mainNav: 'Основная навигация',
  },
  controls: {
    language: 'Язык сайта',
    toggleTheme: 'Сменить тему',
    light: 'Светлая тема',
    dark: 'Тёмная тема',
    listen: 'Прослушать',
  },
  hero: {
    kicker: 'Молодёжный портал Талдыкоргана',
    titleLines: ['Твой город.', 'Твоё сообщество.', 'Твоё будущее.'],
    subtitle:
      'Учи английский, знакомься с новыми людьми, становись волонтёром и находи полезные события — всё, что нужно молодёжи, в одном месте.',
    ctaPrimary: 'Присоединиться',
    ctaSecondary: 'Открыть глоссарий',
    badge: 'При поддержке гранта на изучение английского',
    imageAlt: 'Молодые друзья смотрят на Талдыкорган и горы',
  },
  pillars: {
    title: 'Один сайт со всем, что нужно молодёжи',
    items: {
      learn: { title: 'Учись', text: 'Улучшай свой английский.' },
      connect: { title: 'Общайся', text: 'Знакомься с новыми людьми.' },
      help: { title: 'Помогай', text: 'Делай добрые дела.' },
      grow: { title: 'Расти', text: 'Строй своё будущее.' },
    },
  },
  overview: {
    title: '4 раздела сайта',
    script: 'Один сайт. Одно сообщество. Больше возможностей.',
    items: {
      english: { title: 'English Corner', text: 'Изучай английский с интересными уроками, фразами и тестами.' },
      volunteer: { title: 'Волонтёрство', text: 'Находи волонтёрские проекты и меняй мир к лучшему.' },
      events: { title: 'Taldy Events', text: 'Полезные события в Талдыкоргане: клубы, мастер-классы, спорт.' },
      speaking: { title: 'Speaking Buddy', text: 'Найди напарника для практики английского и новых друзей.' },
      goodDeeds: { title: 'Добрые дела', text: 'Совершай маленькие добрые поступки, получай баллы и меняй город.' },
    },
  },
  english: {
    title: 'English Corner',
    text: 'Короткие полезные фразы на каждый день. Слушай, повторяй и используй уже сегодня.',
    phrasesTitle: 'Фразы недели',
    phrases: [
      { phrase: 'Nice to meet you!', meaning: 'Приятно познакомиться! — вежливое приветствие при знакомстве.' },
      { phrase: 'Could you say that again, please?', meaning: 'Не могли бы вы повторить? — просьба повторить сказанное.' },
      { phrase: "I'm looking forward to it.", meaning: 'Жду с нетерпением. — когда вы рады будущему событию.' },
      { phrase: 'What do you think about…?', meaning: 'Что ты думаешь о…? — спросить чьё-то мнение.' },
    ],
    glossaryTitle: 'Термины твоей специальности',
    glossaryText:
      'Выбери свой предмет в Жетысуском университете и открой трёхъязычный словарь: английский, русский и казахский.',
    glossaryButton: 'Перейти в глоссарий',
    imageAlt: 'Студенты общаются в разговорном клубе английского языка',
  },
  volunteer: {
    title: 'Волонтёрство',
    text: 'Используй своё время и навыки, чтобы помогать Талдыкоргану. Важен каждый поступок.',
    items: [
      { title: 'Английский для детей', text: 'Помоги школьникам выучить первые английские слова через игры.', tag: 'Образование' },
      { title: 'Зелёный город', text: 'Участвуй в субботниках в парках и вдоль реки Каратал.', tag: 'Экология' },
      { title: 'Команда событий', text: 'Помогай организовывать клубы, фестивали и мастер-классы.', tag: 'Сообщество' },
    ],
  },
  events: {
    title: 'Taldy Events',
    text: 'Приходи на наш разговорный клуб английского. Приходи один — уходи с друзьями.',
    items: [
      { when: 'Среда и четверг · 16:00–18:00', title: 'Разговорный клуб английского', type: 'Клуб' },
    ],
  },
  speaking: {
    title: 'Speaking Buddy',
    text: 'Практика — путь к прогрессу. Найди напарника своего уровня и разговаривайте каждую неделю.',
    steps: [
      { title: 'Определи уровень', text: 'Начальный, средний или продвинутый — рады всем.' },
      { title: 'Найди напарника', text: 'Мы подберём партнёра с похожими интересами.' },
      { title: 'Общайтесь каждую неделю', text: '30 минут разговора на английском онлайн или офлайн.' },
    ],
    topicsTitle: 'Темы для первого разговора',
    topics: ['Хобби', 'Путешествия', 'Кино и музыка', 'Студенческая жизнь', 'Еда', 'Планы на будущее'],
  },
  deeds: {
    title: 'Добрые дела',
    text: 'Маленькие добрые поступки имеют большое значение. Отметь, что ты сделал на этой неделе.',
    items: [
      { text: 'Помог однокурснику с домашним заданием', points: 10 },
      { text: 'Выучил 10 новых английских слов', points: 15 },
      { text: 'Убрал мусор во дворе', points: 20 },
      { text: 'Помог пожилому соседу', points: 20 },
      { text: 'Поделился полезным событием с друзьями', points: 5 },
      { text: 'Говорил на английском 15 минут', points: 15 },
    ],
    pointsLabel: 'баллов',
    progress: 'Твои баллы за неделю',
    reset: 'Сбросить',
  },
  team: {
    title: 'Наша команда',
    subtitle: 'Шесть человек. Одна идея. Одно сообщество!',
    members: [
      { role: 'Руководитель проекта', text: 'Руководит проектом.' },
      { role: 'Исследователь', text: 'Изучает проблему.' },
      { role: 'Дизайнер', text: 'Создаёт сайт.' },
      { role: 'Менеджер по английскому', text: 'Английский контент.' },
      { role: 'Социальный менеджер', text: 'Волонтёрство и мероприятия.' },
      { role: 'Медиаменеджер', text: 'Видео, Instagram, PR.' },
    ],
    message:
      'Мы не хотим создать ещё один сайт. Мы хотим создать сообщество, где английский объединяет людей, а люди делают Талдыкорган лучше.',
  },
  footer: {
    home: 'Талдыкорган — наш дом',
    text: 'Молодёжный портал Талдыкоргана.',
    rights: 'Taldy Connect. Все права защищены.',
  },
  glossary: {
    kicker: 'Жетысуский университет имени И. Жансугурова',
    title: 'Глоссарий',
    subtitle:
      'Выбери свой предмет и получи словарь ключевых терминов своей специальности на английском, русском и казахском.',
    searchSubjects: 'Поиск предмета…',
    allFields: 'Все направления',
    terms: 'терминов',
    back: 'Все предметы',
    searchTerms: 'Найди слово на любом языке…',
    noSubjects: 'Предметы не найдены. Попробуй другой запрос.',
    noTerms: 'Слова не найдены.',
    viewList: 'Список',
    viewCards: 'Карточки',
    flip: 'Нажми на карточку, чтобы увидеть перевод',
    prev: 'Назад',
    next: 'Далее',
    cardOf: 'из',
    columns: { en: 'English', ru: 'Русский', kk: 'Қазақша' },
  },
}

const kk: Dictionary = {
  nav: {
    home: 'Басты бет',
    english: 'Ағылшын',
    volunteer: 'Еріктілік',
    events: 'Іс-шаралар',
    speaking: 'Сөйлесу',
    goodDeeds: 'Игі істер',
    glossary: 'Глоссарий',
    openMenu: 'Мәзірді ашу',
    closeMenu: 'Мәзірді жабу',
    mainNav: 'Негізгі навигация',
  },
  controls: {
    language: 'Сайт тілі',
    toggleTheme: 'Тақырыпты ауыстыру',
    light: 'Жарық тақырып',
    dark: 'Қараңғы тақырып',
    listen: 'Тыңдау',
  },
  hero: {
    kicker: 'Талдықорған жастарының порталы',
    titleLines: ['Сенің қалаң.', 'Сенің қауымдастығың.', 'Сенің болашағың.'],
    subtitle:
      'Ағылшын тілін үйрен, жаңа адамдармен таныс, ерікті бол және пайдалы іс-шараларды тап — жастарға қажеттінің бәрі бір жерде.',
    ctaPrimary: 'Қосылу',
    ctaSecondary: 'Глоссарийді ашу',
    badge: 'Ағылшын тілін оқытуға арналған грант қолдауымен',
    imageAlt: 'Талдықорған мен тауларға қарап тұрған жас достар',
  },
  pillars: {
    title: 'Жастарға қажеттінің бәрі бар бір сайт',
    items: {
      learn: { title: 'Үйрен', text: 'Ағылшын тіліңді жетілдір.' },
      connect: { title: 'Таныс', text: 'Жаңа адамдармен аралас.' },
      help: { title: 'Көмектес', text: 'Игі іс жаса.' },
      grow: { title: 'Дамы', text: 'Болашағыңды құр.' },
    },
  },
  overview: {
    title: 'Сайттың 4 бөлімі',
    script: 'Бір сайт. Бір қауымдастық. Көп мүмкіндік.',
    items: {
      english: { title: 'English Corner', text: 'Қызықты сабақтар, сөз тіркестері мен тесттер арқылы ағылшын тілін үйрен.' },
      volunteer: { title: 'Еріктілік', text: 'Еріктілер жобаларын тауып, әлемді жақсарт.' },
      events: { title: 'Taldy Events', text: 'Талдықорғандағы пайдалы іс-шаралар: клубтар, шеберлік сабақтары, спорт.' },
      speaking: { title: 'Speaking Buddy', text: 'Ағылшын тілін жаттықтыратын серіктес пен жаңа достар тап.' },
      goodDeeds: { title: 'Игі істер', text: 'Кішкентай игі істер жасап, ұпай жина және қаланы өзгерт.' },
    },
  },
  english: {
    title: 'English Corner',
    text: 'Күнделікті өмірге арналған қысқа әрі пайдалы сөз тіркестері. Тыңда, қайтала және бүгіннен бастап қолдан.',
    phrasesTitle: 'Аптаның сөз тіркестері',
    phrases: [
      { phrase: 'Nice to meet you!', meaning: 'Танысқаныма қуаныштымын! — танысқан кездегі сыпайы сәлемдесу.' },
      { phrase: 'Could you say that again, please?', meaning: 'Қайталап айтып жібересіз бе? — айтылғанды қайталауды сұрау.' },
      { phrase: "I'm looking forward to it.", meaning: 'Асыға күтемін. — болашақ оқиғаға қуанғанда.' },
      { phrase: 'What do you think about…?', meaning: '…туралы не ойлайсың? — біреудің пікірін сұрау.' },
    ],
    glossaryTitle: 'Мамандығыңның терминдері',
    glossaryText:
      'Жетісу университетіндегі пәніңді таңдап, үш тілді сөздікті аш: ағылшын, орыс және қазақ тілдері.',
    glossaryButton: 'Глоссарийге өту',
    imageAlt: 'Ағылшын тілі сөйлесу клубында әңгімелесіп отырған студенттер',
  },
  volunteer: {
    title: 'Еріктілік',
    text: 'Уақытың мен дағдыларыңды Талдықорғанға көмектесуге жұмса. Әр әрекет маңызды.',
    items: [
      { title: 'Балаларға ағылшын тілі', text: 'Оқушыларға ойын арқылы алғашқы ағылшын сөздерін үйренуге көмектес.', tag: 'Білім' },
      { title: 'Жасыл қала', text: 'Саябақтарда және Қаратал өзенінің бойында сенбіліктерге қатыс.', tag: 'Экология' },
      { title: 'Іс-шаралар командасы', text: 'Клубтар, фестивальдер мен шеберлік сабақтарын ұйымдастыруға көмектес.', tag: 'Қауымдастық' },
    ],
  },
  events: {
    title: 'Taldy Events',
    text: 'Ағылшын тілі сөйлесу клубына кел. Жалғыз кел — достармен бірге кет.',
    items: [
      { when: 'Сәрсенбі және бейсенбі · 16:00–18:00', title: 'Ағылшын тілі сөйлесу клубы', type: 'Клуб' },
    ],
  },
  speaking: {
    title: 'Speaking Buddy',
    text: 'Жаттығу — табысқа жол. Деңгейің ұқсас серіктес тауып, апта сайын сөйлесіңдер.',
    steps: [
      { title: 'Деңгейіңді анықта', text: 'Бастапқы, орта немесе жоғары — бәріне қош келдіңіз.' },
      { title: 'Серіктесіңді тап', text: 'Қызығушылықтары ұқсас серіктес таңдап береміз.' },
      { title: 'Апта сайын сөйлес', text: 'Онлайн немесе офлайн 30 минут ағылшынша әңгіме.' },
    ],
    topicsTitle: 'Алғашқы әңгімеге арналған тақырыптар',
    topics: ['Хобби', 'Саяхат', 'Кино және музыка', 'Студенттік өмір', 'Тағам', 'Болашақ жоспарлар'],
  },
  deeds: {
    title: 'Игі істер',
    text: 'Кішкентай игі істердің маңызы зор. Осы аптада не істегеніңді белгіле.',
    items: [
      { text: 'Курстасыма үй тапсырмасына көмектестім', points: 10 },
      { text: '10 жаңа ағылшын сөзін үйрендім', points: 15 },
      { text: 'Аулада қоқыс жинадым', points: 20 },
      { text: 'Қарт көршіме көмектестім', points: 20 },
      { text: 'Пайдалы іс-шараны достарыммен бөлістім', points: 5 },
      { text: '15 минут ағылшынша сөйледім', points: 15 },
    ],
    pointsLabel: 'ұпай',
    progress: 'Осы аптадағы ұпайларың',
    reset: 'Тазалау',
  },
  team: {
    title: 'Біздің команда',
    subtitle: 'Алты адам. Бір идея. Бір қауымдастық!',
    members: [
      { role: 'Жоба жетекшісі', text: 'Жобаны басқарады.' },
      { role: 'Зерттеуші', text: 'Мәселені зерттейді.' },
      { role: 'Дизайнер', text: 'Сайтты жасайды.' },
      { role: 'Ағылшын тілі менеджері', text: 'Ағылшын контенті.' },
      { role: 'Әлеуметтік менеджер', text: 'Еріктілік және іс-шаралар.' },
      { role: 'Медиа менеджер', text: 'Бейне, Instagram, PR.' },
    ],
    message:
      'Біз жай ғана тағы бір сайт жасағымыз келмейді. Біз ағылшын тілі адамдарды біріктіретін, ал адамдар Талдықорғанды жақсартатын қауымдастық құрғымыз келеді.',
  },
  footer: {
    home: 'Талдықорған — біздің үйіміз',
    text: 'Талдықорған жастарының порталы.',
    rights: 'Taldy Connect. Барлық құқықтар қорғалған.',
  },
  glossary: {
    kicker: 'І. Жансүгіров атындағы Жетісу университеті',
    title: 'Глоссарий',
    subtitle:
      'Пәніңді таңдап, мамандығыңның негізгі терминдер сөздігін ағылшын, орыс және қазақ тілдерінде ал.',
    searchSubjects: 'Пәнді іздеу…',
    allFields: 'Барлық бағыттар',
    terms: 'термин',
    back: 'Барлық пәндер',
    searchTerms: 'Кез келген тілде сөз ізде…',
    noSubjects: 'Пәндер табылмады. Басқа сұрауды байқап көр.',
    noTerms: 'Сөздер табылмады.',
    viewList: 'Тізім',
    viewCards: 'Карточкалар',
    flip: 'Аударманы көру үшін карточканы бас',
    prev: 'Артқа',
    next: 'Келесі',
    cardOf: '/',
    columns: { en: 'English', ru: 'Русский', kk: 'Қазақша' },
  },
}

export const translations: Record<Lang, Dictionary> = { ru, en, kk }
