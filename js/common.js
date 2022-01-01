/*
header scroll effect
mixitup
parallax.js
scrollmagic.js
*/



/*
스크롤을 내리면 slidedown을 추가해서 보이게
현재스크롤양이 바로 직전의 스크롤양보다 적으면 slidedown없애고
slideup을 추가하기
계속 줄던 스크롤이 50보다 작으면 header에 있는 slideup도 지우기 
*/

/* header scroll effect */

var header = $('header');
var lastscrollAmt = 0;

$(window).scroll(function(){
    var currentscrollAmt = $(this).scrollTop();

if($('#fullpage').length > 0){
    if(currentscrollAmt > lastscrollAmt){
        header.removeClass('slidedown');
        header.addClass('slideup');
    }else if(currentscrollAmt < lastscrollAmt){
        header.removeClass('slideup');
        header.addClass('slidedown');
    }
    if(currentscrollAmt == 0){
        header.removeClass('slidedown');
        header.removeClass('slideup');
    }
    lastscrollAmt = currentscrollAmt;
    // console.log(lastscrollAmt,currentscrollAmt);
}

});

/* overlay */




/* mixitup.js */

if($('.news').length > 0){
    $('#sort-select').change(function(){
        var targetClass = $(this).val();
        console.log(targetClass);
        mixer.sort(targetClass);
    });
}
if($('.mix-wrapper').length > 0){
    var mixer = mixitup('.mix-wrapper',{
        selectors: {
            target: '.mix'
        },
        "animation": {
            "duration": 0
        }
    });
}
if($('.faq_wrapper').length > 0){
    var faqmixer = mixitup('.faq-mix-wrapper',{
        selectors: {
            target: '.item'
        },
        "animation": {
            "duration": 0
        }
    });
    $('.faqfilter button').click(function(){
        var target = $(this).attr('data-faqfilter');
        faqmixer.filter(target);
    });
}

/* pagenation */

if($('.services_wrapper').length > 0){ 
    var rowsperPage = 6;
    var rows = $('.services_wrapper .mix-wrapper .mix');
    var rowsCount = rows.length;
    var pageCount = Math.ceil(rowsCount/rowsperPage);
    // console.log(pageCount);

    makepagination();

}
if($('.faq_wrapper').length > 0){ 
    var rowsperPage = 5;
    var rows = $('.faq_wrapper .faq-mix-wrapper .item');
    var rowsCount = rows.length;
    var pageCount = Math.ceil(rowsCount/rowsperPage);
    // console.log(pageCount);

    makepagination();

}


function makepagination(){
    // 전체를 함수로 만들어서 media에서도 쓰기

    for(var i = 1; i<=pageCount; i++){
        $('#numbers').append('<li><a href="">' + i + '</a></li>');
    }

    // $('#numbers li')eq(0)find('a').addClass('active');
    $('#numbers li:first-child a').addClass('active');
    console.log(rows);

};// makepagination    

function displayRows(idx){
    // var start = (idx-1) * rowsperPage;
    var start = idx * rowsperPage - rowsperPage;
    // 0이면 0*(6-6), 1이면 1*(6-6), 2면 2*(6-6)으로 무조건 처음부터
    var end = start + rowsperPage;
    // 끝은 시작이 0이면 0+6, 1이면 1+6...
    rows.hide();
    // 일단 다 숨기고
    rows.slice(start,end).show();
    /* 그러니까 24개의 0번째부터 6번째까지 잘라서
    무조건 6개씩 나올 수 있음 */
};// displayRows

