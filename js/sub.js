/*
sub_fullpage
jqueryUI
jquerychart.js
swiper.js
foggy.js
mouse direction
*/


$('.hamburger-button').click(function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	$('.overlay').toggleClass('active');
});

var menulist = $('.menu li');
var menulibg = menulist.find('.menulibg');

menulist.hover(function(e){
	e.preventDefault();
	var mntarget = $(this).position().left;
	// console.log(mntarget);
	menulibg.animate({left:mntarget});
});


// var msscrAmt = $('.our_mission').offset().top; 상단에서 떨어진 거리


/* sub_page top sections */

if($('.sub_fullpage').length > 0){

  var subfullpage = $('.sub_fullpage');
  var fpcontents = $('.sub_fullpage .contents');

  $(window).scroll(function(){
  if($(this).scrollTop() > 0){
      fpcontents.addClass('active');
      subfullpage.addClass('movebg');
      if($(this).scrollTop() > 1000){
        // subfullpage.addClass('slideup');
        // subfullpage.slideUp();
        // if($(this).scrollTop() > 1200){
        // }
      }
    }
  });
}


/* scrollmagic.js */


// 윈도우 리사이즈
// 스크롤매직을 함수로 바꾸고
// 480이상에서만 작동하게

// 사이즈바꿀일 없는 사람들을 위해서
// 트리거 리사이즈를 걸고


var windowSize = $(window).width();

if(windowSize > 600){
  scrollMagics();
}

// $(window).resize(function(){

//   if($(window).width()>600){
//     scrollMagics();
//   }

// });


function scrollMagics(){



  var fpcontroller = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave',
          duration: "200%"
      }
  });
  
  var Pffullpage = $("div.sub_fullpage");
  
  for (var i=0; i<Pffullpage.length; i++) {
      new ScrollMagic.Scene({
              triggerElement: Pffullpage[i]
          })
          .setPin(Pffullpage[i], {pushFollowers: true})
          .addTo(fpcontroller);
  }
  
  
  if($('#about').length > 0){
    
    
      var mscontroller = new ScrollMagic.Controller({
          globalSceneOptions: {
              triggerHook: 'onLeave',
              duration: "300%"
          }
      });
      
      var Pmission = $(".our_mission");
      
      for (var i=0; i<Pmission.length; i++) {
          new ScrollMagic.Scene({
                  triggerElement: Pmission[i]
              })
              .setPin(Pmission[i], {pushFollowers: true})
              .addTo(mscontroller);
      }
    
    
    
      var vscontroller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "300%"
        }
    });
    
    var Pvision = $(".flow_wrapper");
    
    for (var i=0; i<Pvision.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: Pvision[i]
            })
            .setPin(Pvision[i], {pushFollowers: true})
            .addTo(vscontroller);
    }
    
    
  }
  
  if($('#media').length > 0){
  
  
        var ctcontroller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "200%"
            }
        });
        
        var culture = $('.culture');
  
        
        for (var i=0; i<culture.length; i++) {
            new ScrollMagic.Scene({
                    triggerElement: culture[i]
                })
                .setPin(culture[i], {pushFollowers: true})
                .addTo(ctcontroller);
        }
  }


};



// if($('#careers').length > 0){

//   var lkcontroller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave',
//         duration: "300%"
//     }
// });

// var lookfor = $('.looking_for');


// for (var i=0; i<lookfor.length; i++) {
//     new ScrollMagic.Scene({
//             triggerElement: lookfor[i]
//         })
//         .setPin(lookfor[i], {pushFollowers: true})
//         .addTo(lkcontroller);
// }
// }






/* mouse direction */

//careers

