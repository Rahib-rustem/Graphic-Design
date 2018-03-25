

$(window).resize(function(){
  if ($(window).width() < 766){	 $('.headerLinks').css('display','block')}
});
       
$(window).resize(function(){
  if ($(window).width() > 766){	$('.headerLinks').css('display','flex')}
});
        

  onResize = function() {

    if($(window).width() > 1020) {

      jQuery(function($) {
        function fixDiv() {
          $(window).scroll(function(){

            if ($(window).scrollTop() < 805){
                $('.headerHome').css({ 'color': 'white'});
                $('.headerService').css({'color': '#55B286' })
            }
   
          })
          var box = $('.box');
        
          if ($(window).scrollTop() < 805){
            box.css({ 'position': 'relative',  'top': 'auto'   });
          }

            if ($(window).scrollTop() > 805){
            box.css({'position': 'fixed', 'top': '60px'});
           
            $('.backColor').css({  'background': '#32DB8A' })
            $('.headerFont').css({'color': '#55B286' })
            $('.headerService').css({'color': 'white' })
          }
           
            if ($(window).scrollTop() > 1320)
            box.css({
              'position': 'relative', 'top': '505px'   });
             
        }
        $(window).scroll(fixDiv);
        fixDiv();
      });

    }
  }
  $(document).ready(onResize);
  $(window).resize(onResize);



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> box < 1020...

              onResize = function() {
                if($(window).width() < 1020) {
                 
                 
                  jQuery(function($) {
                    function fixDiv() {
                    
                      
                      var box = $('.box');
                     
                      if ($(window).scrollTop() < 800)
                      box.css({
                        'position': 'relative', 'top': 'auto'  });
                        if ($(window).scrollTop() > 800){
                          box.css({  'position': 'fixed', 'top': '0px' })
                         $('.backColor').css({  'background': '#32DB8A'})
                     
                         $('.headerFont').css({'color': '#55B286' })
                         $('.headerService').css({'color': 'white' })
                      }
                      
                        // if ($(window).scrollTop() > 3400)
                        // box.css({
                        //   'position': 'relative',
                        //   'top': '1724px'
                        
                        // });
                      
                    }
                    $(window).scroll(fixDiv);
                    fixDiv();
                  });
            }
          }
          
            $(document).ready(onResize);
            $(window).resize(onResize);




// box2 > 1268 >>>>>>>>>>>>>>>>>>>>>>>>>>>>
      
               
                onResize = function() {
                  if($(window).width() > 1268) {
                    var box2 = $('.box2');
                   
                    jQuery(function($) {
                      function fixDiv() {
                      
                        var box2 = $('.box2');
                       
                        if ($(window).scrollTop() < 1670)
                          box2.css({  'position': 'relative', 'top': 'auto'  });
                          
                          if ($(window).scrollTop() > 1670){
                             box2.css({ 'position': 'fixed', 'top': '60px'  })
                            $('.backColor').css({ 'background': '#FFBA42'})
                            $('.headerFont').css({'color': '#E3A436'})
                             $('.headerPortfolio').css({'color': 'white' })                     
                         
                        }
                        
                          if ($(window).scrollTop() > 3400)
                          box2.css({  'position': 'relative', 'top': '1724px'});
                        
                        
                      }
                      $(window).scroll(fixDiv);
                      fixDiv();
                    });
              }
            }
            
              $(document).ready(onResize);
              $(window).resize(onResize);




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> box2 < 1268


              onResize = function() {
                if($(window).width() < 1268 && $(window).width() > 1020) {
                     jQuery(function($) {
                  function fixDiv() {
                  
                    var box2 = $('.box2');
                   
                    if ($(window).scrollTop() < 1560)
                    box2.css({'position': 'relative', 'top': 'auto' });
                      
                      if ($(window).scrollTop() > 1560){
                        box2.css({ 'position': 'fixed','top': '60px'})
                        $('.backColor').css({ 'background': '#FFBA42'})
                        $('.headerFont').css({'color': '#E3A436' })
                        $('.headerPortfolio').css({'color': 'white' })       
                    }
                    
                      if ($(window).scrollTop() > 3190)
                      box2.css({ 'position': 'relative', 'top': '1630px'});
                  }
                  $(window).scroll(fixDiv);
                  fixDiv();
                });
            }
             
              }
              $(document).ready(onResize);
              $(window).resize(onResize);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. box2 < 1020...





              onResize = function() {
                if($(window).width() < 1020) {
                     jQuery(function($) {
                  function fixDiv() {
                  
                    var box2 = $('.box2');
                   
                    if ($(window).scrollTop() < 1600)
                    box2.css({ 'position': 'relative','top': 'auto'});
                     
                      if ($(window).scrollTop() > 1600){
                        box2.css({ 'position': 'fixed', 'top': '0px'})    
                       
                      $('.backColor').css({'background': '#FFBA42', 'transition-duration': '0.1s'})     
                      $('.headerFont').css({'color': '#E3A436' })
                      $('.headerPortfolio').css({'color': 'white' })   
                      
                     
                    }
                    
                      // if ($(window).scrollTop() > 3600)
                      // box2.css({
                      //   'position': 'relative',
                      //   'top': '500px',
                        
                        
                      // });
                    
                  }
                  $(window).scroll(fixDiv);
                  fixDiv();
                });

            }
             
              }
              $(document).ready(onResize);
              $(window).resize(onResize);




