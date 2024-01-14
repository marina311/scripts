try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {
"Keworker": "Азанов Лука",
"grigalex40": "Алексеев Григорий",
"barabula": "Бабайлов Максим",
"JabaJaba_v.2.0": "Белай Константин",
"belyakov 1": "Беляков Артем",
"KIRYA": "Бессолицын Кирилл",
"_Mister_Doctor": "Бессолицын Максим",
"PROG666": "Борисов Михаил",
"Morr66": "Букин Ярослав",
"semwin2008": "Виноградов Семен",
"Alex_VAA": "Волков Алексей",
"standoff_player": "Воропаев Арсений",
"Barrrakydach": "Гнездилов Дмитрий",
"sana22012006": "Голощапов Александр",
"Goodsoul_Andrew": "Добряк Андрей",
"goodsoul_a": "Добряк Артем",
"g1ngerxvx": "Долгополова Ирина",
"den0620": "Дубовик Денис",
"DudeG": "Дудин Георгий",
"lucky_MaNchik": "Дунин Дмитрий",
"anotherflowerotten": "Ермаков Роман",
"yershovdmitriy": "Ершов Дмитрий",
"artem_zelenkin": "Зеленкин Артем",
"Wileyne": "Знышев Дмитрий",
"ivchenkoandrey2": "Ивченко Андрей",
"Mamba_AI": "Илларионов Артем",
"timmmm": "Ильин Тимофей",
"Friendiks": "Ипатов Андрей",
"p1t": "Козлов Петр",
"pooo07": "Козлова Полина",
"YseraKon": "Коновалов Ярослав",
"glllll": "Корелин Глеб",
"ANDREYkao__": "Кулаков Андрей",
"Yassia": "Куликова Ярослава",
"": "Лескова Анастасия",
"KVL": "Лихачев Константин",
"aleksandrmak1207": "Маккавеев Александр",
"Nosok_Sudjbi": "Малинин Павел",
"PavelMed": "Медведев Павел",
"Mikle121": "Мичков Михаил",
"imcelery": "Мушников Артем",
"KoStTeFaG": "Овчинников Константин",
"lukramancer": "Олифер Дмитрий",
"currybr30": "Панфилов Василий",
"I3eg1nner": "Пеганов Илья",
"Arsenyi123": "Рабовлюк Арсений",
"prog_and_play": "Разгоняев Максим",
"NeNichiy": "Рогожин Константин",
"qarru": "Салахеев Александр",
"RC-5555": "Селезнев Андрей",
"semenchenko": "Семенченко Никита",
"bot_angeldust": "Силкин Тимофей",
"IlonMask": "Соснин Илья",
"anotherflowerrotten": "Старцев Иван",
"InvisibleBug": "Толстых Георгий",
"KingArthurTheGreat": "Хримян Артур",
"tsiganovartyom": "Цыганов Артем",
"skeletonah": "Чагин Дмитрий",
"shusha44": "Шебалина Алиса",
"AdunAdunov": "Ширкунов Евгений",
"@danchik77778": "Яковлев Даниил",
"Vsevolod_progr": "Кондрашин Всеволод",
"Subio": "Цевилев Матвей"
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