if($('.looking_for').length > 0){
    var pictures = $('.lookfor_slide .swiper-container .swiper-wrapper .swiper-slide figure span');
    var direction = '';
    var animationTo;
    var positionOut = {width: '70%'};
    // 마우스 없을때 기본 그림자
    // var positionOut = {boxShadow: 3+'px' + 3+'px' + 3+'px' + 'rgba('+0+','+0+','+0+','+50+'%)'};

    //         return {boxShadow: -6+'px' + 0+'px' + 3+'px' + 'rgba('+0+','+0+','+0+','+50+'%)'}

    function moveShadow(e){
    var $this = $(this);
    direction = detectMouseDirection(e);
    

    /** do your animations here **/ 
    var positionIn = (function(){
            switch(direction) {
            case 0:
            /** animations from the TOP **/
            return {width: '100%'}
            case 1:
            /** animations from the RIGHT **/
            return {width: '100%'}
            case 2:
            /** animations from the BOTTOM **/
            return {width: '100%'}
            case 3:
            /** animations from the LEFT **/
            return {width: '100%'}
        }
    })();

    if(e.type === 'mouseenter'){
        animationTo = positionIn;
        $this.css(positionOut);

    } else if(e.type === 'mouseleave'){
        animationTo = positionOut;
    }

    // console.log(positionOut,animationTo);

    $this.stop().animate(animationTo, 250);
    }

    function moveShadow(e){
    var el = $(e.currentTarget);
    console.log(el);

    var w = el.width();
    var h = el.height();

    var x = (e.pageX - el.offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
    var y = (e.pageY - el.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );

    direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
    // console.log(direction);
    return direction;            
    }
    pictures.on('mousemove mouseenter mouseleave', moveShadow);

}




if($('.looking_for .movingtext').length > 0){

// 1차시도 실패
  //   var movingtext = $('.lookfor_text');
//   var direction = '';
//   var animationTo;
//   var positionOut = {top:'0', left:'0'};
//   // 마우스 없을때 기본 그림자
//   // var positionOut = {boxShadow: 3+'px' + 3+'px' + 3+'px' + 'rgba('+0+','+0+','+0+','+50+'%)'};

//   //         return {boxShadow: -6+'px' + 0+'px' + 3+'px' + 'rgba('+0+','+0+','+0+','+50+'%)'}

//   function movetextshd(e){
//   var $this = $(this);
//   direction = detectMouseDirection(e);
  

//   /** do your animations here **/ 
//   var positionIn = (function(){
//       switch(direction) {
//         case 0:
//         /** animations from the TOP **/
//         return {top:'0%', left:'10%'}
//         case 1:
//         /** animations from the RIGHT **/
//         return {top:'0%', left:'-10%'}
//         case 2:
//         /** animations from the BOTTOM **/
//         return {top:'0%', left:'-10%'}
//         case 3:
//         /** animations from the LEFT **/
//         return {top:'0%', left:'10%'}
//     }
// })();

//   if(e.type === 'mouseenter'){
//       animationTo = positionIn;
//       $this.css(positionOut);

//   } else if(e.type === 'mouseleave'){
//       animationTo = positionOut;
//   }

//   // console.log(positionOut,animationTo);

//   $this.stop().animate(animationTo, 250);
//   }

//   function movetextshd(e){
//   var el = $(e.currentTarget);
//   console.log(el);

//   var w = el.width();
//   var h = el.height();

//   var x = (e.pageX - el.offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
//   var y = (e.pageY - el.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );

//   direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
//   // console.log(direction);
//   return direction;            
//   }
//   movingtext.on('mousemove mouseenter mouseleave', movetextshd);


function maketextshadow () {
  var movingtext=$(".looking_for .movingtext");
  var textwithshadow =$(".lookfor_text");
  var mvtxtbtn = $('.lookfor_btn');

  movingtext.mousemove(function(e){
    var x = (e.pageX - this.offsetLeft-$(this).width()/2);
    var y = (e.pageY - this.offsetTop-$(this).height()/2);
    textwithshadow.css('text-shadow', +y/10+'px '+x/80+'px rgba(0,0,0,.1), '+y/8+'px '+x/60+'px rgba(0,0,0,.2), '+x/300+'px '+y/12+'px rgba(0,0,0,.3)');
  });

  // mvtxtbtn.mouseenter(function(){
  //     $(this).stop().animate({opacity:"1"});
  //   //  $(this).addClass('active');
  //   }).mouseleave(function(){
  //     $(this).stop().animate({opacity:"0.7"});
  //   // $(this).removeClass('active');
  // });
  mvtxtbtn.click(function(){
    $(this).addClass('active');
    textwithshadow.hide();
    movingtext.find('h4').hide();
    $(this).css({});
    $('.lookfor_slide').fadeIn();
    lookforslide();
    $(window).resize(function(){
      movingtext.css({display:'block'});
    });
  });

}
maketextshadow();

}



// culture mouse direction 안이뻐서 취소 

// if($('.culture').length > 0){
//     var culture = $('.culture');
//     // var cultureimgs = $('.culture_bg_images');
//     var direction = '';
//     var animationTo;
//     var positionOut = {boxShadow: '3px 3px 3px #fff'};

//     function moveCaption(e){
//     var $this = $(this);
//     direction = detectMouseDirection(e);
    

//     /** do your animations here **/ 
//     var positionIn = (function(){
//             switch(direction) {
//             case 0:
//             /** animations from the TOP **/
//             return {boxShadow: '13px 13px 3px #fff'}
//             case 1:
//             /** animations from the RIGHT **/
//             return {boxShadow: '13px 13px 3px #fff'}
//             case 2:
//             /** animations from the BOTTOM **/
//             return {boxShadow: '13px 13px 3px #fff'}
//             case 3:
//             /** animations from the LEFT **/
//             return {boxShadow: '13px 13px 3px #fff'}
//         }
//     })();


//     /*
//     미디어페이지의 culture,
//     마우스가 없을때는 가만히 있다가 top:'50%', left:'50%'

//     왼쪽,위쪽에서 마우스가 들어가면 top:'50%', left:'80%'
//     오른쪽,아래쪽에서 마우스가 들어가면 top:'50%', left:'20%'

//     */

//     // 안이쁜데 그냥 스크롤 고정하고 스크롤내리면 움직이게 할까?


//     if(e.type === 'mouseenter'){
//         animationTo = positionIn;
//         $this.find('.culture_bg_images span').css(positionOut);

//     } else if(e.type === 'mouseleave'){
//         animationTo = positionOut;
//     }

//     // console.log(positionOut,animationTo);

//     $this.find('.culture_bg_images span').stop().animate(animationTo, 1500);
//     }

//     function detectMouseDirection(e){
//     var el = $(e.currentTarget);
//     console.log(el);

//     var w = el.width();
//     var h = el.height();

//     var x = (e.pageX - el.offset().left - (w/2)) * ( w > h ? (h/w) : 1 );
//     var y = (e.pageY - el.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 );

//     direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
//     // console.log(direction);
//     return direction;            
//     }
//     culture.on('mousemove mouseenter mouseleave', moveCaption);


//     // .looking_for .movingtext
//     // .lookfor_text
// }






  
/* scroll effects */

$(window).scroll(function(){

    var Amtnum = 300;
  //ABOUT PAGE

  if($('#about .wwd_contents').length > 0){
    var aboutus = $('.about_us');
    var aboutleft = $('section.aUleft');
    // var aboutscrAmt = aboutus.offset().top;
    // var wwdscAmt =  $('.wwd_contents').offset().top;

    // if($(this).scrollTop() > aboutscrAmt - Amtnum){
    //   aboutleft.addClass('active');
    // }
    if($(this).scrollTop() > wwdscAmt - Amtnum){
      $('.wwd_contents').addClass('active');
    }
  }


    /*
    mission의 상단에서 떨어진 거리인 578부터 3250까지 고정되어있음
    개당 909씩 할당하면 됨

    현재 윈도우의 스크롤양이 600 이상 1500 이하라면
        msSections.eq(1)에 active 추가
    현재 윈도우의 스크롤양이 1500 이상 2500 이하라면
        msSections.eq(2)에 active 추가
    현재 윈도우의 스크롤양이 2500 이상이라면
        msSections.eq(3)에 active 추가
    1545부터 4272까지    
    */


    if($('.mission_contents').length > 0){
      var msscrAmt = $('.our_mission').offset().top;
      // console.log(msscrAmt);
      var msSections = $('.our_mission .ms_secwrapper section');
      if(600 < $(window).scrollTop()){
          msSections.eq(0).addClass('active');
      }else{
          msSections.eq(0).removeClass('active');        
      }
      
      if(1500 < $(window).scrollTop()){
          msSections.eq(1).addClass('active');
      }else{
          msSections.eq(1).removeClass('active');        
      }

      if(2400 < $(window).scrollTop()){
          msSections.eq(2).addClass('active');
      }else{
          msSections.eq(2).removeClass('active');        
      }
    }
    /*
    vision의 상단에서 떨어진 거리인 5203부터 7909까지 고정되어있음
    3회로 나눠서 왼쪽으로 이동하게 하고 회당 937씩 할당하면 됨

    현재 윈도우의 스크롤양이 5203이상이라면
        vstextflow.css({left:'-30%'});
    현재 윈도우의 스크롤양이 9370이상이라면
        vstextflow.css({left:'-60%'});
    현재 윈도우의 스크롤양이 10307이상이라면
        vstextflow.css({left:'-90%'});   
    */

      if($('.flow_wrapper').length > 0){

        var vsscrAmt = $('.flow_wrapper').offset().top;
        console.log(vsscrAmt);
        var vstextflow = $('.flow_wrapper .vs_flowToLeft');
    
        if(5000 < $(window).scrollTop()){
            vstextflow.css({left:'0'});
        }
        if(5700 < $(window).scrollTop()){
            vstextflow.css({left:'-2000px'});
        }
        if(6000 < $(window).scrollTop()){
            vstextflow.css({left:'-2500px'});
        }
        if(6500 < $(window).scrollTop()){
        vstextflow.css({left:'-3000px'}); 
        }
        if(7000 < $(window).scrollTop()){
        vstextflow.css({left:'-3500px'}); 
        }
        if(7100 < $(window).scrollTop()){
        vstextflow.css({left:'-4000px'}); 
        }


      }
  









  //INVESTMENT PAGE
  if($('.staff').length > 0){
    var staff = $('.staff');
    var staffscrAmt = staff.offset().top;
    // console.log(staffscrAmt);
    var section1 = $('.staff .sections .section01');
    var section2 = $('.staff .sections .section02');
    var section3 = $('.staff .sections .section03');
    var section4 = $('.staff .sections .section04');
    var section5 = $('.staff .sections .section05');
    var section6 = $('.staff .sections .section06');
    var section7 = $('.staff .sections .section07');
    // var secscrAmt = sections.offset().top;
    // console.log(secscrAmt);

    if($(window).scrollTop() > staffscrAmt - 500){
      staff.addClass('active');
    }

    // if($(window).scrollTop() > secscrAmt - 100){
    //   for(var i = 0; i <sections.length; i++){
    //     if($(window).scrollTop() > section[i].offset().top){
    //       section[i].addClass('active');
    //     }
    //   }
    // }


    // var sections = $('.staff .sections section');
    // for(var i = 0; i <sections.length; i++){
    //   // if($(window).scrollTop() > sections[i].offset().top - 600){
    //   //   sections[i].addClass('active');
    //   // }      
    //   // }
    //   sections.each(function(index){
    //   if($(window).scrollTop() > sections(index).offset().top - 600){
    //     sections(index).addClass('active');
    //   }

    // });



    if($(window).scrollTop() > section1.offset().top - 600){
      section1.addClass('active');
    }
    if($(window).scrollTop() > section2.offset().top - 600){
      section2.addClass('active');
    }
    if($(window).scrollTop() > section3.offset().top - 600){
      section3.addClass('active');
    }
    if($(window).scrollTop() > section4.offset().top - 600){
      section4.addClass('active');
    }
    if($(window).scrollTop() > section5.offset().top - 600){
      section5.addClass('active');
    }
    if($(window).scrollTop() > section6.offset().top - 600){
      section6.addClass('active');
    }
    if($(window).scrollTop() > section7.offset().top - 600){
      section7.addClass('active');
    }

  }

  //MEDIA PAGE
          


    if($('#media').length > 0){
        var culture = $('.culture');
        var ctscrAmt = culture.offset().top;
        var cultureimgs = $('.culture_bg_images');        
    
        if($(this).scrollTop() > ctscrAmt){
            // cultureimgs.addClass('active');
            cultureimgs.stop().animate({left:'-10%'}, 1500);
        }else if($(this).scrollTop() < ctscrAmt){
            cultureimgs.stop().animate({left:'0'}, 1500);
        }




        // $('div').stop().animate({
        //     backgroundColor: '#faee00',
        //     color: '#000'
        //  }, 3500, 'easeInOut');
    
    }








  
});

/* grid & list view */

if($('.news').length > 0){

    var imageList = $('.image-list');
    var btns = $('.news-options li');
    
    btns.click(function(){

      $(window).trigger('scroll');

      if($(this).hasClass('show-grid')){
            btns.find($('button')).removeClass('active');
            $(this).find($('button')).addClass('active');
            imageList.removeClass('list-view');
            imageList.addClass('grid-view');

        }else if($(this).hasClass('show-list')){
            btns.find($('button')).removeClass('active');
            $(this).find($('button')).addClass('active');
            imageList.removeClass('grid-view');
            imageList.addClass('list-view');
            // $('.faq_banner').css({marginTop:'400px'});
        }
    });

    var container = $('#gallery_more'),
        loadMoreBtn = $('#load-more'),
        addItemCount = 6, //한번에 추가할 목록 수
        added = 0, // 화면에 표시된 항목 수
        allData = []; //json 데이터 모두


        container.masonry({
            // options
            itemSelector: '.gallery-item',
            // columnWidth: 270,
            // gutter:20
        });

        //$.getJSON('파일명', function(data){....})
        $.getJSON('data/content.json', initGallery);

        function initGallery(data){
            allData = data;
            console.log(allData);

            addItems(); //리스트를 생성해서 ul의 내용으로 추가           
            
        }//initGallery

        loadMoreBtn.click(function(){
            addItems();
        });

        function addItems(){
            var elements = [];
            var itemHTML = '';
            var slicedData = allData.slice(added, added + addItemCount);

            $.each(slicedData, function(i,item){

                // itemHTML = '<div class="mix nav07" data-order="7">'+
                // '<a href="'+item.images.large+'">'+
                //     '<img src="'+item.images.thumb+'" alt="">'+
                // '</a>'+
                // '<h3>'+item.title+'</h3>'+
                // '</li>';
                // elements.push($(itemHTML).get(0));


                itemHTML = '<div class="mix nav07" data-order="7">'+
                '<div class="miximage"></div>'+
                '<div class="contents">'+
                    '<div class="mix_front">'+
                        '<h5 class="section-smtt">'+item.date+'</h5>'+
                        '<h4 class="section-tt">'+item.title+'</h4>'+
                    '</div>'+
                '</div>'+
              '</div>';
              elements.push($(itemHTML).get(0));


            });
            
            added = added + addItemCount;

            container.append(elements);

            if(added == allData.length){
                loadMoreBtn.hide();
            }
            
            container.imagesLoaded( function() {                
          
                container.masonry( 'appended', elements );

            });
        }//addItems




};

// $(window).trigger('resize').trigger('scroll');

// $(window).resize(function(){
//   $('.faq_banner').parallax({
//     imageSrc: 'images/faq_banner.png', 
//     speed:0.4
//   });
//   $('.news_banner').parallax({
//     imageSrc: 'images/news_banner.jpg', 
//     speed:0.4
//   });      
// });

// $(window).scroll(function(){
//   $('.faq_banner').parallax({
//     imageSrc: 'images/faq_banner.png', 
//     speed:0.4
//   });
//   $('.news_banner').parallax({
//     imageSrc: 'images/news_banner.jpg', 
//     speed:0.4
//   });      
// });


/* 검색기능? */







/* swiper.js */
/*
slick.js로 변경? 현재슬라이드만 커지게 할 수 있다
https://kenwheeler.github.io/slick/
*/


if($('.culture_wrapper').length > 0){
    var multiswiper = new Swiper('.culture_wrapper .swiper-container', {
        // slidesPerView: 1,
        // spaceBetween: 20,
        loop:true,

        breakpoints: {
            // // when window width is >= 320px
            // 320: {
            //   slidesPerView: 1,
            //   spaceBetween: 20
            // },
            // when window width is >= 480px
            480: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            // when window width is >= 640px
            768: {
            slidesPerView:1,
            spaceBetween: 30
            },
            1000: {
            slidesPerView:1,
            spaceBetween: 100
            },
            1200: {
            slidesPerView:1.5,
            spaceBetween: 100
            }
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        // }
        navigation: {
            nextEl: '.swiper-pagination'}
    });
    
    var rotatenum = 60;
    $('.swiper-pagination').click(function(){
        $(this).find('img').css({transform:'rotate(' + -rotatenum + 'deg)'});
        rotatenum += 60;
    });

}

if($('.lookfor_slide').length > 0){
  function lookforslide(){
      var multiswiper = new Swiper('.lookfor_slide .swiper-container', {
        // slidesPerView: 1,
        // spaceBetween: 30,
        loop:true,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          // when window width is >= 480px
          500: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1.5,
            spaceBetween: 40
          },
          800: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1100: {
            slidesPerView: 3.5,
            spaceBetween: 80
          },
          1400: {
            slidesPerView:3.5,
            spaceBetween: 80
          }
          
        },scrollbar: {
                el: '.swiper-scrollbar'
              }
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // }
    });
  };
  lookforslide();
}



