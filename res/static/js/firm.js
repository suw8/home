layui.define(['jquery', 'element', 'carousel', 'laypage'], function(exports){
  var $ = layui.jquery
  ,element = layui.element
  ,carousel = layui.carousel
  ,laypage = layui.laypage;

  //轮播渲染
  /*
  carousel.render({
    elem: '#banner'
    ,width: '100%'
    ,height: '646px'
    ,arrow: 'always'
  });
  */
  //高度自适应解决办法
  var ratio = 1920/898;//图片比例
  //获取浏览器宽度
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  layui.use('carousel', function(){
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
         elem: '#banner'
         ,width: '100%' //设置容器宽度
         ,height: (winWidth/ratio).toString()+"px"  //按比例和浏览器可视页面宽度来获取高度
         ,arrow: 'always' //始终显示箭头
         //,anim: 'updown' //切换动画方式
      });
  });
  // //窗口变化是重新加载
  // $(window).resize(function () {
  // // setBanner();
  // window.location.reload()
  // })

  //滚动监听
  $(window).scroll(function() {
    var scr=$(document).scrollTop();
    scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
  });

  //轮播文字
  $(function(){
    $('.banner').children('.title').addClass('active');
  })

  //导航切换
  var btn = $('.nav').find('.nav-list').children('button')
  ,spa = btn.children('span')
  ,ul = $('.nav').find('.nav-list').children('.layui-nav');
  btn.on('click', function(){
    if(!$(spa[0]).hasClass('spa1')){
      spa[0].className = 'spa1';
      spa[1].style.display = 'none';
      spa[2].className = 'spa3';
      $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
    }else{
      spa[0].className = '';
      spa[1].style.display = 'block';
      spa[2].className = '';
      $('.nav')[0].style.height = 80 + 'px';
    }
  });

  exports('firm', {}); 
});