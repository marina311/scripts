try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {'330':'Ярослав Найдёнов',
'7hhhh':'Найдёнов Ярослав',
'a_ok':'Кривощекова Евгения Антоновна',
'acadec':'Мариева Ульяна',
'Adfrand':'Шатковский Александр Нижневартовск',
'adrony':'Мамедов Артем 130',
'AdunAdunov':'Ширкунов Евгений 10Е',
'afkfishka':'Никитенко Игорь Нижневартовск',
'aleksandrmak1207':'Маккавеев Александр',
'Alex_VAA':'Волков Алексей 10Е',
'Alexunder9':'Девятов Александр 10Н',
'alexveark3':'Краев Александр Юрьевич',
'amlet00':'Окулов Никита 10Н',
'Amogus2.':'Магазов Артур Ренатович',
'andbel':'Белоусов Андрей',
'ANDREYkao__':'Кулаков Андрей 11Н',
'andreyveark':'Краев Андрей',
'anotherflowerrotten':'Ермаков Роман',
'ArseniyLeontev':'Леонтьев Арсений 9Е',
'Arsenyi123':'Рабовлюк Арсений 10Н',
'ArtBUrCOP':'Беляков Артем 9Е',
'artem_galimulin':'Галимулин Артем 11В',
'artem_zelenkin':'Зеленкин Артем 11Е',
'asdasdafg':'Шиканов Савва 10Е',
'asharaev':'Шараев Андрей',
'awrt_xz':'Канатова Вера',
'barabula':'Бабайлов Максим 9Е',
'BentTick':'BentTick ??',
'Blazee':'Сажин Андрей Нижневартовск',
'bot_angeldust':'Силкин Тимофей 11Н',
'BottleOfJuice':'Бессолицын Максим 11Е',
'bug00n':'Тулгаев Данил 11Н',
'chelovek583':'Мамонова Полина 9Е',
'danchik77778':'Яковлев Даниил 11В',
'Daniik2':'Назаров Данил Нижневартовск',
'Danil18':'Мищенко Данила Нижневартовск',
'DankeMart':'Мартиросов Даниил 9Е',
'Datym':'Матвеев Иван',
'Davidrol':'Пономарев Давид',
'Demyan987':'Оболдин Демьян Андреевич',
'den0620':'Дубовик Денис 11Е',
'deterraleon':'Волохов Иван 10Е',
'Drunk_Squirrel':'Суханов Артемий Глебович',
'DudeG':'Дудин Георгий',
'dzhlma':'Калугин Дмитрий 11Н',
'finich':'Бабушкин Артём',
'Foks':'Печёнкина Василиса 10Е',
'Friendiks':'Ипатов Андрей 10Е',
'g1ngerxvx':'Долгополова Ирина 9Е',
'Gemefoll':'Фефилов Егор',
'Ghuiko':'Нурисламов Владислав 10Е',
'Gleb_Skovorodnikov':'Сковородников Глеб 9Е',
'glebch':'Черноморцев Глеб',
'GlebNechaev':'Нечаев Глеб 10В',
'gnominokentiy':'Стафеев Федор 11В',
'goodsoul_a':'Добряк Артем',
'Gosha111':'Водяный Георгий 11И',
'grandgaev':'Нугаев Василий 10Н',
'grigalex40':'Алексеев Григорий 10Е',
'I3eg1nner':'Пеганов Илья',
'IgorLipin123':'Липин Игорь',
'IlonMask':'Соснин Илья 9Е',
'im_sad_now':'Рожкова Полина',
'InnaAlekseeva':'Алексеева Инна 10Е',
'irlenp':'Попов Леонид 35 гимн',
'ivan_ovs':'Овсянников Иван 10Н',
'Ivan_qwertyu':'Микрюков Иван 8Е',
'Ivanov_Slava':'Иванов Вячеслав 9В',
'ivchenkoandrey2':'Ивченко Андрей 11Е',
'JabaJaba_v.2.0':'Белай Константин 11Н',
'janekri':'Кривощекова Евгения 11Н',
'k4m4lov':'Камалов Артём Маратович',
'kanev':'Канев Иван 9Е',
'kefip':'Дымшаков Константин 10Н',
'Kicel_007':'Стрижов Николай',
'KingArthurTheGreat':'Хримян Артур',
'kiriakaz':'Казанцев Кирилл',
'KIRYA':'Бессолицын Кирилл 9В',
'Konobeitsev_Ivan':'Конобейцев Иван',
'korobeynikov.p.i':'Коробейников Павел 8Е',
'KoStTeFaG':'Овчинников Константин 11Е',
'KotlechkovEgor':'Котлечков Егор 10Е',
'ksof_sk':'Кудашева София',
'KVL':'Лихачев Константин 10В',
'kyzia':'Назаров Анатолий',
'leokostromin':'Костромин Леонид 8В',
'levonciy':'Нестеров Лев',
'lewc':'Цыбань Лев',
'Lihach':'Лихачев Иван 10Е',
'lp_sty':'lp_sty ??',
'lucky_MaNchik':'Дунин Дмитрий 9В',
'Mairon2093':'Корнеева Мария',
'makar07':'Хренников Макар',
'MaksimXD':'Дюндин Максим',
'Mamba_AI':'Илларионов Артем 11Н',
'MariaHuanovna':'Можегоров Андрей 9Е',
'Maxython':'Ерогов Максим',
'mikantrop':'Антропов Михаил 9Е',
'MillerEA':'Миллер Евгений',
'Mixail_xap':'Харитонов Михаил 8В',
'mlovbnee':'Щепарева Мария',
'Moksha1352':'Лазарев Михаил',
'Morr66':'Букин Ярослав 11Е',
'MrFazer':'Гончаров Константин',
'Mrlime':'Бибиков Максим 10Е',
'mslava':'Мартынов Вячеслав 9Е',
'Muravev':'Муравьев Дмитрий 9Е',
'n1ret':'Логинов Олег Алексеевич',
'n30c0rtoxes':'Гусев Александр 9Е',
'nastyagrebneva':'Гребнева Анастасия 10Н',
'Nekrasovmaksim':'Некрасов Максим 11Н',
'NeNichiy':'Рогожин Константин 10Е',
'nicky2':'Дубских Николай',
'nikitasplace':'Богданов Никита 8Е',
'Nosok_Sudjbi':'Малинин Павел 11Н',
'Orlenko__Igor0':'Орленко Игорь 11Е',
'p1k':'Кондратьев Игорь',
'p1t':'Козлов Петр',
'pon':'Суханов Артемий',
'pooo07':'Козлова Полина',
'Potom':'Белокуров Тимофей Нижневартовск',
'razetheking':'Файзрахманов Олег',
'Redk1tli':'Добразов Максим',
'Reveek':'Сочнев Даниил 9Е',
'RomaKar':'Карсаков Роман',
'selleproyt':'Соколов Артур 11Н',
'semenchenko':'Семенченко Никита',
'semenovad':'Семенова Дарья Нижневартовск',
'semwin2008':'Виноградов Семен 10Е',
'Ser07math':'Ращупкин Сергей Нижневартовск',
'shusha44':'Шебалина Алиса 11Е',
'skeletonah':'Чагин Дмитрий',
'slavik-mozhet':'Насыров Савва 9Е',
'Sparr0w':'Бутенко Игорь 10Е',
'standoff_player':'Воропаев Арсений 11Н',
'Stepanal':'Бобыкин Степан 8В',
'Subio':'Цевилев Матвей',
'thermos':'Бавыкин Артур 10Е',
'theWeird0':'Бурыкина Ксения 9Е',
'Topaz2090':'Ступин Дмитрий',
'TROFI':'Устьянцев Трофим',
'uliana_kaffeetrinker':'Диколенко Ульяна 9А',
'vakfa':'Кодес Михаил',
'vanta5n':'Долгова Таисия 10Е',
'VanyaM1':'Мельников Иван 10Д',
'vdv09':'Бугрышев Михаил',
'veliak':'Кайль Лев 10Е',
'VictorS':'Свалов Виктор 10Е',
'viuver':'Романов Владислав 10Н',
'vpanfilov':'Панфилов Василий 11Н',
'Vsevolod_progr':'Кондрашин Всеволод 9Г',
'Wileyne':'Знышев Дмитрий 10Е',
'Yassia':'Куликова Ярослава 10Е',
'yeey71':'Закиров Егор',
'yershovdmitriy':'Ершов Дмитрий',
'YseraKon':'Коновалов Ярослав 11В',
'Yutkin_A':'Юткин Александр 9Е',
'ZalenoToTo':'Селезнёв Александр 9Е',
'zhiganov_v':'Жиганов Владислав',
'ZMEME2009':'Баталов Михаил 9Е',
              
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