/* chart.js */

// about

if($('.chart_wrapper').length > 0){
  
  var vision_chart = $("#v-pie-chart");
  // var vpieLabels = ["RELIABLE PARTNER", "ADVANCED EXPERTISE", "LEADING REINSURER", "ENTREPRENEURSHIP"];
  var vpieData = [25,25,25,25];
  var vpieColors = [
    "rgb(153,21,0)",
    "rgb(189,90,45)",
    "rgb(208,255,113)",
    "rgb(255,36,0)"
  ];
// var value = randomValue(data);

  var v_pieChart = new Chart(vision_chart, {
    type: 'pie',
    data: {
      labels: ["RELIABLE PARTNER", "ADVANCED EXPERTISE", "LEADING REINSURER", "ENTREPRENEURSHIP"],
      datasets: [
        {
          data: vpieData,
          // value:labels,
          backgroundColor: vpieColors
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      cutout:'40%',
      
      // chart.options.cutout = '50%';

      title: {
        display: true,
        text: '비전 차트'
      }
    },
    plugins: {
      datalabels: {
        display: true,
        formatter:  function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
        //color: function (context) {
        //  return context.dataset.backgroundColor;
        //},
        color: 'rgba(0, 0, 0, 1.0)',
        //color: 'rgba(255, 255, 255, 1.0)',
        backgroundColor: null,
        font: {
          size: 20,
          weight: 'bold'
        }
      }
    }
    
  });
  
};


if($('.financial_info').length > 0){
  
  var premium_chart = $("#bar-chart");

  var incomePremium = [66, 72, 75, 80, 84];
  var holdPremium = [46, 50, 53, 55, 59];
  
  // 왜 값을 바꾸기만하면 최솟값이 바닥이 되지?
  
  var barChart = new Chart(premium_chart, {
    type: 'bar',
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
        label: "수재보험료",
        data: incomePremium,
        backgroundColor: "rgba(0, 153, 204,.5)",
        borderColor: "rgb(39,79,76)",
        borderWidth: 1
      },
      // linear-gradient(45deg, rgba(0, 153, 204,.7), rgba(0, 255, 204,.7))
        {
        label: "보유보험료",
        data: holdPremium,
        backgroundColor: "rgba(227, 97, 89,.5)",
        borderColor: "rgb(39,79,76)",
        borderWidth: 1
      }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'KOREAN RE 보험료 현황 (단위 : 억원)'
      }
    }
  });
  
  // $('#btn_income').click(function(){
  //     barChart.data.datasets[0].label = '수재보험료';
  //     barChart.data.datasets[0].data = incomePremium;
  //     barChart.update();
  // });
  // $('#btn_hold').click(function(){
  //     barChart.data.datasets[0].label = '보유보험료';
  //     barChart.data.datasets[0].data = holdPremium;
  //     barChart.update();
  // });
  
  var total_chart = $("#line-chart");
  
  var total_assets = [66, 72, 75, 80, 84];
  var total_equity = [46, 50, 53, 55, 59];
  
  // 왜 값을 바꾸기만하면 최솟값이 바닥이 되지?
  
  var lineChart = new Chart(total_chart, {
    type: 'line',
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020"],
      // Utils.numbers({min: -100, max: 100}),
      datasets: [
        {
        label: "자본총계",
        data: total_assets,
        backgroundColor: "rgba(227, 97, 89,.5)",
        borderColor: "rgb(39,79,76)",
        borderWidth: 1
      },
        
        {
        label: "총자산",
        data: total_equity,
        backgroundColor: "rgba(0, 255, 204,.5)",
        borderColor: "rgb(39,79,76)",
        borderWidth: 1
      }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'KOREAN RE 재무상태 (단위 : 억원)'
      }
    }
  });
  
  var statement_chart = $("#pie-chart");
  var pieLabels = ["현금성자산", "금융자산", "유형자산", "투자부동산", "무형자산"];
  var pieData = [36, 89, 95, 91, 222];
  var pieColors = [
    "rgb(153,21,0)",
    "rgb(189,90,45)",
    "rgb(208,255,113)",
    "rgb(255,36,0)",
    "rgb(194,250,255)"
  ];
  
  // var assets = [66, 72, 75, 80, 84];
  // var liability = [46, 50, 53, 55, 59];
  
  var pieChart = new Chart(statement_chart, {
    type: 'pie',
    data: {
      labels: pieLabels,
      datasets: [
        {
          data: pieData,
          backgroundColor: pieColors
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'KOREAN RE 자산 현황 (단위 : 억원)'
      }
    }
  });
  
  










}