if($('.services_wrapper').length > 0){
    displayRows(1);
}
if($('.faq_wrapper').length > 0){
    displayRows(1);    
}

    // 일단 처음엔 무조건 1번이 보이게하고
    
    $('#numbers li a').click(function(e){
        e.preventDefault();
        
        $('#numbers li a').removeClass('active');
        $(this).addClass('active');
        var targetNum = $(this).text();
        displayRows(targetNum);
    });
    
    /*
    pagination이 전체 탭에서만 보이게 하려면
    다른 탭을 클릭했을 때는 hide를 하면 되나?
    */

    // $('.pagination').hide();
    //     $('.tab_buttons_nav button:first-child').click(function(){
    //         $('.pagination').show();
    //     });

    /*
    $('.tab_buttons_nav button')을 클릭하면 pagination이 안보였다가
    $('.tab_buttons_nav button:first-child')을 클릭하면 pagination이 보이게
    */
    $('.tab_buttons_nav button').click(function(){
        $('.tab_buttons_nav button').removeClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('tab-button-all')){       
            displayRows(1);
            $('.pagination').show();
        }else{
            $('.pagination').hide();            
        }
    });
    $('.tab_buttons_nav li').click(function(){
        $('.tab_buttons_nav li').removeClass('active');
        $(this).toggleClass('active');
    });

    /* parallax.js */
    
    $('.video_wrapper').parallax({
        imageSrc: 'images/Cover_Image_new.png', 
        speed:0.3,
        // naturalWidth: 600,
        naturalHeight: 100,
        bleed:1
    });

    // $('.wwdbg').parallax({
    //     imageSrc: 'images/wwd_right.png',
    //     speed:0.1
    // }); 높이가 없다가 생기면 parallax 불가. 그냥 이건 높이 생기는 이펙트로
    
    
    // $('.ms_secwrapper').parallax({
    //     imageSrc: 'images/bg_main_01.jpg', 
    //     speed:0.3,
    //     bleed:1
    // });
    //이부분은 스크롤 이펙트 만들지 못하면 적용하기 

    $('.services_banner').parallax({
        imageSrc: 'images/visual2.jpg', 
        speed:0.5
    });

    // $('.news_banner').parallax({
    //     imageSrc: 'images/news_banner.jpg', 
    //     speed:0.4,
    //     naturalHeight: 100,
    //     bleed:1
    // });

    // $('.faq_banner').parallax({
    //     imageSrc: 'images/faq_banner.png', 
    //     speed:0.4
    //     // coverRatio:1
    //     // naturalHeight: 100,
    //     // bleed:1
    // });


    // $('section.ex1').parallax({
    //     imageSrc: 'images/report01.jpg', 
    //     speed:0.5
    // });
    // $('section.ex2').parallax({
    //     imageSrc: 'images/report02.jpg', 
    //     speed:0.5
    // });
    // $('section.ex3').parallax({
    //     imageSrc: 'images/report03.jpg', 
    //     speed:0.5
    // });


    $('.culture_benefits').parallax({
        imageSrc: 'images/culture_and_benefits_bg.jpg', 
        speed:0.2
    });



    // $('.lookfor_slide').parallax({
    //     imageSrc: 'images/look_for_swiper_bg.png', 
    //     speed:0.5
    // });
    $('.we_make_history').parallax({
        imageSrc: 'images/wmh_banner.png', 
        speed:0.2
    });





/* scrollmagic.js */
/*

스크롤 양이 0이라면 sub_fullpage의 position:fixed
스크롤 양이 개체의 높이만큼 생기면 sub_fullpage의 position:relative

*/
// 100이상 active 추가
// 스크롤양 만큼subfullpage top -



$(window).scroll(function(){
    
    var subfullpage = $('.sub_fullpage');
    var scrollAmt = $(this).scrollTop();
    // console.log(scrollAmt);
    
    // if(scrollAmt > 500){
    //     subfullpage.addClass('active');
    //     $('body').css({paddingTop:0});
    //     subfullpage.css({top:-scrollAmt + 'px'});
    // } else{
    //     subfullpage.removeClass('active');
    //     $('body').css({paddingTop:'100vh'});
    //     subfullpage.css({top: 0});
    // }
    // subfullpage.addClass('active');
});

// fixed를 없애야 클래스명이 정상적으로 들어가고 사라짐

/*

현재 윈도우의 스크롤 양scrollAmt이
(our_mission의 scrollTop-500)보다 많다면
    our_mission의 position:fixed
    our_mission 밑에있는 vision의 padding-top:100vh
아니라면
    our_mission의 position:relative
    our_mission 밑에있는 vision의 padding-top:0
    our_mission.css({top:-scrollAmt + 'px'});
*/
$(window).scroll(function(){
    var scrollAmt = $(window).scrollTop();
    var mission = $('.our_mission');
    var vision = $('.vision');

    // var missionTop = mission.offset().top;
    // console.log(scrollAmt,missionTop);


    // vision.css({paddingTop:0});
    // if(scrollAmt > 3600){
    //     mission.addClass('active');
    // }else if(scrollAmt > 4300){
    //     mission.removeClass('active');
    // }else{
    //     mission.removeClass('active');
    // }




    // if(scrollAmt > missionTop){
    //     mission.addClass('active');
    //     vision.css({paddingTop:'100vh'});
    // }else if(scrollAmt > missionTop + 200){
    //     mission.removeClass('active');
    //     vision.css({paddingTop:0});
    // }else if(scrollAmt < missionTop){
    //     mission.removeClass('active');
    //     vision.css({paddingTop:0});
    // }
    // else if(scrollAmt > missionTop + 500){
    //     mission.removeClass('active');
    //     vision.css({paddingTop:0});
    //     mission.css({top:-scrollAmt + 'px'});
    // }

});


