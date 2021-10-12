var canvas = new fabric.Canvas('myCanvas');
ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
			top: holeY,
			left: holeX
		});
		canvas.add(holeObject);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
			top: ballY,
			left: ballX
		});
		canvas.add(ballObject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ballX == holeX) && (ballY == holeY)) {
		canvas.remove(ballObject);
		console.log("You have Hit the Goal!!!");
		document.getElementById("hd3").innerHTML = "You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if(ballY>=5){
			ballY=ballY-block_image_height;
			canvas.remove(ballObject);
			new_image();
		}
	}

	function down() {
		if(ballY<=450){
			ballY=ballY+block_image_height;
			canvas.remove(ballObject);
			new_image();
		}	
	}

	function left() {
		if (ballX > 5) {
			ballX=ballX-block_image_width;
			canvas.remove(ballObject);
			new_image();
		}
	}

	function right() {
		if (ballX <= 1050) {
			ballX=ballX+block_image_width;
			canvas.remove(ballObject);
			new_image();
		}
	}

}