// block 3  > 1268>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.



onResize = function() {
  if($(window).width() > 1268 ) {
       jQuery(function($) {
    function fixDiv() {
    
      var box3 = $('.box3');
     
      if ($(window).scrollTop() < 3760)
            box3.css({'position': 'relative','top': 'auto'});
        
        if ($(window).scrollTop() > 3760){
            box3.css({'position': 'fixed','top': '60px'})  
            $('.backColor').css({ 'background': '#E64B77' })
           $('.headerFont').css({'color': '#B24564' })
           $('.headerAbout').css({'color': 'white' })      
       
      }
        if ($(window).scrollTop() > 4890)
        box3.css({ 'position': 'relative', 'top': '1122px'});
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });
}

}
$(document).ready(onResize);
$(window).resize(onResize);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> box3 < 1268





onResize = function() {
  if($(window).width() < 1268  && $(window).width() > 1020) {
       jQuery(function($) {
    function fixDiv() {
    
      var box3 = $('.box3');
     
      if ($(window).scrollTop() < 3430)
      box3.css({
          'position': 'relative','top': 'auto'});
       
        if ($(window).scrollTop() > 3430){
          box3.css({ 'position': 'fixed','top': '60px'})    
          $('.backColor').css({'background': '#E64B77'})
           $('.headerFont').css({'color': '#B24564' })
           $('.headerAbout').css({'color': 'white' })  
      }
      
        if ($(window).scrollTop() > 4540)
        box3.css({ 'position': 'relative', 'top': '1088px'});
         
        
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> box3 < 1020



onResize = function() {
  if($(window).width() < 1020 ) {
       jQuery(function($) {
    function fixDiv() {
      var box3 = $('.box3');
     
      if ($(window).scrollTop() < 3600)
      box3.css({
          'position': 'relative', 'top': 'auto' });
       
        if ($(window).scrollTop() > 3600){
          box3.css({'position': 'fixed', 'top': '0px'})
        $('.backColor').css({ 'background': '#E64B77'})
        $('.headerFont').css({'color': '#B24564' })
        $('.headerAbout').css({'color': 'white' })  
 
      }
      
        // if ($(window).scrollTop() > 4920)
        // box3.css({
        //   'position': 'relative',
        //   'top': '815px',
          
        // });
      
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);



//block 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // box 4 > 1268 >>>>>>>>>>>>>>>>>>>>>>


$(window).on('load', function () {
 
  
  onResize = function() {
      if($(window).width() > 1268 ) {
           jQuery(function($) {
        function fixDiv() {
        
          var box4 = $('.box4');
          if ($(window).scrollTop() < 5240)
          box4.css({ 'position': 'relative', 'top': 'auto' });
             
            if ($(window).scrollTop() > 5240){
              box4.css({'position': 'fixed', 'top': '60px'})
              $('.backColor').css({'background': '#32DB8A'})
               $('.headerFont').css({'color': '#54B185' })
               $('.headerNews').css({'color': 'white' })   
          }
          
            if ($(window).scrollTop() > 5915)
            box4.css({'position': 'relative', 'top': '634px'});
              
        }
        $(window).scroll(fixDiv);
        fixDiv();
      });
    
    }
    
    }
    $(document).ready(onResize);
    $(window).resize(onResize);
    
    

});


 

//>>>>> box 4 < 1268 > 1020 >>>>>>>>>>>>>>>>>>>>>>>>>



onResize = function() {
  if($(window).width() < 1268 && $(window).width() > 1020) {
       jQuery(function($) {
    function fixDiv() {
    
      var box4 = $('.box4');
     
      if ($(window).scrollTop() < 4785)
          box4.css({'position': 'relative', 'top': 'auto'});
        
        if ($(window).scrollTop() > 4785){
            box4.css({ 'position': 'fixed', 'top': '60px'})
            $('.backColor').css({ 'background': '#32DB8A'})
           $('.headerFont').css({'color': '#54B185' })
           $('.headerNews').css({'color': 'white' })   
      }
      
        if ($(window).scrollTop() > 5679)
        box4.css({'position': 'relative','top': '880.5px'});
         
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);


//>>>>>>>>>>>> box4 < 1020 >>>>..


onResize = function() {
  if($(window).width()  < 1020) {
       jQuery(function($) {
    function fixDiv() {
    
      var box4 = $('.box4');
     
      if ($(window).scrollTop() < 5115)
      box4.css({ 'position': 'relative', 'top': 'auto'});
         
        if ($(window).scrollTop() > 5115){
          box4.css({'position': 'fixed','top': '0px'})
        $('.backColor').css({ 'background': '#32DB8A', 'transition-duration':'0.1s'}) 
        $('.headerFont').css({'color': '#54B185' })
        $('.headerNews').css({'color': 'white' })   
      }
      
        if ($(window).scrollTop() > 6860)
        box4.css({
          'position': 'relative',
          'top': '0px',
          // 'top': '870.5px',
          
        });
      
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);




//>>>>> box 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>> box 5 > 1268

$(window).on('load', function () {
onResize = function() {
  if($(window).width()  > 1268) {
       jQuery(function($) {
    function fixDiv() {
    
      var box5 = $('.box5');
      if ($(window).scrollTop() < 6820)
      box5.css({ 'position': 'relative', 'top': 'auto'});
         
        if ($(window).scrollTop() > 6820){
            box5.css({'position': 'fixed','top': '60px' })
            $('.backColor').css({'background': '#FFBA42', 'transition-duration':'0.1s' }) 
           $('.headerFont').css({'color': '#E3A436' })
           $('.headerVideo').css({'color': 'white' })   
      }
      
        if ($(window).scrollTop() > 7630)
        box5.css({ 'position': 'relative', 'top': '828.5px'  });
        
      
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);
});


// //>>> box 5 < 1268 ,   > 1020


  onResize = function() {
  if($(window).width()  < 1268 && $(window).width()  > 1020) {
       jQuery(function($) {
    function fixDiv() {
    
      var box5 = $('.box5');
     
      if ($(window).scrollTop() < 6420)
      box5.css({
          'position': 'relative','top': 'auto' });
        
        if ($(window).scrollTop() > 6420){
          box5.css({
          'position': 'fixed','top': '60px'})
         $('.backColor').css({'background': '#FFBA42'})
         $('.headerFont').css({'color': '#E3A436' })
         $('.headerVideo').css({'color': 'white' })  
      }
      
        if ($(window).scrollTop() > 7260)
        box5.css({
          'position': 'relative', 'top': '815px'});
         
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);


//>>> box 5 < 1020


onResize = function() {
  if($(window).width()  < 1020)  {
       jQuery(function($) {
    function fixDiv() {
    
      var box5 = $('.box5');
     
      if ($(window).scrollTop() < 6770)
           box5.css({ 'position': 'relative', 'top': 'auto' });
         
        if ($(window).scrollTop() > 6770){
          box5.css({'position': 'fixed', 'top': '0px'})
          $('.backColor').css({'background': '#FFBA42'})
          $('.headerFont').css({'color': '#E3A436' })
          $('.headerVideo').css({'color': 'white' })  
      }
      
        if ($(window).scrollTop() > 7960)
          box5.css({'position': 'relative', 'top': '815px'});
      
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);


// >>>>>>>>>>>>>>>>>>> block 6 ...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//box 6 > 1268 >>>>>>>>>>>>>>>>>>>>>
$(window).on('load', function () {
onResize = function() {
  if($(window).width()  > 1268)  {
       jQuery(function($) {
    function fixDiv() {
    
      var box6 = $('.box6');
     
      if ($(window).scrollTop() < 8490)
          box6.css({  'position': 'relative', 'top': 'auto' });
        
        if ($(window).scrollTop() > 8490){
             box6.css({'position': 'fixed', 'top': '60px'})
            $('.backColor').css({'background': '#32DB8A'})
            $('.headerFont').css({'color': '#55B286' })
            $('.headerScillis').css({'color': 'white' })   
           
      }
      
        if ($(window).scrollTop() > 9170)
            box6.css({'position': 'relative','top': '620px'});
        
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);
})





//box 6 < 1268 > 1020>>>>>>>>>>>>>>>>>>>>>

onResize = function() {
  if($(window).width()  < 1268 && $(window).width()  > 1020)  {
       jQuery(function($) {
    function fixDiv() {
    
      var box6 = $('.box6');
     
      if ($(window).scrollTop() < 8000)
            box6.css({'position': 'relative','top': 'auto'});
       
        if ($(window).scrollTop() > 8000){
            box6.css({'position': 'fixed', 'top': '60px' })
            $('.backColor').css({ 'background': '#32DB8A'})
            $('.headerFont').css({'color': '#55B286' })
            $('.headerScillis').css({'color': 'white' })   
      }
      
        if ($(window).scrollTop() > 8650)
          box6.css({ 'position': 'relative', 'top': '617px' });
      
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);




//box 6 < 1020>>>>>>>>>>>>>>>>>>>>>

onResize = function() {
  if($(window).width()  < 1020)  {
       jQuery(function($) {
    function fixDiv() {
    
      var box6 = $('.box6');
     
      if ($(window).scrollTop() < 8590)
         box6.css({ 'position': 'relative', 'top': 'auto'});
       
        if ($(window).scrollTop() > 8590){
          box6.css({ 'position': 'fixed', 'top': '0px'})
          $('.backColor').css({'background': '#32DB8A'})
          $('.headerFont').css({'color': '#55B286' })
          $('.headerScillis').css({'color': 'white' })   
      }
      
        if ($(window).scrollTop() > 9950)
        box6.css({ 'position': 'relative','top': '60px'});
          
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });

}

}
$(document).ready(onResize);
$(window).resize(onResize);





// box 7 > 1268 >>>>>>>>>>>>>>>>>>>>>>>>>>



$(window).on('load', function () {
onResize = function() {
  if($(window).width() > 1268) {
    var box7 = $('.box7');
   
    jQuery(function($) {
      function fixDiv() {
      
        if ($(window).scrollTop() < 9530)
          box7.css({ 'position': 'relative', 'top': 'auto'});
         
          if ($(window).scrollTop() > 9530){
              box7.css({ 'position': 'fixed','top': '60px'})
              $('.backColor').css({ 'background': '#E64B77'})
             $('.headerFont').css({'color': '#B24564' })
             $('.headerContact').css({'color': 'white' })   
        }
        
          if ($(window).scrollTop() > 10370)
          box7.css({
            'position': 'relative',
            'top': '850px',
          
          });
        
      }
      $(window).scroll(fixDiv);
      fixDiv();
    });
}
}

$(document).ready(onResize);
$(window).resize(onResize);
});






// box 7 < 1268  > 1020 >>>>>>>>>>>>>>>>>>>>>>>>>>





$(window).on('load', function () {
  onResize = function() {
    if($(window).width() < 1268 && $(window).width() > 1020) {
      var box7 = $('.box7');
     
      jQuery(function($) {
        function fixDiv() {
        
          var box7 = $('.box7');
          if ($(window).scrollTop() < 8850)
            box7.css({'position': 'relative','top': 'auto'});
          
            if ($(window).scrollTop() > 8850){
                box7.css({ 'position': 'fixed','top': '60px'})
             
              $('.backColor').css({'background': '#E64B77'})
               $('.headerFont').css({'color': '#B24564' })
               $('.headerContact').css({'color': 'white' })   
          }
          
            if ($(window).scrollTop() > 9710)
               box7.css({ 'position': 'relative', 'top': '851px'});
             
        }
        $(window).scroll(fixDiv);
        fixDiv();
      });
  }
  }
  
  $(document).ready(onResize);
  $(window).resize(onResize);
  });
  
  
  //box 7 < 1020 >>>>>>>>>>>>>>>>>>>>>>>>>>
  
  
  $(window).on('load', function () {
    onResize = function() {
      if($(window).width() < 1020) {
        var box7 = $('.box7');
       
        jQuery(function($) {
          function fixDiv() {
          
            var box7 = $('.box7');
           
            if ($(window).scrollTop() < 9290)
                box7.css({ 'position': 'relative', 'top': 'auto' });
             
              if ($(window).scrollTop() > 9290){
                  box7.css({ 'position': 'fixed', 'top': '-160px' })
                  $('.backColor').css({'background': '#E64B77','transition-duration':'0.1s'})
                  $('.headerFont').css({'color': '#B24564' })
                  $('.headerContact').css({'color': 'white' })   
            
            }
            
              // if ($(window).scrollTop() > 10200)
              // box7.css({
              //   'position': 'relative',
              //   'top': '0px',
              
              // });
            
          }
          $(window).scroll(fixDiv);
          fixDiv();
        });
    }
    }
    
    $(document).ready(onResize);
    $(window).resize(onResize);
    });
    
    
    
    
    
  




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> slider

              var currentIndex = 0,
              items = $('.containerr div'),
              itemLen = items.length;
            
            function cycleItems() {
              var item = $('.containerr div').eq(currentIndex);
             
              items.css(  'display','none'  )
            
              item.css( 'display','inline-block'   );
              
            }
            
            var autoSlide = setInterval(function() {
              currentIndex += 1;
              if (currentIndex > itemLen - 1) {
                currentIndex = 0;
              }
              cycleItems();
            }, 30000);
            
            $('.next').click(function() {
              clearInterval(autoSlide);
              currentIndex += 1;
              if (currentIndex > itemLen - 1) {
                currentIndex = 0;
              }
              cycleItems();
            });


            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> slider2
          
             

            var index = 0,
            slides = $('.slider .slide'),
            slidesInf = $('.sliderInf .slideInf'),
            slideLen = slides.length;
            slideInfLen = slidesInf.length;
          
          function styleItems() {
            var slide = $('.slider .slide').eq(index);
            var slideInf = $('.sliderInf .slideInf').eq(index);
            slides.css(  'display','none'  )
            slidesInf.css(  'display','none'  )
            slide.css( 'display','inline-block'   );
            slideInf.css( 'display','inline-block'   );
          }
          
          var autoSlide = setInterval(function() {
            index += 1;
            if (index > slideLen - 1) {
              index = 0;
            }
            styleItems();
          }, 30000);
          
          $('.change').click(function() {
            clearInterval(autoSlide);
            index += 1;
            if (index > slideLen - 1) {
              index = 0;
            }
            styleItems();
          });



          //............>>>>>>>>>>>>>>>>>>>>>>> text Slider



          var currenIndex = 0,
          contents = $('.textSlider .slide'),
          contentLen = contents.length;
        
          function textItems() {
          var content = $('.textSlider .slide').eq(currenIndex);
         
          contents.css(  'display','none'  )
        
          content.css( 'display','inline-block'   );
          
        }
        
        var autoSlide = setInterval(function() {
          currenIndex += 1;
          if (currenIndex > contentsLen - 1) {
            currenIndex = 0;
          }
          textItems();
        }, 60000);
        
        $('.textSliderButton').click(function() {
          clearInterval(autoSlide);
          currenIndex += 1;
          if (currenIndex > contentLen - 1) {
            currenIndex = 0;
          }
          textItems();
        });




// >>> form >>>>>>>>>>>>>>>>>>>>

$( document ).ready(function() {
 
 let message = $('.message');
 let minMax = $('.minMax');
 message.focus(function() {
  message.css({'height':'173px'})
  minMax.css({'height':'520px'})
});
message.blur(function() {
  message.css({'height':'47px'})
  minMax.css({'height':'400px','transition-duration':'0.5s'})
});

});


      //>>>>>>>>>>>>>> header >>>>>>>>>>>>>>>
     
      
        
      $(document).ready(function(){
       
          if ($(window).scrollTop() < 800){
            $('.headerFont').css({ 'color': 'white' });
            $('.headerMobileButton').css({ 'color': 'white' });
          }
       
    });
  
    
  


    $(".headerHome").click(function() {
      $("html, body").animate({ scrollTop:  100 }, "slow");
      return false;
 });


      $(".headerService").click(function() {
        $("html, body").animate({ scrollTop: 805 }, "slow");
        return false;
   });
   $(".headerPortfolio").click(function() {
    $("html, body").animate({ scrollTop: 1695 }, "slow");
    return false;
});
$(".headerAbout").click(function() {
  $("html, body").animate({ scrollTop: 3770 }, "slow");
  return false;
});
$(".headerNews").click(function() {
  $("html, body").animate({ scrollTop: 5260 }, "slow");
  return false;
});
$(".headerVideo").click(function() {
  $("html, body").animate({ scrollTop: 6825 }, "slow");
  return false;
});
$(".headerScillis").click(function() {
  $("html, body").animate({ scrollTop: 8532 }, "slow");
  return false;
});
$(".headerContact").click(function() {
  $("html, body").animate({ scrollTop:  9531 }, "slow");
  return false;
});




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> main slider



$(function(){
  var windowWidth = $( window ).width();
  var mainItems = $('#mainItems');
  var mainItem = $('.mainItem');
  var mainItemsChild = mainItems.find('.mainItem');
  var clickCount = 0;
  var canClick = true;
  var mainItemWidth = $('.mainItem').width();
  var divCount = 4;
   
if(windowWidth < 650){
  divCount = 3;
}

  mainItem.width( windowWidth/divCount)
  contentWidth = mainItems.find('.mainItem:first').width()+1; 
   
console.log(contentWidth)
  mainItems.width(contentWidth*mainItemsChild.length);


  refreshChildPosition();

  $('.btnNext').click(function(){
      if(canClick){
          canClick = false;
          clickCount++;

         
          mainItems.stop(false, true).animate({
              left : '-='+contentWidth
          },300, function(){
            
              lastmainItem = mainItems.find('.mainItem:first');
              lastmainItem.remove().appendTo(mainItems);
              lastmainItem.css('left', ((mainItemsChild.length-1)*(contentWidth))+(clickCount*contentWidth));
              canClick = true;
          });
      }
  });

  $('.btnPrevious').click(function(){
      if(canClick){
          canClick = false;
          clickCount--;
        
          lastmainItem = mainItems.find('.mainItem:last');
          lastmainItem.remove().prependTo(mainItems);

          lastmainItem.css('left', contentWidth*clickCount);             
         
          mainItems.finish(true).animate({
              left: '+='+contentWidth
          },300, function(){
              canClick = true;
          });
      }
  });

  function refreshChildPosition(){
      mainItemsChild.each(function(){
          $(this).css('left', contentWidth*mainItemsChild.index($(this)));
      });
  }
});


