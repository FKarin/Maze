var sound=document.getElementById("sound");
function green(){
    trail("green");
}
function blue(){
    trail("blue");
}
function red(){
    trail("red");
}
function black(){
    trail("black");
}
function trail(color){
    sound.play();
    document.getElementById('body').style.cursor = 'none';
    document.getElementById('greenclick').style.cursor = 'none';
    document.getElementById('blueclick').style.cursor = 'none';
    document.getElementById('redclick').style.cursor = 'none';
    document.getElementById('blackclick').style.cursor = 'none';
    var canvas = document.getElementById('canvas');
    var c=canvas.getContext('2d');
    var canvas2 = document.getElementById('canvas2');
    var c2=canvas2.getContext('2d');
    var x=122;
    var y=565;
    setInterval(drawIt, 6);
    function drawIt() {
        c.fillStyle = color;
        c.fillRect(x,y,10,10);
        c2.clearRect(0,0,600,700);
        const image = document.getElementById(color+"brush");
        c2.drawImage(image,x,y-15,35,35);
        if(y<=565&&y>=552&&x==122)
            y--;
        if(y==552&&x<=122&&x>=106)
            x--;
        if(y>=515&&y<=552&&x==106)
            y--;
        if(y==515&&x<=106&&x>=90)
            x--;
        if(y>=495&&y<=515&&x==90)
            y--;
        if(y==495&&x<=90&&x>=75)
            x--;
        if(y>=458&&y<=495&&x==75)
            y--;
        if(y==458&&x<=75&&x>=59)
            x--;
        if(y>=440&&y<=458&&x==59)
            y--;
        if(y==440&&x>=59&&x<=75)
            x++;
        if(y>=328&&y<=440&&x==75)
            y--;
        if(y==328&&x<=75&&x>=43)
            x--;
        if(y>=218&&y<=328&&x==43)
            y--;
        if(y==218&&x>=43&&x<=58)
            x++;
        if(y<=218&&y>141&&x==58)
            y--;
        if(y==141&&x<=58&&x>=42)
            x--;
        if(y<=141&&y>=125&&x==42)
            y--;
        if(y==125&&x<=42&&x>=27)
            x--;
        if(y<=125&&y>=105&&x==27)
            y--;
        if(y==105&&x<=27&&x>=12)
            x--;
        if(y<=105&&y>=30&&x==12)
            y--;
        if(y==30&&x>=12&&x<=42)
            x++;
        if(y<=30&&y>=12&&x==42)
            y--;
        if(y==12&&x>=42&&x<=90)
            x++;
        if(y>=12&&y<=30&&x==90)
            y++;
        if(y==30&&x>=90&&x<=290)
            x++;
        if(y<=30&&y>=12&&x==290)
            y--;
        if(y==12&&x>=290&&x<=415)
            x++;
        if(y>=12&&y<=106&&x==415)
            y++;
        if(y==106&&x<=415&&x>=400)
            x--;
        if(y>=106&&y<=123&&x==400)
            y++;
        if(y==123&&x<=400&&x>=385)
            x--;
        if(y>=123&&y<=160&&x==385)
            y++;
        if(y==160&&x>=385&&x<=400)
            x++;
        if(y>=160&&y<=236&&x==400)
            y++;
        if(y==236&&x>=400&&x<=417)
            x++;
        if(y>=236&&y<=270&&x==417)
            y++;
        if(y==270&&x>=417&&x<=432)
            x++;
        if(y>=270&&y<=310&&x==432)
            y++;
        if(y==310&&x>=432&&x<=448)
            x++;
        if(y>=310&&y<=328&&x==448)
            y++;
        if(y==328&&x>=448&&x<=462)
            x++;
        if(y>=328&&y<=365&&x==462)
            y++;
        if(y==365&&x>=462&&x<=486)
            x++;
        if(y==365&&x==486)
            disappear(color);
    }
}
function disappear(color){
    sound.pause();
    document.getElementById("maze").style.transition="all 1s"
    document.getElementById("maze").style.opacity="0";
    setTimeout(disappear2(color),1000);
}
function disappear2(color){
    document.getElementById("canvas").style.transition="all 2s"
    document.getElementById("canvas").style.opacity="0";
    setTimeout(appear(color),1000);
}
function appear(color){
    document.getElementById(color).style.transition="all 2s"
    document.getElementById(color).style.opacity="1";
}