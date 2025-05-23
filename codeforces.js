try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {'grigalex40':'Алексеев Григорий 10Е',
'InnaAlekseeva':'Алексеева Инна 10Е',
'mikantrop':'Антропов Михаил 9Е',
'barabula':'Бабайлов Максим 9Е',
'finich':'Бабушкин Артём гимн 9',
'thermos':'Бавыкин Артур 10Е',
'ZMEME2009':'Баталов Михаил 9Е',
'9_7_Belai':'Белай Константин 11Н',
'Potom':'Белокуров Тимофей Нижневартовск',
'andbel':'Белоусов Андрей 11Н',
'ArtBUrCOP':'Беляков Артем 9Е',
'MiniBess':'Бессолицын Кирилл 9В',
'BottleOfJuice':'Бессолицын Максим 11Е',
'Mrlime':'Бибиков Максим 10Е',
'Stepanal':'Бобыкин Степан 8В',
'nikitasplace':'Богданов Никита 8Е',
'Morr66':'Букин Ярослав 11Е',
'theWeird0':'Бурыкина Ксения 9Е',
'Sparr0w':'Бутенко Игорь 10Е',
'gripju':'Васильев Вадим 130',
'semwin2008':'Виноградов Семен 10Е',
'Gosha111':'Водяный Георгий 11И',
'Alex_VAA':'Волков Алексей 10Е',
'deterraleon':'Волохов Иван 10Е',
'standoff_player':'Воропаев Арсений 11Н',
'artem_galimulin':'Галимулин Артем 11В',
'MrFazer':'Гончаров Константин 130',
'nastyagrebneva':'Гребнева Анастасия 10Н',
'n30c0rtoxes':'Гусев Александр 9Е',
'Alexunder9':'Девятов Александр 10Н',
'uliana_kaffeetrinker':'Диколенко Ульяна 9А',
'Redk1tli':'Добразов Максим гимн 9',
'goodsoul_a':'Добряк Артем 10Е',
'vanta5n':'Долгова Таисия 10Е',
'g1ngerxvx':'Долгополова Ирина 9Е',
'den0620':'Дубовик Денис 11Е',
'nicky2':'Дубских Николай 11Н',
'DudeG':'Дудин Георгий',
'Sr_lucky_MaN':'Дунин Дмитрий 9В',
'kefip':'Дымшаков Константин 10Н',
'MaksimXD':'Дюндин Максим',
'anotherflowerrotten':'Ермаков Роман',
'Maxython':'Ерогов Максим',
'zhiganov_v':'Жиганов Владислав',
'yeey71':'Закиров Егор гимн 9',
'artem_zelenkin':'Зеленкин Артем 11Е',
'Wileyne':'Знышев Дмитрий 10Е',
'Ivanov_Slava':'Иванов Вячеслав 9В',
'ivchenkoandrey2':'Ивченко Андрей 11Е',
'Mamba_AI':'Илларионов Артем 11Н',
'Friendiks':'Ипатов Андрей 10Е',
'kiriakaz':'Казанцев Кирилл 130',
'veliak':'Кайль Лев 10Е',
'dzhlma':'Калугин Дмитрий 11Н',
'k4m4lov':'Камалов Артём губ лицей',
'awrt_xz':'Канатова Вера гимн 9',
'kanev':'Канев Иван 9Е',
'Lakant':'Канторович Лев 8Е',
'RomaKar':'Карсаков Роман 130',
'vakfa':'Кодес Михаил 11Н',
'p1t':'Козлов Петр',
'pooo07':'Козлова Полина 11Е',
'p1k':'Кондратьев Игорь 11Н',
'Vsevolod_progr':'Кондрашин Всеволод 9Г',
'Konobeitsev_Ivan':'Конобейцев Иван',
'YseraKon':'Коновалов Ярослав 11В',
'Mairon2093':'Корнеева Мария 130',
'korobeynikov.p.i':'Коробейников Павел 8Е',
'leokostromin':'Костромин Леонид 8В',
'KotlechkovEgor':'Котлечков Егор 10Е',
'alexveark3':'Краев Александр 215',
'andreyveark':'Краев Андрей 215',
'a_ok':'Кривощекова Евгения 11Н',
'ksof_sk':'Кудашева София 110',
'BentTick':'Куделин Максим гимн 9',
'ANDREYkao__':'Кулаков Андрей 11Н',
'Yassia':'Куликова Ярослава 10Е',
'Moksha1352':'Лазарев Михаил 10Н',
'ArseniyLeontev':'Леонтьев Арсений 9Е',
'IgorLipin123':'Липин Игорь',
'Lihach':'Лихачев Иван 10Е',
'KVL':'Лихачев Константин 10В',
'n1ret':'Логинов Олег 130',
'Amogus2.':'Магазов Артур 130',
'aleksandrmak1207':'Маккавеев Александр 11Н',
'Nosok_Sudjbi':'Малинин Павел 11Н',
'ulimin':'Малых Михаил 11Е',
'adrony':'Мамедов Артем 130',
'chelovek583':'Мамонова Полина 9Е',
'acadec':'Мариева Ульяна гимн 9',
'DankeMart':'Мартиросов Даниил 9Е',
'mslava':'Мартынов Вячеслав 9Е',
'Datym':'Матвеев Иван 8Е',
'VanyaM1':'Мельников Иван 10Д',
'Ivan_qwertyu':'Микрюков Иван 8Е',
'MillerEA':'Миллер Евгений 9В',
'Danil18':'Мищенко Данила Нижневартовск',
'MariaHuanovna':'Можегоров Андрей 9Е',
'Muravev':'Муравьев Дмитрий 9Е',
'Kyzia':'Назаров Анатолий 130',
'Daniik2':'Назаров Данил Нижневартовск',
'7hhhh':'Найдёнов Ярослав гимн 9',
'fasthinker':'Насыров Савва 9Е',
'Nekrasovmaksim':'Некрасов Максим 11Н',
'Levonciy':'Нестеров Лев губ лицей',
'GlebNechaev':'Нечаев Глеб 10В',
'afkfishka':'Никитенко Игорь Нижневартовск',
'grandgaev':'Нугаев Василий 10Н',
'Ghuiko':'Нурисламов Владислав 10Е',
'Demyan987':'Оболдин Демьян 130',
'ivan_ovs':'Овсянников Иван 10Н',
'KoStTeFaG':'Овчинников Константин 11Е',
'amlet00':'Окулов Никита 10Н',
'Orlenko__Igor0':'Орленко Игорь 11Е',
'vpanfilov':'Панфилов Василий 11Н',
'Foks':'Печёнкина Василиса 10Е',
'Fedor69':'Платонов Федор 130',
'Anastasia_36725':'Поздина Анастасия 9В',
'Davidrol':'Пономарев Давид 130',
'irlenp':'Попов Леонид 35 гимн',
'Arsenyi123':'Рабовлюк Арсений 10Н',
'Ser07math':'Ращупкин Сергей Нижневартовск',
'NeNichiy':'Рогожин Константин 10Е',
'im_sad_now':'Рожкова Полина 209',
'viuver':'Романов Владислав 10Н',
'Blazee':'Сажин Андрей Нижневартовск',
'vbnz_miteo':'Сахарлинский Дмитрий 116',
'VictorS':'Свалов Виктор 10Е',
'Duxa':'Свистунов Андрей гимн 9',
'ZalenoToTo':'Селезнёв Александр 9Е',
'semenovad':'Семенова Дарья Нижневартовск',
'semenchenko':'Семенченко Никита',
'bot_angeldust':'Силкин Тимофей 11Н',
'Gleb_Skovorodnikov':'Сковородников Глеб 9Е',
'selleproyt':'Соколов Артур 11Н',
'IlonMask':'Соснин Илья 9Е',
'Reveek':'Сочнев Даниил 9Е',
'gnominokentiy':'Стафеев Федор 11В',
'Kicel_007':'Стрижов Николай 11Н',
'Topaz2090':'Ступин Дмитрий 130',
'pon':'Суханов Артемий гимн 9',
'bug00n':'Тулгаев Данил 11Н',
'TROFI':'Устьянцев Трофим',
'razetheking':'Файзрахманов Олег 10Н',
'Gemefoll':'Фефилов Егор',
'andfey':'Филиппов Андрей 130',
'Mixail_xap':'Харитонов Михаил 8В',
'makar07':'Хренников Макар 202',
'KingArthurTheGreat':'Хримян Артур 10Г',
'Subio':'Цевилев Матвей',
'lewc':'Цыбань Лев',
'skeletonah':'Чагин Дмитрий',
'glebch':'Черноморцев Глеб',
'asharaev':'Шараев Андрей 130',
'Adfrand':'Шатковский Александр Нижневартовск',
'shusha44':'Шебалина Алиса 11Е',
'asdasdafg':'Шиканов Савва 10Е',
'AdunAdunov':'Ширкунов Евгений 10Е',
'mlovbnee':'Щепарева Мария 99',
'Yutkin_A':'Юткин Александр 9Е',
'Danchik7':'Яковлев Даниил 11В',
'330':'Ярослав Найдёнов гимн 9',
'Klauss':'Куценко Евгений 130',
              
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
