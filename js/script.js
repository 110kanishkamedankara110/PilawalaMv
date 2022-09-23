function show(x) {
    document.getElementById(x).scrollIntoView();
}
var i = 0;
var img0 = "image/car1.jpg";
var img1 = "image/car2.jpg";
var img2 = "image/car3.jpg";
var img3 = "image/car4.jpg";
var img4 = "image/car5.jpg";
var img5 = "image/main.jpg";
var img = new Array();

img.push(img0, img1, img2, img3, img4, img5, img5);
var noOfImg = img.length;

function car() {

    setInterval(carosel, 6000);

}

function carosel() {



    // alert(img[i]);
    if (i < noOfImg) {
        document.getElementById("home").setAttribute("style", "background-image:url('" + img[i] + "')");
        document.getElementById("mt").innerHTML = "";
        i += 1;
    } else {
        i = 0;
    }




}