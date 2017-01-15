(function() {
var slide = document.querySelector('.slide'),
    img = document.getElementsByTagName('img'),
    frame = 0;

slide.addEventListener('click', move);
function move(){
    if (frame<img.length-1) {
        img[frame].style.display = "none";
        img[frame+=1].style.display = "block";
    } else if (frame == img.length-1) {
        img[frame].style.display = "none";
        frame = 0;
        img[frame].style.display = "block";
    }
}
})();
