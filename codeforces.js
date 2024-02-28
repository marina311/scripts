try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {'@danchik77778': 'Яковлев Даниил',
 'ANDREYkao__': 'Кулаков Андрей',
 'AdunAdunov': 'Ширкунов Евгений',
 'Aladush3k': 'Старцев Иван',
 'Alex_VAA': 'Волков Алексей',
 'Arsenyi123': 'Рабовлюк Арсений',
 'Barrrakydach': 'Гнездилов Дмитрий',
 'CodingCat': 'Колоколов Александр',
 'DudeG': 'Дудин Георгий',
 'Friendiks': 'Ипатов Андрей',
 'GlebNechaev': 'Нечаев Глеб',
 'Goodsoul_Andrew': 'Добряк Андрей',
 'HimerZERO': 'Чернышев Игнат',
 'I3eg1nner': 'Пеганов Илья',
 'IlonMask': 'Соснин Илья',
 'InvisibleBug': 'Толстых Георгий',
 'Ivanov_Slava': 'Иванов Вячеслав',
 'JabaJaba_v.2.0': 'Белай Константин',
 'KIRYA': 'Бессолицын Кирилл',
 'KVL': 'Лихачев Константин',
 'Kartoshkasmyasom': 'Лескова Анастасия',
 'Keworker': 'Азанов Лука',
 'KingArthurTheGreat': 'Хримян Артур',
 'KoStTeFaG': 'Овчинников Константин',
 'KotlechkovEgor': 'Котлечков Егор',
 'MaksimXD': 'Дюндин Максим',
 'Mamba_AI': 'Илларионов Артем',
 'Maxython': 'Ерогов Максим',
 'Mikle121': 'Мичков Михаил',
 'Morr66': 'Букин Ярослав',
 'NeNichiy': 'Рогожин Константин',
 'Nekrasovmaksim': 'Некрасов Максим',
 'Nosok_Sudjbi': 'Малинин Павел',
 'PROG666': 'Борисов Михаил',
 'PavelMed': 'Медведев Павел',
 'RC-5555': 'Селезнев Андрей',
 'Raretet': 'Захаров Сергей',
 'Subio': 'Цевилев Матвей',
 'VladNurislamov': 'Нурисламов Владислав',
 'Vsevolod_progr': 'Кондрашин Всеволод',
 'Wileyne': 'Знышев Дмитрий',
 'Yassia': 'Куликова Ярослава',
 'YseraKon': 'Коновалов Ярослав',
 '_IVON_': 'Пономарев Иван',
 '_Mister_Doctor': 'Бессолицын Максим',
 '_Octal_': 'Свешников Борис',
 '__Foam': 'Голиков Егор',
 'aleksandrmak1207': 'Маккавеев Александр',
 'andrew-mozhegorov': 'Можегоров Андрей',
 'anotherflowerrotten': 'Ермаков Роман',
 'artem_zelenkin': 'Зеленкин Артем',
 'barabula': 'Бабайлов Максим',
 'belyakov 1': 'Беляков Артем',
 'bot_angeldust': 'Силкин Тимофей',
 'bug00n': 'Тулгаев Данил',
 'currybr30': 'Панфилов Василий',
 'den0620': 'Дубовик Денис',
 'dzhlma': 'Калугин Дмитрий',
 'g1ngerxvx': 'Долгополова Ирина',
 'glllll': 'Корелин Глеб',
 'goodsoul_a': 'Добряк Артем',
 'grigalex40': 'Алексеев Григорий',
 'imcelery': 'Мушников Артем',
 'ivchenkoandrey2': 'Ивченко Андрей',
 'janekri': 'Кривощекова Евгения',
 'kailev': 'Кайль Лев',
 'kuzi-': 'Кузиванов Андрей',
 'lewc': 'Цыбань Лев',
 'lucky_MaNchik': 'Дунин Дмитрий',
 'lukramancer': 'Олифер Дмитрий',
 'p1t': 'Козлов Петр',
 'pooo07': 'Козлова Полина',
 'prog_and_play': 'Разгоняев Максим',
 'qarru': 'Салахеев Александр',
 'sana22012006': 'Голощапов Александр',
 'semenchenko': 'Семенченко Никита',
 'semwin2008': 'Виноградов Семен',
 'shusha44': 'Шебалина Алиса',
 'skeletonah': 'Чагин Дмитрий',
 'standoff_player': 'Воропаев Арсений',
 'timmmm': 'Ильин Тимофей',
 'tsiganovartyom': 'Цыганов Артем',
 'yershovdmitriy': 'Ершов Дмитрий',
  'selleproyt':	'Артур Соколов',
  'Konobeitsev_Ivan':	'Конобейцев Иван',
'SleepingCat':	'Колоколов Александр',
'silent1um':	'Паховский Иван',
'Mr.Kykarek':	'Чванов Федор',
'dimasik06':	'Хасанов Дмитрий',
'Elisey_':	'Кочнев Елисей',
'TROFI':	'Устьянцев Трофим',
'Artem_Belyakov':	'Беляков Артем',
'vdv09': 'Бугрышев Михаил',
'Fedorshebanin':'Шебанин Федор',
'zhiganov_v':'Жиганов Владислав'};

// Rename users
document.querySelectorAll('.rated-user').forEach(a => {
  const key = a.innerHTML.trim();
  if (key in dict) {
    a.innerHTML = dict[key];
  }
});

// Hide flag
document.querySelectorAll('.standings-flag').forEach(a => {
  a.remove();
});

// Hide to-practice
const aElements = document.querySelectorAll('.change-participant-type-link').forEach(a => {
  a.remove()
});
