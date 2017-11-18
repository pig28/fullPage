$(function () {

  // 获取屏幕的高度
  var screenHeight = $(window).height();  // clientWidth
  var flag1 = false;
  var flag2 = false;
  var flag3 = false;
  var flag4 = false;
  $(".next").click(function () {
    $.fn.fullpage.moveSectionDown();
  });
  $('#fullpage').fullpage({  
    //显示侧边导航
    navigation: true,
    // scrollingSpeed : 1000,//滚动时间
    afterLoad: function (anchorLink, index) {
      if (index == 2 && flag1 == false) {
        flag1 = true;
        //滚动到第二屏，开始执行动画
        $(".two-search-wrap").show().animate({
          marginLeft: 0
        }, 1000, function () {
          //动画执行之后，让沙发大图出来
          $(".two-words").fadeIn(1000, function () {
            $(".two-search-wrap").hide();
            $(".two-search-copy").show().animate({
              marginLeft: 200,
              bottom: 450,
              width: 150
            }, 1000);
            //给图片设置show的时候，一定要记住给图片设置宽高，不然会没有动画效果
            $(".two-sofa").show(1000);
            $(".next").fadeIn();
          });
        });
      }
      if (index == 7) {
        $(".seven-star").fadeIn(600, function () {
          $(".seven-good").fadeIn(600);
          $(".next").fadeIn();
        })
      }
      if (index == 8) {
        $(".eight-go").mouseenter(function () {
          $(".eight-go").hide();
          $(".eight-go-gif").show();
        });
        $(".eight-go").mouseleave(function () {
          $(".eight-go").show();
          $(".eight-go-gif").hide()
        });
        $(document).mousemove(function (event) {
          var x = event.clientX;
          var y = event.clientY + 10;
          if (y <= screenHeight - $(".eight-hand").height()) {
            y = screenHeight - $(".eight-hand").height();
          }
          $(".eight-hand").css({
            top: y,
            left: x
          })
        });
        $(".eight-again").click(function(){
          $.fn.fullpage.moveTo(1);
          $("img,.move").attr("style","");
          flag1 = false;
          flag2 = false;
          flag3 = false;
          flag4 = false;
        })
      }
    },
    onLeave: function (index, nextIndex, direction) {
      $('.next').fadeOut();
      // alert('我现在在' + index + '屏，我即将去往' + nextIndex + '屏');
      if (index == 2 && nextIndex == 3 && flag3 == false) {
        flag3 = true;
        $(".cover").show();
        $(".two-only-sofa").show().animate({
          bottom: -(screenHeight - 250),
          width: 207,
          marginLeft: -125
        }, 1000, function () {
          $(".main-btn-white,.main-size-white").fadeIn();
          $(".next").fadeIn();
        });
      }
      if (index == 3 && nextIndex == 4 && flag2 == false) {
        flag2 = true;
        $(".two-only-sofa").hide();
        $(".three-rotate-sofa").show().animate({
          bottom: -(screenHeight - 240),
          marginLeft: -145
        }, 1000, 'easeOutBounce', function () {
          $(this).hide();
          $(".four-rotate-sofa").show();
          $(".four-car-wrap").animate({
            left: '100%'
          }, 1500, 'easeInElastic', function () {
            $(this).hide();
            $(".four-add,.four-txt,.four-words-color").fadeIn(1000);
            $(".next").fadeIn();
          })
        })
      }
      if (index == 4 && nextIndex == 5 && flag4 == false) {
        flag4 = true;
        $(".five-hand").animate({
          bottom: 0
        }, 500, function () {
          $(".five-mouse-active").show(500, function () {
            $(".five-order").animate({
              bottom: 380
            }, function () {
              $(".five-sofa").animate({
                bottom: 80
              },function(){
                $(".next").fadeIn();
              })
            })
          })
        })
      }
      if (index == 5 && nextIndex == 6) {
        $(".five-sofa").animate({
          bottom: -(screenHeight - 494),
          width: 50,
          marginLeft: -200
        }, 500, function () {
          $(this).hide()
        });
        $(".six-box").animate({
          marginLeft: -200
        }, 500, function () {
          $(this).animate({
            bottom: 30
          }, function () {
            $(".six-add").fadeIn();
            $(".section6").animate({
              backgroundPositionX: '100%'
            }, 2000, function () {
              //快递员出现
              $(".six-man").animate({
                bottom: 117,
                width: 252
              }, 500, function () {
                $('.six-man').animate({
                  transform: 'none',
                  right: 568,
                  marginRight: 0
                }, 500, function () {
                  $(".six-door").fadeIn(500, function () {
                    $(".six-woman").fadeIn(600, function () {
                      $(this).animate({
                        right: 330
                      }, 500, function () {
                        $(".six-get").fadeIn(400, function () {
                          $(".six-words").show().animate({
                            marginLeft: 10
                          }, 500, 'easeOutBounce',function(){
                            $(".next").fadeIn();
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      }
    }
  });
});