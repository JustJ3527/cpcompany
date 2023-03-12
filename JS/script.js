$(document).ready(function(){
    $(document).mousemove(function(){
        if($("#img-1:hover").length != 0){
            document.getElementById("img-1").style.filter = "grayscale(0)";
            document.getElementById("img-2").style.filter = "grayscale(1)";
            document.getElementById("img-3").style.filter = "grayscale(1)";
            document.getElementById("img-1").style.scale = "1.1";
            document.getElementById("img-2").style.scale = "none";
            document.getElementById("img-3").style.scale = "none";
        }else{
            if($("#img-2:hover").length != 0){
            document.getElementById("img-1").style.filter = "grayscale(1)";
            document.getElementById("img-2").style.filter = "grayscale(0)";
            document.getElementById("img-3").style.filter = "grayscale(1)";
            document.getElementById("img-1").style.scale = "none";
            document.getElementById("img-2").style.scale = "1.1";
            document.getElementById("img-3").style.scale = "none";
            }else{
                if($("#img-3:hover").length != 0){
                document.getElementById("img-1").style.filter = "grayscale(1)";
                document.getElementById("img-2").style.filter = "grayscale(1)";
                document.getElementById("img-3").style.filter = "grayscale(0)";
                document.getElementById("img-1").style.scale = "none";
                document.getElementById("img-2").style.scale = "none";
                document.getElementById("img-3").style.scale = "1.1";
                }else{
                    document.getElementById("img-1").style.filter = "grayscale(0)";
                    document.getElementById("img-2").style.filter = "grayscale(0)";
                    document.getElementById("img-3").style.filter = "grayscale(0)";
                    document.getElementById("img-1").style.scale = "none";
                    document.getElementById("img-2").style.scale = "none";
                    document.getElementById("img-3").style.scale = "none";
                }
            }
        }
    });
});

function lightMode() {
    document.documentElement.style.setProperty('--darkColor', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--lightColor', 'rgb(11, 11, 11)');
    document.documentElement.style.setProperty('--lightSecondaryColor', 'rgb(117, 171, 212)');
}

function darkMode() {
    document.documentElement.style.setProperty('--lightColor', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--darkColor', 'rgb(11, 11, 11)');
    document.documentElement.style.setProperty('--lightSecondaryColor', 'rgb(117, 171, 212)');
}

var mode = 0; //dark
var logo = document.getElementById("logo");

function changeMode() {
    if(mode == 0){
        lightMode();
        document.getElementById("logo").src="./assets/logo_black.png";
        mode = 1;
    }else if(mode == 1){
        darkMode();
        document.getElementById("logo").src="./assets/logo.png";
        mode = 0;
    }
}