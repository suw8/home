/* === Test your JS CODE below this line === */
    
/** 搜索 */
var searchInput = document.getElementsByClassName("search-input")[0];
searchInput.addEventListener("click",function(){showIt(document.getElementById("search-list"));});
searchInput.addEventListener("focus",function(){showIt(document.getElementById("search-list"));});
searchInput.addEventListener("blur",function(){hideIt(document.getElementById("search-list"));});
// 显示、隐藏
function showIt(item){
    item.style.display = "block";
}
function hideIt(item){
    item.style.display = "none";
}

/** main-course */
var cateTab = document.getElementsByClassName("cate-tab-list")[0].getElementsByTagName("li");
var cateTabContent = document.getElementsByClassName("cate-content-main");
for(var i=0; i<cateTab.length; i++){
    cateTab[i].addEventListener('click',function(){cateTabActive(this);});
}  //给tab-bar每项增添点击事件监听
function cateTabActive(x){
var cateTabId=x.getAttribute("cate-tab-id");  
for(var i=0; i<cateTab.length;i++){
    cateTab[i].classList.remove("cate-tab-active");
    hideIt(cateTabContent[i]);
}  //去除active类, 隐藏tab-content
x.classList.add("cate-tab-active"); //给点击的tab-bar项添加active类
showIt(cateTabContent[cateTabId]); //显示相应的tab-content-item
}

/** 热门培训 */
var tabBar = document.getElementsByClassName("tab-bar-item");
var tabContent = document.getElementsByClassName("tab-content-item");
for(var i=0; i<tabBar.length; i++){
tabBar[i].addEventListener('click',function(){tabActive(this);});
}  //给tab-bar每项增添点击事件监听
function tabActive(x){
var tabId=x.getAttribute("tab-id");  
for(var i=0; i<tabBar.length;i++){
    tabBar[i].classList.remove("active");
    hideIt(tabContent[i]);
}  //去除active类, 隐藏tab-content
x.classList.add("active"); //给点击的tab-bar项添加active类
showIt(tabContent[tabId]); //显示相应的tab-content-item
}

/** banner */
var slideIndex = 1;
var bannerPrev = document.getElementsByClassName("banner-list-prev")[0];
var bannerNext = document.getElementsByClassName("banner-list-next")[0];
var dots = document.getElementById("banner-list-dots").getElementsByTagName("li");
var banner = document.getElementById("banner");
var autoPlay = setInterval(function(){plusSlides(1)},3000); // 自动播放;
bannerPrev.addEventListener("click",function(){plusSlides(-1);}); // 上一张图片
bannerNext.addEventListener("click",function(){plusSlides(1);});  // 下一张图片
// 点击红点显示相应图片
for (var i = 0; i < dots.length; i++){
    dots[i].addEventListener("click",function(){
        var num = Number(this.getElementsByTagName("span")[0].innerHTML);
        currentSlide(num);
    });
} 
// 鼠标悬停，停止自动播放
banner.addEventListener("mouseover",function(){clearInterval(autoPlay);}); 
// 鼠标移出，恢复自动播放
banner.addEventListener("mouseout",function(){autoPlay = setInterval(function(){plusSlides(1)},3000);}); 
showSlides(slideIndex);
// 函数，上一张、下一张
function plusSlides(n) {showSlides(slideIndex += n);} 
// 函数，当前的图片
function currentSlide(n) {showSlides(slideIndex = n);}
// 函数，显示幻灯片
function showSlides(n) {
    var i;
    var slides = document.getElementById("banner-list-slide").getElementsByTagName("li");
    var dots = document.getElementById("banner-list-dots").getElementsByTagName("li");
    if (n > slides.length) {slideIndex = 1} // 从最后一张图回到第一张图;
    if (n < 1) {slideIndex = slides.length} // 从第一张图跳到最后一张图;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.opacity = "0.2";
    } // 隐藏所有图片及红点状态;
    slides[slideIndex-1].style.display = "block"; // 显示图片;
    dots[slideIndex-1].style.opacity = "1"; // 显示红点状态；
}

// 闭包，处理多行文本溢出时显示...
(function(){
    var el = document.getElementsByClassName("item-disc");
    for (var i=0; i<el.length; i++){
        ellipsisFn(el[i]);
    }
})();
function ellipsisFn(element){
    var n = element.clientHeight; //获取当前包裹文本的容器元素的高度
    var s = element.innerHTML; 
    for (var i=0; i<s.length; i++) {
        element.innerHTML = s.substr(0, i); //在for循环中取出长度递增的文段
        if (n < element.scrollHeight) { //当前文本高度<滚动条内的内容的高度
            element.style.overflow = 'hidden'; //确保容器元素的overflow设置为hidden
            element.innerHTML = s.substr(0, i-2) + '...'; //将末尾的三个文字用...取代，同时跳出for循环
            break;
        }
    }
}

/* --- Test your JS CODE above this line --- */
