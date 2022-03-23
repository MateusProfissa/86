var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function newImage(){
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        imagem1 = Img;
        imagem1.scaleToWidth(700); 
        imagem1.scaleToHeight(510);
        imagem1.set({
            top : 0,
            left : 0
        });
        canvas.add(imagem1);
    });
}

function playSound(){
	x.play();
}
