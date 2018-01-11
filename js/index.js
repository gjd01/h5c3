/**
 * Created by Administrator on 2017/11/4 0004.
 */
$(function(){
    var k=window.innerHeight;
    $('.next').fadeIn();
    $('#fullpage').fullpage({
        navigation: true,

        afterLoad:function(d,index){
            if(index==1){
                $('.next').fadeIn();
            }
            if(index==2){
                $('.next').fadeOut();
                $('.search').show().animate({'right':380},1000,function(){
                    $('.search-words').animate({'opacity':1},500,function(){
                        $('.search').hide();
                        $('.search-02-1').show().animate({'bottom':450,'height':30,'right':250},1000);
                        $('.goods-441-218').show().animate({'height':218},1000,function(){
                            $('.shirt-02').show();
                            $('.cover').show();
                            $('.next').fadeIn();
                        })
                    })
                })
            }
            if(index==5){
                $('.next').fadeOut();
                $('.hand-05').animate({'bottom':0},1000,function(){
                    $('.mouse-05-a').animate({'opacity':1},1000,function(){
                        $('.t1f-05').show().animate({'bottom':100},1000,function(){
                            $('.order-05').animate({'bottom':360},500,function(){
                                $('.words-05').addClass('rotate');
                                $('.next').fadeIn();
                            });
                        });
                    });
                })
            }

            if(index==7){
                $('.next').fadeOut();
                $('.star').animate({'width':221},1000,function(){
                     $('.good').animate({'width':72},1000)
                    $('.next').fadeIn();
                })
            }


        },onLeave: function(index,nextindex,d){
            if(index==2&&nextindex==3){
                $('.next').fadeOut();
                $('.shirt-02').animate({'bottom':-(k-250),'width':207,'left':260},2000,function(){
                    $('.mainImg1').animate({'opacity':1},500,function(){
                        $('.btn').animate({'opacity':1},500)
                        $('.next').fadeIn();
                    });
                })
            }

            if(index==3&&nextindex==4) {
                $('.next').fadeOut();
                $('.shirt-02').hide();
                $('.t1f3').show().animate({'bottom':-(k-200),'left':'-30%'},1000,function(){
                    $(this).hide();
                    $('.t1f4').show();
                    $('.car').animate({'left':'150%'},4000,function(){
                        $('.note').animate({'opacity':1},500,function(){
                            $('.notet1').animate({'opacity':1},500,function(){
                                $('.word4-a').show();
                                $('.next').fadeIn();
                            });
                        })
                    });
                })
            }

            if(index==5&&nextindex==6){
                $('.next').fadeOut();
                $('.t1f-05').animate({'bottom':-(k-500),'height':68},1000,function(){
                    $(this).hide();
                });
                $('.box-06').animate({'left':'28%'},1000,function(){
                    $(this).animate({'bottom':30,'left':'43%'},1000,function(){
                        $('.pop-06').show();
                        $('.words-06-a').animate({'opacity':1},500,function(){
                            $('.section6').animate({'backgroundPositionX':'100%'},2000,function(){
                                $('.boy').animate({'height':305,'bottom':114},1000,function(){
                                    $(this).animate({'left':'53%'},500,function(){
                                        $('.door').animate({'opacity':1},500,function(){
                                            $('.girl').animate({'opacity':1},500,function(){
                                                $(this).animate({'left':'60%','height':304},500,function(){
                                                    $('.pop-07').show();
                                                    $('.next').fadeIn();
                                                });
                                            })
                                        });
                                    });
                                });
                            })
                        })
                    });
                });
            }
            $(document).mousemove(function(e){
                var x= e.pageX-$('.hand8').width()/2;
                var y= e.pageY+10;
                if(y<228){
                    y=228;
                }
                $('.hand8').css({'left':x,'top':y})
            });

            $('.btn8').hover(function(){
                $('.btn8-a').toggle();
            });
            $('.again').click(function(){
                $.fn.fullpage.moveTo(1);
                $('img, .move').attr('style','');
            });

        }


    });
})