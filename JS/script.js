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