// 100이상 active 추가
// 스크롤양 만큼subfullpage top -











// var controller = new ScrollMagic.Controller();

// // show pin state
// function updateBox (e) {
//     if (e.type == "enter") {
//         $("#pin h1").text("about us1");
//     } else {
//         $("#pin h1").text("about us2");
//     }
// }
// new ScrollMagic.Scene({triggerElement: "header", duration: 150})
// .setPin("#pin")
// .setClassToggle("#pin")
// .on(updateBox)
// .addIndicators() // add indicators (requires plugin)
// .addTo(controller);


// CONTACT_MODAL

if($('.contact_modal form').length > 0){
    $( "#location" ).selectmenu({
      change: function( event, ui ) {
          updateProgress();
      }
    });
  
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
    $( "#category" ).autocomplete({
      source: availableTags
      // change: function( event, ui ) {
      //     updateProgress();
      // }
    });
  
    $( "#experience" ).spinner({
      min: 0,
      max: 10,
      step: 2,
      spin: function( event, ui ) {
          updateProgress();
      }
    });
  
  
    $( "#start" ).datepicker({
      minDate: new Date(),
      maxDate: '+2w'
    });
  
    //$( "#start" ).datepicker( "setDate", new Date() );
  
    $( 'input[type="radio"]' ).checkboxradio();
  
    $('#submit').button({
      disabled: true
    });
  
    $('#progress').progressbar();
    
    $('input').change(function(){
      updateProgress();
      
    });
  
    function updateProgress(){
      var progress = 0;
      var itemCount = 3;
      var itemCompleted = 0;
  
      // var location = $('#location option:selected').val();
      // var category = $('#category').val();
      // var experience = $('#experience').val();
      // var start = $('#start').val();
      var txtName = $('#txtName').val();
      var txtEmail = $('#txtEmail').val();
      var referrer = $('input[type="radio"]:checked').val();
  
      // if(location) itemCompleted++; 
      // if(category) itemCompleted++; 
      // if(experience) itemCompleted++; 
      // if(start) itemCompleted++; 
      if(txtName) itemCompleted++; 
      if(txtEmail) itemCompleted++; 
      if(referrer) itemCompleted++; 
     
  
      progress = itemCompleted/itemCount * 100;
      console.log(progress);
  
      $('#progress').progressbar( "value", Math.floor(progress) );
  
      $('.pct span').text(Math.floor(progress));
  
      if(progress == 100){
      $( "#submit" ).button( "enable" );
      $( "#submit" ).addClass( "active" );
      }
        
    }
  
  
  
  
    $(".contact_modal").hide();
  
    $(".btn-modal").on("click", function(e) {
        e.preventDefault();
        $(".contact_modal").fadeIn(500);
        $(".contact_modal").css({visibility:'visible'});
      });
    
    $(".contact_modal .close").on("click", function(e) {
        e.preventDefault();
      $(".contact_modal").fadeOut(500);
    });

}
// var backToTop = document.querySelector('.back_to_top');

// window.addEventListener('scroll',function(evt){
//     evt.preventDefault();
//     var scrollAmt = window.pageYOffset;

    // console.log(scrollAmt);

// if(scrollAmt > 1000){
//     backToTop.classList.add('active');

// }else{
//     backToTop.classList.remove('active');
// }

// });

// backToTop.addEventListener('click', function(evt){ 
//     evt.preventDefault();

    
//     var bttTimer = setInterval(function(){
//     var scrollAmt = window.pageYOffset;
        
//         if(scrollAmt != 0){
//             window.scrollBy(0,-50);
//         }else{
//             clearInterval(bttTimer);
//     }

// },8);

// });
