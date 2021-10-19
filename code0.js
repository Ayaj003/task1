var btn
btn=document.createElement("button");
btn.innerHTML="CLick Me";
btn.onclick=function (){
    var sourceOfPicture = "background.jpg";
    var img = document.getElementById('pic')
    img.src = "background.jpg";
    img.style.display = "block";
};

btn.ondblclick=function(){
    var img = document.getElementById('pic2');
    img.src = "pic2.jpg";
    img.style.display = "block";
};
btn.addEventListener('click', function (e) {
    if (e.detail == 3) {
        var img = document.getElementById('pic3');
        img.src = "pic3.jpg";
        img.style.display = "block";
    }
});
btn.addEventListener('click', function (a) {
    if (a.detail == 4) {
    var img = document.getElementById('pic4');
     img.src = "pic4.jpg";
     img.style.display = "block";
     var img1 = document.getElementById('pic5');
     img1.src = "pic5.jpg";
     img1.style.display = "block";
     var img2 = document.getElementById('pic6');
     img2.src = "pic6.jpg";
     img2.style.display = "block";
}});
document.body.appendChild(btn);
