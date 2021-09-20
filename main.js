var canvas=new fabric.Canvas("myCanvas");
var golfball_y= 30;
var golfball_x=30;
var hole_x= 880;
var hole_y= 430;
var hh=100;
var hw= 100;
var gb_obj="";
var hole_obj= "";
var gh=50;
var gw=50;

function golf_hole_update()
{   fabric.Image.fromURL("golfhole.png", function(Img){
    hole_obj = Img;
    hole_obj.scaleToWidth(hw); 
    hole_obj.scaleToHeight(hh); 
    hole_obj.set({ 
    top:hole_y,
    left:hole_x
    });
    canvas.add(hole_obj); 
});
}
function new_image()
{
    fabric.Image.fromURL("gball.png", function(Img){
        gb_obj=Img;

        gb_obj.scaleToWidth(gh);
        gb_obj.scaleToHeight(gw);
        gb_obj.set({
            top:golfball_y,
            left:golfball_x
        });
        canvas.add(gb_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((golfball_x==hole_x)&&(golfball_y==hole_y)){
	document.getElementById("hd2").innerHTML="Yayy!You have hit the goal!!!";
	document.getElementById("myCanvas").style.borderColor="darkblue";
	canvas.remove(gb_obj);
}

	else{
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
}
	
	function up()
{
    if(golfball_y>=0)
    {
        golfball_y = golfball_y - gh;
        console.log("Golf Ball Height =" + gh);
        console.log("When Up arrow is pressed, x=" + golfball_x + "y=" + golfball_y);
        canvas.remove(gb_obj);
        new_image();    }
}
function down() 
 {  
    if(golfball_y<=530)
    {
        golfball_y=golfball_y+gh;
        console.log("Golf Ball Height=" + gh);
        console.log("When Down arrow is pressed, x=" + golfball_x + "y="+golfball_y);
        canvas.remove(gb_obj);
        new_image();
    }
 }
 function right()
 {
    if(golfball_x<=1100)
    {
        golfball_x=golfball_x+gw;
        console.log("Golf Ball Width="+gw);
        console.log("When Right arrow is presses="+golfball_x+"y="+golfball_y);
        canvas.remove(gb_obj);
        new_image();
    }
 }

 function left()
 {
    if(golfball_x>0)
    {
        golfball_x=golfball_x-gw;
        console.log("Golf Ball Width="+gw);
        console.log("When Left arrow is pressed, x="+ golfball_x+"y="+golfball_y);
        canvas.remove(gb_obj);
        new_image();    
    }}
