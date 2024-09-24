try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {'@danchik77778': 'Яковлев Даниил',
 'ANDREYkao__': 'Кулаков Андрей 11Н',
 'AdunAdunov': 'Ширкунов Евгений 10Е',
 'Alex_VAA': 'Волков Алексей 10Е',
 'Arsenyi123': 'Рабовлюк Арсений 10Н',
 'Barrrakydach': 'Гнездилов Дмитрий',
 'CodingCat': 'Колоколов Александр',
 'DudeG': 'Дудин Георгий',
 'Friendiks': 'Ипатов Андрей 10Е',
 'GlebNechaev': 'Нечаев Глеб 10В',
 'Goodsoul_Andrew': 'Добряк Андрей',
 'HimerZERO': 'Чернышев Игнат',
 'I3eg1nner': 'Пеганов Илья',
 'IlonMask': 'Соснин Илья 9Е',
 'InvisibleBug': 'Толстых Георгий',
 'Ivanov_Slava': 'Иванов Вячеслав 9В',
 'JabaJaba_v.2.0': 'Белай Константин 11Н',
 'KIRYA': 'Бессолицын Кирилл 9В',
 'KVL': 'Лихачев Константин 10В',
 'Kartoshkasmyasom': 'Лескова Анастасия',
 'Keworker': 'Азанов Лука 10Е',
 'KingArthurTheGreat': 'Хримян Артур',
 'KoStTeFaG': 'Овчинников Константин 11Е',
 'KotlechkovEgor': 'Котлечков Егор 10Е',
 'MaksimXD': 'Дюндин Максим',
 'Mamba_AI': 'Илларионов Артем 11Н',
 'Maxython': 'Ерогов Максим 10Е',
 'Mikle121': 'Мичков Михаил',
 'Morr66': 'Букин Ярослав 11Е',
 'NeNichiy': 'Рогожин Константин 10Е',
 'Nekrasovmaksim': 'Некрасов Максим 11Н',
 'Nosok_Sudjbi': 'Малинин Павел 11Н',
 'PROG666': 'Борисов Михаил',
 'PavelMed': 'Медведев Павел',
 'RC-5555': 'Селезнев Андрей',
 'Raretet': 'Захаров Сергей',
 'Subio': 'Цевилев Матвей',
 'VladNurislamov': 'Нурисламов Владислав 10Е',
 'Vsevolod_progr': 'Кондрашин Всеволод 9Г',
 'Wileyne': 'Знышев Дмитрий 10Е',
 'Yassia': 'Куликова Ярослава 10Е',
 'YseraKon': 'Коновалов Ярослав 11В',
 '_IVON_': 'Пономарев Иван',
 '_Mister_Doctor': 'Бессолицын Максим 11Е',
 '_Octal_': 'Свешников Борис',
 '__Foam': 'Голиков Егор',
 'aleksandrmak1207': 'Маккавеев Александр',
 'andrew-mozhegorov': 'Можегоров Андрей',
 'anotherflowerrotten': 'Ермаков Роман',
 'artem_zelenkin': 'Зеленкин Артем 11Е',
 'barabula': 'Бабайлов Максим 9Е',
 'belyakov 1': 'Беляков Артем 9Е',
 'bot_angeldust': 'Силкин Тимофей 11Н',
 'bug00n': 'Тулгаев Данил 11Н',
 'currybr30': 'Панфилов Василий 11Н',
 'den0620': 'Дубовик Денис 11Е',
 'dzhlma': 'Калугин Дмитрий 11Н',
 'g1ngerxvx': 'Долгополова Ирина 9Е',
 'glllll': 'Корелин Глеб',
 'goodsoul_a': 'Добряк Артем',
 'grigalex40': 'Алексеев Григорий 10Е',
 'imcelery': 'Мушников Артем',
 'ivchenkoandrey2': 'Ивченко Андрей 11Е',
 'janekri': 'Кривощекова Евгения 11Н',
 'kailev': 'Кайль Лев 10Е',
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
 'semwin2008': 'Виноградов Семен 10Е',
 'shusha44': 'Шебалина Алиса 11Е',
 'skeletonah': 'Чагин Дмитрий 11Е',
 'standoff_player': 'Воропаев Арсений 11Н',
 'timmmm': 'Ильин Тимофей',
 'tsiganovartyom': 'Цыганов Артем',
 'yershovdmitriy': 'Ершов Дмитрий',
  'selleproyt':	'Артур Соколов 11Н',
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
'zhiganov_v':'Жиганов Владислав',
'amlet00':'Окулов Никита 10Н',
'Gosha111':'Водяный Георгий 11И',
'ivan_ovs':'Овсянников Иван 10Н',
'Ivan_qwertyu':'Микрюков Иван 8Е',
'kanev':'Канев Иван 9Е',
'kefip':'Дымшаков Константин 10Н',
'korobeynikov.p.i':'Коробейников Павел 8Е',
'MariaHuanovna':'Можегоров Андрей 9Е',
'mslava':'Мартынов Вячеслав 9Е',
'nikitasplace':'Богданов Никита 8Е',
'theWeird0':'Бурыкина Ксения 9Е',
'VanyaM1':'Мельников Иван 10Д',
'viuver':'Романов Владислав 10Н',
'ZalenoToTo':'Селезнёв Александр 9Е'
};

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