/* accordion */

var question = $('.faq .question'),
	answer = $('.faq .answer');

question.click(function(){

	$(this).next(answer).slideToggle();
	//클릭하면 그 요소에만 active 들어오도록
	
	$(this).siblings().removeClass('active');//내가 클릭한거말고 h3가 어디에있든 뺐어
	$(this).toggleClass('active');//내가 클릭한게 얘니까 있었으면 빼고 없었으면 넣는다
});


/* jqueryUI tabs */
if($('#tabs').length > 0){
    $( "#tabs" ).tabs();
}

// if($('.what_we_want').length > 0){
// //   var wwwant = $('.what_we_want');
//   var wwwsection = $('.www_center section');
// //   var wwwsection2 = $('.www_center .www02');
// //   var wwwsection3 = $('.www_center .www03');
// //   var wwwsection4 = $('.www_center .www04');

//   if(wwwsection.eq(2).hover){
//     console.log('done');

//   }
// wwwsection.eq(2).hover(function(){
  
// })

// //   wwwsection1.mouseover(function(){
// //     wwwant.removeClass('^hover');
// //     wwwant.toggleClass('hover01');
// //   });
// //   wwwsection2.mouseover(function(){
// //     wwwant.removeClass('^hover');
// //     wwwant.toggleClass('hover02');
// //   });
// //   wwwsection3.mouseover(function(){
// //     wwwant.removeClass('^hover');
// //     wwwant.toggleClass('hover03');
// //   });
// //   wwwsection4.mouseover(function(){
// //     wwwant.removeClass('^hover');
// //     wwwant.toggleClass('hover04');
// //   });



// }


