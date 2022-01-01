/*
fullpage.js
*/


$('.hamburger-button').click(function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	$('.overlay').toggleClass('active');
});


var fullpageSection	= $('#fullpage > .section');

$('#fullpage').fullpage({
    //options here
    afterRender: function () {
        setInterval(function () {
            $.fn.fullpage.moveSlideRight();
        }, 5000);
    },
    autoScrolling:true,
    slidesNavigation: true,
    // slidesNavPosition: 'bottom',
    navigation: true,
    scrollOverflow: false,
    navigationPosition: 'right',
    
    afterLoad: function(anchorLink, index){
        // 매개변수의 이름이 중요한게 아니고 매개변수의 순서가 중요!
        // console.log(index);
        // fullpage.js폴더의 example 폴더 속 callbacks의 문법 참조할것! 메뉴얼과는 버전이 달라서 문법이 다르다
        
        if(index > 1){ //이숫자가 처음이 아니라면 헤더에 active를 넣는다
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }

        if(index == fullpageSection.length){
            $('.btt').addClass('active');
        }else{
            $('.btt').removeClass('active');
        }


              

    },		
    onLeave:function(anchorLink, index){
        console.log(index);
        if(fullpageSection.eq(index - 1).hasClass('contrast')){//1부터 들어오니까 1 빼고
            // 그 선택한 요소에 contrast가 있니없니. 있으면 어두운 배경으로
            $('#fp-nav').removeClass('dark');
        }else{
            $('#fp-nav').addClass('dark');
        }
    },
    onLeave: function(index, nextIndex, direction){
        console.log(index, nextIndex, direction);

        if(direction == 'down'){
            $('header').removeClass('slidedown');
            $('header').addClass('slideup');
        }else if(direction == 'up'){
            $('header').removeClass('slideup');
            $('header').addClass('slidedown');
        }if(nextIndex == 1){
            $('header').removeClass('slidedown');
            $('header').removeClass('slideup');
        }


        if(index == 7 || nextIndex == 8){
            $('.overlay .menu').addClass('active');
        }

    }

});//fullpage js

if($('.business').length > 0){
    
    $( function() {
        $( ".business" ).tabs();
    } );
    
    $('.business ul.aside li').click(function(){
        $('.business ul.aside li').removeClass('active');
        $(this).addClass('active');
    });



}



// $('#fullpage > div').each(function(idx){
//     var pageTitle = $('.section').eq(idx).attr('data-title');
//     // console.log(pageTitle);
//     $(' #fp-nav li').eq(idx).find('a').attr('data-title', pageTitle);
//     // $(' #fp-nav li').eq(idx).find('span').text(pageTitle);
// });

// 세번 넣는다 여기서 두번 css에서 한번
// a의 데이터타이이틀의 값만 넣고
// 스크립트를 통해서 a ㅇㅁㅅㅁ-샤싣data-titlde이 생겼을거니ㅏ까
// css에서는 a:after는 data-title의 값을 넣어라


$('.banner_wrapper .fp-slidesContainer > div').each(function(idx){
    var full_h3 = $(this).find('h3').text();
    var full_h2 = $(this).find('h2').text();
    $('.banner_wrapper .fp-slidesNav li').eq(idx).find('a').html(full_h3 +'<br/>'+ full_h2);
    });

$('.develop .fp-slidesContainer > div').each(function(idx){
    var full_h2 = $(this).find('h2').text();
    $('.develop .fp-slidesNav li').eq(idx).find('a').text(full_h2);
    });


    // modal


var closebtn = $('.close a');
var modal = $('.modal');

closebtn.click(function(e){
  e.preventDefault();
  modal.hide();
});


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