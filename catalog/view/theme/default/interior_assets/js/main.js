$(document).ready(function () {
    var b=$('.boxy');
    b.draggable();
    b.resizable();
    b.transformable();
    $('.reset').click(function() {
        $('.boxy').transformable('reset');
        $('.boxy').css("width","190px");
        $('.boxy').css("height","410px");
    });
    var brightSlider = document.getElementById('slider-bright');
    var saturSlider = document.getElementById('slider-satur');
    var blurSlider = document.getElementById('slider-blur');
    var opacSlider = document.getElementById('slider-opac');
    var contraSlider = document.getElementById('slider-contra');
    noUiSlider.create(brightSlider, {
        start: 100, step: 1, connect: 'lower', range: {'min': 0,'max': 200
        }, format: { to: function ( value ) {return value + ''; }, from: function ( value ) {return value.replace('', ''); }}
    });
    noUiSlider.create(saturSlider, {
        start: 100, step: 1, connect: 'lower', range: {'min': 0,'max': 200
        }, format: { to: function ( value ) {return value + ''; }, from: function ( value ) {return value.replace('', ''); }}
    });
    noUiSlider.create(blurSlider, {
        start: 0, step: 0.5, connect: 'lower', range: {'min': 0,'max': 10
        }, format: { to: function ( value ) {return value + ''; }, from: function ( value ) {return value.replace('', ''); }}
    });
    noUiSlider.create(opacSlider, {
        start: 100, step: 1, connect: 'lower', range: {'min': 0,'max': 100
        }, format: { to: function ( value ) {return value + ''; }, from: function ( value ) {return value.replace('', ''); }}
    });
    noUiSlider.create(contraSlider, {
        start: 100, step: 1, connect: 'lower', range: {'min': 0,'max': 200
        }, format: { to: function ( value ) {return value + ''; }, from: function ( value ) {return value.replace('', ''); }}
    });
    blurSlider.noUiSlider.on('update', function(){editImage();});
    saturSlider.noUiSlider.on('update', function(){editImage();});
    contraSlider.noUiSlider.on('update', function(){editImage();});
    brightSlider.noUiSlider.on('update', function(){editImage();});
    opacSlider.noUiSlider.on('update', function(){editImage();});
    $('.clearOpt').click(function() {
        blurSlider.noUiSlider.set(0);
        saturSlider.noUiSlider.set(100);
        contraSlider.noUiSlider.set(100);
        brightSlider.noUiSlider.set(100);
        opacSlider.noUiSlider.set(100);
        editImage();
    });
    function editImage() {
        var blur = blurSlider.noUiSlider.get(); // blur
        var br = brightSlider.noUiSlider.get(); // brightness
        var ct = contraSlider.noUiSlider.get(); // contrast
        var opacity = opacSlider.noUiSlider.get(); //opacity
        var saturate = saturSlider.noUiSlider.get(); //saturate
        $(".fon").css("filter", 'blur('+blur+'px) brightness(' + br +'%) contrast(' + ct +'%) opacity(' + opacity +'%) saturate(' + saturate + '%)');
        $(".fon").css("-webkit-filter", 'blur(' + blur +'px) brightness(' + br + '%) contrast(' + ct + '%) opacity(' + opacity + '%) saturate(' + saturate + '%)');
    }
    $('#el-1').click(function() {
        if($('#el-1').is(':checked')) { $('.container_door').addClass("shadoz"); }
        if(!$('#el-1').is(':checked')) { $('.container_door').removeClass("shadoz"); }
    });
    $('#el-3').click(function() {
        if($('#el-3').is(':checked')) { $('.fon').addClass("flipz"); }
        if(!$('#el-3').is(':checked')) { $('.fon').removeClass("flipz"); }
    });
    $('.confaImg').click(function () {
        $(this).removeClass('spaceInRight');
        $(this).addClass('spaceOutRight');
        $(".confa").removeClass('slideRightRetourn');
        $(".confa").addClass('slideRight');
    });
    $('.closeImg').click(function () {
        $(".confa").removeClass('slideRight');
        $(".confa").addClass('slideRightRetourn');
        $(".confaImg").removeClass('spaceOutRight');
        $(".confaImg").addClass('spaceInRight');
    });
    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
            new SelectFx(el,{stickyPlaceholder:false,
                onChange:function(el){
                    $("#existingImges").empty();
                    var doors = "fotos/"+ el +"/";
                    var fabrik = FabrikQuery(el);
                    var zaz;
                    jQuery.each(fabrik.fab, function(i, val) {
                        zaz = urlencode(fabrik.lin[i]);
                        $("#existingImges").append( "<img class='uploadImage' data-url='//dverionlain.ru/catalog/mezhkomnatnye-dveri/"+ val +"/' src='"+ doors + zaz +"'>" );
                    });
                }
            });
        } );
    })();
    function FabrikQuery(FabrikName) {
        var fabOpt;
        switch (FabrikName) {
            case 'aleanza':
                fabOpt = ['hispania-xxiv','hispania-xxiv','hispania-xxviii','hispania-xxviii','hispania-xxix','hispania-xxix','ferrata-xv','ferrata-xv','ferrata-xv','ferrata-iii','ferrata-xvi','ferrata-xiii','ferrata-xiii','ferrata-xiii','ferrata-xiv','ferrata-xiv'];
                fabLin = ['Hispania XXIV куба махагон.jpg','Hispania 24 карамель.jpg','Hispania 28 карамель.jpg','Hispania 28 куба.jpg','Hispania XXIX Куба махагон.jpg','Hispania XXIX карамель.jpg','Ferrata 15 дуб серый.jpg','Ferrata 15 орех африканский.jpg','Ferrata 15 орех капучино.jpg','Ferrata 3.jpg','Ferratta 16 Ясень белый ДО.jpg','Ferrata 13 Африка.jpg','Ferrata 13 капучино.jpg','Ferrata 13 Светлый.jpg','Ferrata 14 Африка.jpg','Ferrata 14 капучино.jpg'];
                break;
            case 'interne':
                fabOpt = ['klassika-5','klassika-5','kataloniya','kataloniya','palermo-2','palermo-2','palermo-2','palermo-2','alina-2','alina-2','vena-2','vena-2'];
                fabLin = ['Классика 5 ДГ.png','Классика 5 ДО.png','Каталония ДГ.png','Каталония ДО.png','Палермо 2 ДГ.png','Палермо 2 ДО.png','Палермо 2 ясень ДГ.png','Палермо 2 ясень ДО.png','Алина 2 ДГ.png','Алина 2 ДО.png','Вена 2 ДГ.png','Вена 2 ДО.png'];
                break;
            case 'profildors':
                fabOpt = ['10x','15x','17u','17u','mezhkomnatnaya-dver-17x','mezhkomnatnaya-dver-17x','mezhkomnatnaya-dver-17x','mezhkomnatnaya-dver-17x','mezhkomnatnaya-dver-19x','mezhkomnatnaya-dver-19x','mezhkomnatnaya-dver-19x','1x','1x','21-kh','21-kh','21-kh','21-kh','2-kh','2-kh','3x','45u','46u','48u','48u','4-kh','70x','7u','7u','7u','7u','7u','7u','7u','7u','mezhkomnatnaya-dver-7x','mezhkomnatnaya-dver-7x','mezhkomnatnaya-dver-7x','8x'];
                fabLin = ['10x венге мелинга черное ДО.jpg','15x венге мелинга белое ДО.jpg','17U аляска ДГ.jpg','17U коричневый ДГ.jpg','17x венге мелинга ДГ.jpg','17x грей мелинга ДГ.jpg','17x капучино мелинга ДГ.jpg','17x Эш вайт мелинга ДГ.jpg','19X капучино мелинга белое ДО.jpg','19X венге мелинга.jpg','19X эш вайт мелинга.jpg','1x орех сиена ДГ.jpg','1x эш вайт ДГ.jpg','21x венге мелинга белый лак ДО.jpg','21x венге мелинга черный лак ДО.jpg','21x эш вайт мелинга белый лак ДО.jpg','21x эш вайт мелинга черный лак ДО.jpg','2x орех сиена матовое ДО.jpg','2x эш вайт матовое ДО.jpg','3х орех сиена ДГ.jpg','45U антрацит ДГ.jpg','46U магнолия серое ДО.jpg','48U аляска серое ДО.jpg','48U коричневый серое ДО.jpg','4х орех сиена стеклое матовое ДО.jpg','70x венге мелинга белое ДО.jpg','7U антрацит белое ДО.jpg','7U антрацит матовое ДО.jpg','7U антрацит серое ДО.jpg','7U антрацит черное ДО.jpg','7U магнолия белое ДО.jpg','7U магнолия матовое ДО.jpg','7U магнолия серое ДО.jpg','7U магнолия черное ДО.jpg','7x эш вайт мелинга ДО.jpg','7х венге мелинга ДО.jpg','7х капучино мелинга ДО.jpg','8x эш вайт мелинга ДО.jpg'];
                break;
            case 'zadoor':
                fabOpt = ['d2','d4','s1','s1','s2','s3','s4','s4','s6','s6','s6','s6','s7','s7','s7','s9','s9','verona-tara','grand-r','grand-r','grand-r','grand-chr','grand-chr','kameliya-zd','kameliya-zd','kameliya-zd','kameliya-zd','keyptaun','keyptaun','maestro-r','maestro-r','maestro-r','maestro-r','orkhideya','orkhideya','orkhideya','orkhideya','orkhideya','orkhideya','orkhideya','orkhideya','premer','premer','premer','premer','rim-tara','rim-tara','rim-tara','rimini-tara','rimini-tara','rimini-tara'];
                fabLin = ['D2 бриз красное дерево ДО.jpg','D4  техно орех ДО.jpg','S1 ДГ американский орех.jpg','S1 ДГ беленый дуб.jpg','S2 венге ДО.jpg','S3 венге ДГ.jpg','S4 белый мелинга.jpg','S4 венге ДО.jpg','S6 беленый дуб ДО.jpg','S6 белый мелинга ДО.jpg','S6 грей ДО.jpg','S6 орех американский ДО.jpg','S7 американский орех ДО.jpg','S7 беленый дуб ДО.jpg','S7 венге ДО.jpg','S9 ДО белый мелинга.jpg','S9 ДО грей.jpg','Верона тара венге.jpg','Гранд Р беленый дуб ДО ДО.jpg','Гранд Р беленый дуб ДО.jpg','Гранд Р ДО венге.jpg','Гранд ЧР беленый дуб.jpg','Гранд ЧР венге.jpg','Камелия Задор ДГ дуб.jpg','Камелия Задор ДГ орех.jpg','Камелия Задор ДО дуб.jpg','Камелия Задор ДО орех.jpg','Кейптаун ДГ американский орех.jpg','Кейптаун ДГ венге.jpg','Маэстро Р венге ДО.jpg','Маэстро Р ДО американский орех.jpg','Маэстро Р ДО беленый дуб.jpg','Маэстро Р белёный дуб.jpg','Орхидея ДГ беленый дуб.jpg','Орхидея ДГ венге.jpg','Орхидея ДГ итальянский орех.jpg','Орхидея ДГ миланский орех.jpg','Орхидея ДО беленый дуб.jpg','Орхидея ДО венге.jpg','Орхидея ДО итальянский орех.jpg','Орхидея ДО миланский орех.jpg','Премьер ДГ дуб.jpg','Премьер ДГ орех.jpg','Премьер ДО дуб.jpg','Премьер ДО орех.jpg','Рим тара ДГ американский орех.jpg','Рим Тара ДГ беленый дуб.jpg','Рим тара ДГ венге.jpg','Римини Тара ДО американский орех.jpg','Римини Тара ДО беленый дуб.jpg','Римини Тара ДО венге.jpg'];
                break;
            case 'airon':
                fabOpt = ['anastasiya','anastasiya','anastasiya','anastasiya','anastasiya','anastasiya','anastasiya','anastasiya','viola','viola','liliya','liliya','palermo-12','palermo-9','faina','faina','florentsiya','florentsiya','khit-1','khit-1'];
                fabLin = ['Анастасия ДГ беленый дуб.jpg','Анастасия ДГ Венге.jpg','Анастасия ДГ Миланский орех.jpg','Анастасия ДГ Темный орех.jpg','Анастасия ДО Беленый дуб.jpg','Анастасия ДО Венге.jpg','Анастасия ДО Миланский орех.jpg','Анастасия ДО Темный орех.jpg','Виола ДГ светлый дуб.jpg','Виола ДО светлый дуб.jpg','Лилия ДГ Темный дуб.jpg','Лилия ДО Темный дуб.jpg','Палермо 12 венге.jpg','Палермо 9 ДО кофе.jpg','Фаина ДГ светлый дуб.jpg','Фаина ДО светлый дуб.jpg','Флоренция ДГ Орех 777.jpg','Флоренция ДО Орех 777.jpg','Хит 1 Белая акация ДО.jpg','Хит 1 Черная акация ДО.jpg'];
                break;
            case 'vetluj':
                fabOpt = ['ampir','ampir','ampir','ampir','arka','arka','zhuk','zhuk'];
                fabLin = ['Ампир Орех ДГ.jpg','Ампир Неокр ДГ.jpg','Ампир Неокр ДО.jpg','Ампир Орех ДО.jpg','Арка ДГ.jpg','Арка ДО.jpg','Жук ДГ.jpg','Жук ДО.jpg'];
                break;
            case 'vladim':
                fabOpt = ['venera','venera','venera','venera','karat','kronos','kronos','kronos','kronos','lidiya','lidiya','lidiya','lidiya','muza','muza','elit'];
                fabLin = ['Венера венге ДГ.jpg','Венера венге ДО.jpg','Венера ДО орех.jpg','Венера орех ДГ.jpg','Карат Венге ДО.jpg','Кронос венге ДГ.jpg','Кронос венге ДО.jpg','Кронос орех ДГ.jpg','Кронос Орех ДО.jpg','Лидия Макоре ДГ.jpg','Лидия Макоре ДО.jpg','Лидия орех ДГ.jpg','Лидия орех ДО.jpg','Муза ДГ макоре.jpg','Муза ДО макоре.jpg','Элит ДО дуб беленый.jpg'];
                break;
            case 'grin':
                fabOpt = ['kompleana-premium','kompleana-premium','kompleana-premium','kompleana-premium','leona','leona','leona','leona','premera','premera','prima','prima'];
                fabLin = ['Комплеана Премиум ДГ Патина Антик.jpg','Комплеана премиум ДО патина антик.jpg','Комплеана премиум люкс ДО.jpg','Комплеана премиум люкс.jpg','Леона декор ваниль деко ДГ.jpg','Леона декор ваниль ДО.jpg','Леона патина голд ДГ.jpg','Леона патина голд ДО.jpg','Премьера Патина голд ДГ.jpg','Премьера Патина голд ДО.jpg','Прима элит ДГ.jpg','Прима элит ДО.jpg'];
                break;
            case 'istok':
                fabOpt = ['trio-2','trio-2'];
                fabLin = ['Трио 2 эмаль крем дг.jpg','Трио-2 эмаль крем ДО.jpg'];
                break;
            case 'kapel':
                fabOpt = ['gladkaya','gladkaya','nartsiss'];
                fabLin = ['Гладкая ДГ белая.jpg','Гладкая ДГ дуб золотой.jpg','Нарцисс ДГ дуб золотой.jpg'];
                break;
            case 'koforest':
                fabOpt = ['viktoriya','viktoriya'];
                fabLin = ['Виктория дг.jpg','Виктория до.jpg'];
                break;
            case 'levsha':
                fabOpt = ['verona','verona','gloriya','gloriya','dub-1','dub-1','in-yan','in-yan','in-yan','in-yan','model-100-risunok-19','model-100-risunok-2','model-100-risunok-2','model-5','model-5','orekh-1','orekh-1','orekh-4','orekh-4','ultra-1','ultra-1'];
                fabLin = ['Верона рамиада ДГ.jpg','Верона рамиада ДО.jpg','Глория ДГ.jpg','Глория ДО.jpg','Дуб 1 ДГ.jpg','Дуб 1 ДО дуб.jpg','Инь-Янь ДГ Снежный дуб.jpg','Инь-Янь ДГ шоколад.jpg','Инь-Янь ДО Снежный дуб.jpg','Инь-Янь ДО шоколад.jpg','Модель 100 рис 19 Венге.jpg','Модель 100 рис. 2 черный триплекс.jpg','Модель 100 рис.2 Триплекс бронза.jpg','Модель 5 глухое.jpg','Модель 5 ДО.jpg','Орех 1 ДГ.jpg','Орех 1 ДО орех.jpg','Орех 4 ДГ.jpg','Орех 4 ДО.jpg','Ультра 1 Венге триплекс бронза.jpg','Ультра 1 Венге черный триплекс.jpg'];
                break;
            case 'newstyle':
                fabOpt = ['agata','amata','amata','villa','villa','vita','zlata','zlata','roka','roka','roka','roka','stella','stella','fortis','fortis','fortis','fortis','eskada','eskada'];
                fabLin = ['Агата каштан.jpg','Амата ДГ каштан.jpg','Амата ДО каштан.jpg','Вилла ДГ ясень.jpg','Вилла ДО ясень.jpg','Вита ДГ ясень.jpg','Злата ДО каштан.jpg','Злата ДО ясень.jpg','Рока ДГ золотая ольха.jpg','Рока ДГ каштан.jpg','Рока ДО золотая ольха.jpg','Рока ДО каштан.jpg','Стелла ДГ каштан.jpg','Стелла ДО каштан.jpg','Фортис ДГ золотая ольха.jpg','Фортис ДГ каштан.jpg','Фортис ДО золотая ольха.jpg','Фортис ДО каштан.jpg','Эскада золотая ольха ДГ.jpg','Эскада Золотая ольха ДО.jpg'];
                break;
            case 'odincovo':
                fabOpt = ['c-28','c-2','c-2','c-2','c-2','c-10','c-10','c-10','c-10','c-17','c-17','c-20','c-20','c-8','c-8'];
                fabLin = ['C 28 Вишня малага ДО.jpg','C2 ДО итальянский орех.jpg','C2 ДО миланский орех.jpg','C2 ДОФ итальянский орех.jpg','C2 ДОФ миланский орех.jpg','С10 ДО итальянский орех.jpg','С10 ДО миланский орех.jpg','С10 ДОФ итальянский орех.jpg','С10 ДОФ миланский орех.jpg','С17 ДОФ итальянский орех.jpg','С17 ДОФ миланский орех.jpg','С20 ДГ тик.jpg','С20 ДО тик.jpg','С8 ДГ Венге мелинга.jpg','С8 ДО венге мелинга.jpg'];
                break;
            case 'olimp':
                fabOpt = ['chayka','chayka','eldorado'];
                fabLin = ['Чайка ДГ.jpg','Чайка ДО.jpg','Эльдорадо ДО.jpg'];
                break;
            case 'rumaks':
                fabOpt = ['kameliya-rm','kameliya-rm','kareliya-2','kareliya-2','kareliya-2','kareliya-2','mezhkomnatnaya-dver-ledi-4','mezhkomnatnaya-dver-ledi-4','mezhkomnatnaya-dver-ledi-4','mezhkomnatnaya-dver-ledi-4','natali','palermo-1','prestizh','prestizh','prestizh','prestizh','rumaks','rumaks','sonata','sonata','troya','troya','sharm','sharm','elegiya-1','elegiya-1','elegiya-duet','elegiya-duet'];
                fabLin = ['Камелия РМ ДГ.jpg','Камелия РМ ДО.jpg','Карелия 2 ДГ мореный дуб.jpg','Карелия 2 ДО мореный дуб.jpg','Карелия 2 орех ДГ.jpg','Карелия 2 орех ДО.jpg','Леди 4 венге ДГ бронза.jpg','Леди 4 венге до бронза.jpg','Леди 4 дг орех.jpg','Леди 4 до орех.jpg','Натали ДО.jpg','Палермо 1 рис. 22.jpg','Престиж слон дг бронза.jpg','Престиж слон дг.jpg','Престиж слон до бронза.jpg','Престиж слон до.jpg','Румакс ДГ.jpg','Румакс ДО.jpg','Соната дг.jpg','Соната до.jpg','Троя ДГ мореный дуб.jpg','Троя ДО мореный дуб.jpg','Шарм ДГ ТОнированный орех.jpg','Шарм ДО Тонированный орех.jpg','Элегия 1 ДГ Бесцветный лак.jpg','Элегия-1 бесцветный лак.jpg','Элегия-Дуэт ДГ Орех Бесцветный лак.jpg','Элегия-Дуэт ДО Орех Бесцветный лак.jpg'];
                break;
            case 'samara':
                fabOpt = ['ivan-da-marya','ivan-da-marya','karamelka','karamelka'];
                fabLin = ['Иван да марья ДГ.jpg','Иван да марья ДО венге.jpg','Карамелька ДО вар 2.jpg','Карамелька Орех ДГ.jpg'];
                break;
            case 'terem':
                fabOpt = ['arriva','arriva','arriva','arriva','lada','lada','gratsiya','sirius-piano','sirius-prima','florentsiya-klassik','florentsiya-klassik'];
                fabLin = ['Аррива Анегри ДГ.jpg','Аррива Анегри ДО.jpg','Аррива Старый Венге ДГ.jpg','Аррива Старый венге ДО.jpg','Лада 711.jpg','Лада 711 дг.jpg','Грация венге новый.jpg','Сириус пиано терракот.jpg','Сириус прима венге новый.jpg','Флоренция классик темный дуб дг.png','Флоренция классик темный дуб до.png'];
                break;
            case 'unik':
                fabOpt = ['novyy-stil','novyy-stil','sochi','sochi','sparta','sparta','unik','unik','filadelfiya','filadelfiya','premium-stil','premium-stil','mezhkomnatnaya-dver-nikki-1','mezhkomnatnaya-dver-nikki-1','mezhkomnatnaya-dver-nikki-4','mezhkomnatnaya-dver-nikki-4','mezhkomnatnaya-dver-nikki-4','mezhkomnatnaya-dver-nikki-5','mezhkomnatnaya-dver-nikki-5','nikki-55','nikki-55','nikki-6','mezhkomnatnaya-dver-nikki-5','unik-stil-1','mezhkomnatnaya-dver-unik-stil-9','mezhkomnatnaya-dver-unik-stil-9'];
                fabLin = ['Новый стиль до.jpg','Новый стиль дуб дг.jpg','Сочи дуб дг.jpg','Сочи дуб до.jpg','Спарта дг орех.jpg','Спарта до орех.jpg','Уник дг дуб.jpg','Уник до дуб.jpg','Филадельфия орех дг.jpg','Филадельфия орех до.jpg','Премиум стиль орех дг.jpg','Премиум стиль орех до.jpg','Никки 1 лиственница.jpg','Никки 1 темный орех.jpg','Никки 4 грей.jpg','Никки 4 лиственница.jpg','Никки 4 темный орех.jpg','Никки 5 дуб светлый.jpg','Никки 5 лиственница.jpg','Никки 55 лиственница.jpg','Никки 55 темный орех.jpg','Никки 6 дуб серый.jpg','Никки 5 темный орех.jpg','Стиль 1 Беленый дуб.jpg','Стиль 9 Беленый дуб.jpg','Стиль 9 венге.jpg'];
                break;
            case 'estet':
                fabOpt = ['mezhkomnatnaya-dver-u2','mezhkomnatnaya-dver-u2','mezhkomnatnaya-dver-u8','alfa','kristall','kristall','prestizh-s-moldingom','reyn','stil-1-uzkoe','stil-1-uzkoe','stil','stil','mezhkomnatnaya-dver-stil-polnoe-s-gravirovkoy'];
                fabLin = ['U2 Белый горизонт.jpg','U2 Венге горизонт.jpg','U8 венге горизонт.jpg','Альфа ДО.jpg','Кристалл ДГ марроне.jpg','Кристалл ДО марроне.jpg','Престиж с молдингом шато.jpg','Рейн.jpg','Стиль 1 Узкое венге.jpg','Стиль 1 узкое дуб млечный.jpg','Стиль полное венге.jpg','Стиль полное дуб млечный.jpg','Стиль Полное с гравировкой.jpg'];
                break;
        }
        return {
            fab: fabOpt,
            lin: fabLin
        }
    };
    // по нажатию на дверь добавление в интерьер двери
    $(document).on('click', '.uploadImage', function () {
        var sorc=$(this).attr('src');
        var linz=$(this).attr('data-url');
        $(".container_door").css('background','url('+ sorc +')');
        $(".container_door").css('background-size','contain');
        $(".container_door").css('background-repeat','no-repeat');
        var name=$(this).attr('data-name');
        var mess = "Вы выбрали двери: <a href='"+ linz +"'>"+ name +"</a>";
        $(".fabinfo").html(mess);
        return false;
    });
    function urldecode(str) {
        return decodeURIComponent((str+'').replace(/\+/g, '%20'));
    }
    function urlencode(str2) {
        return encodeURIComponent(str2);
    }
    // по нажатию на дверь добавление в интерьер двери

    // загрузка первой фабрики
    var fabriz = FabrikQuery('aleanza');
    var paths = "fotos/aleanza/";
    var zax;
    jQuery.each(fabriz.fab, function(i, val) {
        zax = urlencode(fabriz.lin[i]);
        $("#existingImges").append( "<img class='uploadImage' data-url='//dverionlain.ru/catalog/mezhkomnatnye-dveri/"+ val +"/' src='"+ paths + zax +"'>" );
    });
    // загрузка первой фабрики

    // загрузка своего интерьера
    $.uploadPreview({
        input_field: "#image-upload",
        preview_box: ".fon",
        label_field: "#image-label"
    });
    // загрузка своего интерьера

    // загрузка интерьеров
    // var interier = "interier/";
    // $.ajax({
    //     url : interier,
    //     success: function (data) {
    //         $(data).find("a").attr("href", function (i, val) {
    //             if( val.match(/\.(jpe?g|png|gif)$/) ) {
    //                 $("#intWarp").append( "<img class='uploadInter' src='"+ interier + val +"'>" );
    //             }
    //         });
    //     }
    // });
    // загрузка интерьеров

    // по нажатию на фон изменить интерьер
    $('body').on('click','.uploadInter',function(){
        var imgsrc=$(this).attr('src');
        $(".fon").css('background','url('+ imgsrc +')');
        $(".fon").css('background-size','contain');
        $(".fon").css('background-repeat','no-repeat');
    });
    // по нажатию на фон изменить интерьер
});