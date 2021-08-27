// Canvas variable here!
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images here!
ball_x = 0;
ball_y = 0;
hole_x = 400;
hole_y = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// Wrote code to Upload golf image on the canvas here!
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_x,
			left:hole_y
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	// Wrote code to Upload ball image on canvas here!
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_x,
			left:ball_y
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. Done this here!*/
	if ((ball_x == hole_x)&&(ball_y == hole_y)) 
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have HIT the GOAL!!!";
		document.getElementById("myCanvas").style.borderColor = "lawnGreen";
	}
	else 
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_x > 5)
		{
		// Wrote a code to move ball upward here!
		ball_x = ball_x - block_image_height;
		console.log("Block image height = " + block_image_height);
		console.log("When up key is pressed : X = " + ball_x + "| Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
		}
	}

	function down()
	{
		if (ball_x <= 450) {
		    // Wrote a code to move ball downward here!
			ball_x = ball_x + block_image_height;
			console.log("Block image height = " + block_image_height);
			console.log("When down key is pressed : X = " + ball_x + "| Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_y > 5)
		{
			// Wrote a code to move ball left side here!
			ball_y = ball_y - block_image_width;
			console.log("Block image width = " + block_image_height);
			console.log("When left key is pressed : X = " + ball_x + "| Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_y <=1050)
		{
			// Wrote a code to move ball right side here!
			ball_y = ball_y + block_image_width;
			console.log("Block image width = " + block_image_width);
			console.log("When right key is pressed : X = " + ball_x + "| Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
			
		}
	}
	
}
