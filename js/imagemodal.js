
  var modal0 = document.getElementById("myModal0");
  var img0 = document.getElementById("myImg0");
  var modalImg0 = document.getElementById("img0");
  var captionText0 = document.getElementById("caption0");

  var modal1 = document.getElementById("myModal1");
  var img1 = document.getElementById("myImg1");
  var modalImg1 = document.getElementById("img1");
  var captionText1 = document.getElementById("caption1");

  var modal2 = document.getElementById("myModal2");
  var img2 = document.getElementById("myImg2");
  var modalImg2 = document.getElementById("img2");
  var captionText2 = document.getElementById("caption2");

  $('.carousel').carousel({
    interval: 2000
});


img0.onclick = function () {
    modal0.style.display = "block";
    modalImg0.src = this.src;
    captionText0.innerHTML = this.alt;
};

img1.onclick = function () {
      modal1.style.display = "block";
      modalImg1.src = this.src;
      captionText1.innerHTML = this.alt;
};

img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
};

 var span0 = document.getElementsByClassName("close0")[0];
 var span1 = document.getElementsByClassName("close1")[0];
 var span2 = document.getElementsByClassName("close2")[0];

 span0.onclick = function() {
     modal0.style.display = "none";
 };
 span1.onclick = function() {
     modal1.style.display = "none";
 };
 span2.onclick = function() {
    modal2.style.display = "none";
};