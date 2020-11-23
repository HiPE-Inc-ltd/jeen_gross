// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 9000); // Change image every 2 seconds
// }

// //Get the button
// var mybutton = document.getElementById("btn-top");
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   $('html, body').animate({
//     scrollTop: 0
//   }, 'slow');
// }


// $(document).on('click', 'a[href^="#"]', function (e) {
//   // target element id
//   var id = $(this).attr('href');

//   // target element
//   var $id = $(id);
//   if ($id.length === 0) {
//     return;
//   }

//   // prevent standard hash navigation (avoid blinking in IE)
//   e.preventDefault();

//   // top position relative to the document
//   var pos = $id.offset().top;

//   // animated top scrolling
//   $('body, html').animate({
//     scrollTop: pos
//   });
// });



// $("html").easeScroll({
//   frameRate: 60,
//   animationTime: 1000,
//   stepSize: 120,
//   pulseAlgorithm: 1,
//   pulseScale: 8,
//   pulseNormalize: 1,
//   accelerationDelta: 20,
//   accelerationMax: 1,
//   keyboardSupport: true,
//   arrowScroll: 50,
//   touchpadSupport: true,
//   fixedBackground: true
// }); 
//MUKUCHI
var slideConts = document.querySelectorAll(".slideConts"); // スライドで表示させる要素の取得
var slideContsRect = []; // 要素の位置を入れるための配列
var slideContsTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener("resize", function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener("scroll", function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  for (var i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if (windowY > slideContsTop[i] - windowH + remainder) {
      // .showを付与
      slideConts[i].classList.add("show");
    } else {
      // 逆に.showを削除  
      slideConts[i].classList.remove("show");
    }
  }
});