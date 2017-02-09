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

    // по нажатию на фон изменить интерьер
    $('body').on('click','.uploadInter',function(){
        var imgsrc=$(this).attr('src');
        $(".fon").css('background','url('+ imgsrc +')');
        $(".fon").css('background-size','contain');
        $(".fon").css('background-repeat','no-repeat');
    });
    // по нажатию на фон изменить интерьер
});