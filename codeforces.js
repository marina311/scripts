try {
  document.querySelector('.standings tbody tr th:nth-of-type(2)').style.width='200px';
} catch (error) {
  console.error(error);
}

const dict = {
'Sr_lucky_MaN':'Дунин Дмитрий 11В',
'Ivanov_Slava':'Иванов Вячеслав 11В',
'MillerEA':'Миллер Евгений 11В',
'Anastasia_36725':'Поздина Анастасия 11В',
'mikantrop':'Антропов Михаил 11Е',
'barabula':'Бабайлов Максим 11Е',
'ZMEME2009':'Баталов Михаил 11Е',
'ArtBUrCOP':'Беляков Артем 11Е',
'volongoto':'Бурыкина Ксения 11Е',
'n30c0rtoxes':'Гусев Александр 11Е',
'g1ngerxvx':'Долгополова Ирина 11Е',
'kanev':'Канев Иван 11Е',
'ArseniyLeontev':'Леонтьев Арсений 11Е',
'chelovek583':'Мамонова Полина 11Е',
'DankeMart':'Мартиросов Даниил 11Е',
'mslava':'Мартынов Вячеслав 11Е',
'MariaHuanovna':'Можегоров Андрей 11Е',
'Muravev':'Муравьев Дмитрий 11Е',
'fasthinker':'Насыров Савва 11Е',
'ZalenoToTo':'Селезнёв Александр 11Е',
'Gleb_Skovorodnikov':'Сковородников Глеб 11Е',
'IlonMask':'Соснин Илья 11Е',
'Reveek':'Сочнев Даниил 11Е',
'Yutkin_A':'Юткин Александр 11Е',
'vovchan':'Куриннов Владимир  11Н',
'grmmmely':'Гурьев Роман  11Н',
'Vsevolod_progr':'Кондрашин Всеволод 11Н',
'Amogus2.':'Магазов Артур 11Н',
'7hhhh':'Найдёнов Ярослав 11Н',
'makar07':'Хренников Макар 11Н',
'asharaev':'Шараев Андрей 11Н',
'mlovbnee':'Щепарева Мария 11Н',
'finich':'Бабушкин Артём 9Е',
'trokk60':'Дюндин Андрей  9Е',
'4eloVeeek_C_umeHem':'Сорокин Степан  9Е',
'Stepanal':'Бобыкин Степан 10В',
'leokostromin':'Костромин Леонид 10В',
'Mixail_xap':'Харитонов Михаил 10В',
'nikitasplace':'Богданов Никита 10Е',
'Lakant':'Канторович Лев 10Е',
'WaterCeiling65':'Коркин Никита  10Е',
'korobeynikov.p.i':'Коробейников Павел 10Е',
'Datym':'Матвеев Иван 10Е',
'Ivan_qwertyu':'Микрюков Иван 10Е',
'Kyzia':'Назаров Анатолий 10Е',
'Redk1tli':'Добразов Максим гимн10',
'yeey71':'Закиров Егор гимн10',
'awrt_xz':'Канатова Вера гимн10',
'BentTick':'Куделин Максим гимн10',
'acadec':'Мариева Ульяна гимн10',
'Duxa':'Свистунов Андрей гимн10',
'pon':'Суханов Артемий гимн10',
'k4m4lov':'Камалов Артём губ.лицей',
'Levonciy':'Нестеров Лев губ.лицей',
'MiniBess':'Бессолицын Кирилл ',
'gripju':'Васильев Вадим ',
'MrFazer':'Гончаров Константин ',
'MaksimXD':'Дюндин Максим ',
'Maxython':'Ерогов Максим ',
'zhiganov_v':'Жиганов Владислав ',
'Friendiks':'Ипатов Андрей ',
'kiriakaz':'Казанцев Кирилл ',
'RomaKar':'Карсаков Роман ',
'Mairon2093':'Корнеева Мария ',
'alexveark3':'Краев Александр ',
'andreyveark':'Краев Андрей ',
'ksof_sk':'Кудашева София ',
'Yassia':'Куликова Ярослава ',
'Klauss':'Куценко Евгений ',
'IgorLipin123':'Липин Игорь ',
'n1ret':'Логинов Олег ',
'adrony':'Мамедов Артем ',
'Demyan987':'Оболдин Демьян ',
'Fedor69':'Платонов Федор ',
'Davidrol':'Пономарев Давид ',
'irlenp':'Попов Леонид ',
'im_sad_now':'Рожкова Полина ',
'Topaz2090':'Ступин Дмитрий ',
'TROFI':'Устьянцев Трофим ',
'Gemefoll':'Фефилов Егор ',
'andfey':'Филиппов Андрей ',
'lewc':'Цыбань Лев ',
'Neem_Ko':'Александров Михаил 9Е',
'msensation':'Середа Мария 11Н',
'Sanec1hek1':'Сазонов Александр 9Е',
'evgeniam999':'Харитонов Иван 10Е',
'Vlamir':'Булычев Владимир 9Е',
'zlata.si':'Бугаев Кирилл 9Е',
'Osipovsaha':'Осипов Александр 11Н',
'DimaGhost':'Присяжнюк Дмитрий 11Н',
'chelovek5556':'Осипова Алиса 11Н',
'Nikolai_Khr':'Храмцов Николай 11Н',
'grisha0342':'Воронов Григорий 11Н',
'ladas27':'Устюгов Тимофей 11Н',
'art333':'Верходанов Артемий 9Е',
'Diana_Shneider':'Шнейдер Диана 10Е',
'nas_tyyy':'Лукьянова Анастасия 10Е',
'Mr.Root.':'Быкова Светлана 11С',
'ivanporotov':'Поротов Иван 10Е',
'creepy...':'Дорофеев Ярослав 11Н',
'Kostiapro':'Казанцев Константин 11Н',
'delabega':'Попов Александр 9Е',
'Ekaterina025':'Кравчук Екатерина 10н',
'girtegov':'Иртегов Глеб 10Н',
'iv.obogrelov':'Обогрелов Иван 10Н',
'la-oid':'Демидов Лев 10Н',
'maxkrasikov0':'Красиков Максим 9Е',
'megor12':'Михалев Егор 8Е',
'R1raf23':'Чертушкин Лев 10Н',
'rgvlad':'Рогожников Владислав 10Н',
'snz_andreev10':'Андреев Иван 10Н',
'vbnz_miteo':'Сахарлинский Дмитрий 11И',
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


