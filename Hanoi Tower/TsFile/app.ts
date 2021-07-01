var canvas :HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("mycanvas");
var context : CanvasRenderingContext2D = canvas.getContext("2d");
var user_no;
var flag_moves:number = 0;
var from_disc:number[] = new Array(4);
var count_moves:number=0;
var tower1_top_disc:number=-1;
var tower1_second_disc:number;
var tower2_second_disc:number;
var tower3_second_disc:number;
var tower2_top_disc:number=-1;
var tower3_top_disc:number=-1;
var to_disc:number[] = new Array(4);
var count_step:number=-1;

var tower1_store:number[] = new Array(4);
var tower2_store:number[] = new Array(4);
var tower3_store:number[] = new Array(4);

var tower1_disc_count:number;
var tower2_disc_count:number=0;
var tower3_disc_count:number=0;

user_no=prompt("Please Enter the number of disc For Hanoi Tower");
var no:number;
no= parseInt(user_no);

function hanoi(no:number,a:number,b:number,c:number)
{
    if(no>0)
    {
        hanoi(no-1,a,c,b);
        console.log(a+" to "+c);
        from_disc[count_moves]=a;
        to_disc[count_moves] = c;
        count_moves++;
        hanoi(no-1,b,a,c);
    }
}

hanoi(no,1,2,3);
console.log("Total Number Moves : "+count_moves);
this.reactangle(280,100,10,90,"white");
this.reactangle(380,100,10,90,"white");
this.reactangle(480,100,10,90,"white");

var hanoi1: {rect: hanoitower}[] = [];
//this.reactangle(250,180-this.c,70,10,"black");
//circlecontainer.push({circle : circle1});

let p1,temp:number=0;
for(var t=0;t<no;t++)
{
     p1=new Point(250,180-temp);
    let hanoitower1 = new hanoitower(canvas,context,no,p1,no-t)
    hanoitower1.drawdisc();
    hanoi1.push({rect:hanoitower1});
    temp +=15;
}

tower1_top_disc=no-1;


tower1_disc_count=no;

for(let i = 0;i<tower1_disc_count;i++)
{
    tower1_store[i] = i;
    //console.log("Tower 1 : "+tower1_store[i]);
   
}
tower1_top_disc = tower1_store[tower1_disc_count-1];
//console.log("Tower 1 Top : "+tower1_top_disc);


function next()
{
    document.getElementById("Next").style.display="none";
    count_step++;
    //console.log("Step Count : "+count_step);
    //console.log("Total Step : "+count_moves);
    if(count_step < count_moves)
    {
        if(from_disc[count_step] == 1 && to_disc[count_step] == 2)
        {
            
            tower1_to_tower2_vertical_up();
            
            
            function tower1_to_tower2_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                
                hanoi1[tower1_store[tower1_top_disc]].rect.move1_to_2();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower1_to_tower2_vertical_up);
                }
                else
                {
                    hanoi1[tower1_store[tower1_top_disc]].rect.toMovehorizontal=true;
                    tower1_to_tower2_horizontal();
                }
            }
            
            function tower1_to_tower2_horizontal()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower1_store[tower1_top_disc]].rect.move1_2_hori();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
            
                if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovehorizontal)
                {
                    window.requestAnimationFrame(tower1_to_tower2_horizontal);
                }
                else
                {
                    hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically=true;
                    tower1_to_tower2_vertically_down();
                    
                }
            }
            function tower1_to_tower2_vertically_down()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower1_store[tower1_top_disc]].rect.move1_to_2_vdown(tower2_disc_count);
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower1_to_tower2_vertically_down);
                }
                else
                {
                   /* tower2_top_disc = tower1_top_disc;
                    tower1_disc_count--;
                    tower1_top_disc = tower1_disc_count-1;
                    tower2_disc_count++;
                    if(tower1_disc_count == 0)
                    {
                        tower1_top_disc = -1;
                    }*/
                    tower2_top_disc++;
                    tower2_store[tower2_top_disc]=tower1_store[tower1_top_disc];
                    tower1_top_disc--;
                    tower1_disc_count--;
                    tower2_disc_count++;
                    console.log("Press The Next Step");
                    document.getElementById("Next").style.display="block";
                }
            
            }
            
        }
        if(from_disc[count_step] == 1 && to_disc[count_step] == 3)
        {
            tower1_to_tower3_vertical_up();
            function tower1_to_tower3_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower1_store[tower1_top_disc]].rect.move1_to_3();
            for(let i = 0;i<hanoi1.length;i++)
            {
                hanoi1[i].rect.drawdisc();
            }
            if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically)
            {
                window.requestAnimationFrame(tower1_to_tower3_vertical_up);
            }
            else
            {
                hanoi1[tower1_store[tower1_top_disc]].rect.toMovehorizontal=true;
                tower1_to_tower3_horizontal();
            }

            function tower1_to_tower3_horizontal()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower1_store[tower1_top_disc]].rect.move1_3_hori();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
            
                if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovehorizontal)
                {
                    window.requestAnimationFrame(tower1_to_tower3_horizontal);
                }
                else
                {
                    hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically=true;
                    tower1_to_tower3_vertically_down();
                }
            }
            function tower1_to_tower3_vertically_down()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                    this.reactangle(280,100,10,90,"white");
                    this.reactangle(380,100,10,90,"white");
                    this.reactangle(480,100,10,90,"white");
                    hanoi1[tower1_store[tower1_top_disc]].rect.move1_to_3_vdown(tower3_disc_count);
                    for(let i = 0;i<hanoi1.length;i++)
                    {
                        hanoi1[i].rect.drawdisc();
                    }
                    if(hanoi1[tower1_store[tower1_top_disc]].rect.toMovevertically)
                    {
                        window.requestAnimationFrame(tower1_to_tower3_vertically_down);
                    }
                    else
                    {
                       // tower1_top_disc--;
                       /* tower3_top_disc=tower1_top_disc;
                        tower1_disc_count--;
                        tower1_top_disc = tower1_disc_count-1;
                        tower3_disc_count++;
                        if(tower1_disc_count == 0)
                        {
                            tower1_top_disc=-1;
                        }*/
                        
                        tower3_top_disc++;
                        tower3_store[tower3_top_disc]=tower1_store[tower1_top_disc];
                        tower1_top_disc--;
                        tower1_disc_count--;
                        tower3_disc_count++;
                        console.log("Press The Next Step");
                        document.getElementById("Next").style.display="block";
                    }
            }
        }
        
        }
        if(from_disc[count_step] == 2 && to_disc[count_step] == 3)
        {
            tower2_to_tower3_vertical_up();
            function tower2_to_tower3_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                
                hanoi1[tower2_store[tower2_top_disc]].rect.move2_to_3();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower2_to_tower3_vertical_up);
                }
                else
                {
                    hanoi1[tower2_store[tower2_top_disc]].rect.toMovehorizontal=true;
                    tower2_to_tower3_horizontal();
                }
                function tower2_to_tower3_horizontal()
                {
                    context.clearRect(0,0, canvas.width, canvas.height);
                    this.reactangle(280,100,10,90,"white");
                    this.reactangle(380,100,10,90,"white");
                    this.reactangle(480,100,10,90,"white");
                    hanoi1[tower2_store[tower2_top_disc]].rect.move1_3_hori();
                    for(let i = 0;i<hanoi1.length;i++)
                    {
                        hanoi1[i].rect.drawdisc();
                    }
                
                    if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovehorizontal)
                    {
                        window.requestAnimationFrame(tower2_to_tower3_horizontal);
                    }
                    else
                    {
                        hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically=true;
                        tower2_to_tower3_vertically_down();
                    }
                    
                }
                function tower2_to_tower3_vertically_down()
                {
                    context.clearRect(0,0, canvas.width, canvas.height);
                    this.reactangle(280,100,10,90,"white");
                    this.reactangle(380,100,10,90,"white");
                    this.reactangle(480,100,10,90,"white");
                    hanoi1[tower2_store[tower2_top_disc]].rect.move2_to_3_vdown(tower3_disc_count);
                    for(let i = 0;i<hanoi1.length;i++)
                    {
                        hanoi1[i].rect.drawdisc();
                    }
                    if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically)
                    {
                        window.requestAnimationFrame(tower2_to_tower3_vertically_down);
                    }
                    else
                    {
                        
                        /*tower3_top_disc=tower2_top_disc;
                        tower2_disc_count--;
                        tower2_top_disc = tower2_disc_count-1;
                        tower3_disc_count++;

                        if(tower2_disc_count == 0)
                        {
                            tower2_top_disc=-1;
                        }
                        */
                       tower3_top_disc++;
                       tower3_store[tower3_top_disc]=tower2_store[tower2_top_disc];
                       tower2_top_disc--;
                       tower2_disc_count--;
                       tower3_disc_count++;

                        console.log("Press The Next Step");
                        document.getElementById("Next").style.display="block";
                    }
                }
                
            }
        }
        if(from_disc[count_step] == 3 && to_disc[count_step] == 2)
        {
            tower3_to_tower2_vertical_up();
            function tower3_to_tower2_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                
                hanoi1[tower3_store[tower3_top_disc]].rect.move3_to_2();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower3_to_tower2_vertical_up);
                }
                else
                {
                    hanoi1[tower3_store[tower3_top_disc]].rect.toMovehorizontal=true;
                    tower3_to_tower2_horizontal();
                }
            }
            function tower3_to_tower2_horizontal()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower3_store[tower3_top_disc]].rect.move3_2_hori();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
            
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovehorizontal)
                {
                    window.requestAnimationFrame(tower3_to_tower2_horizontal);
                }
                else
                {
                    hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically=true;
                    tower3_to_tower2_vertically_down();
                }
            }
            function tower3_to_tower2_vertically_down()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower3_store[tower3_top_disc]].rect.move3_to_2_vdown(tower2_disc_count);
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower3_to_tower2_vertically_down);
                }
                else
                {
                  //  tower3_top_disc--;
                   /* tower2_top_disc=tower3_top_disc;
                    tower3_disc_count--;
                    tower3_top_disc = tower3_disc_count-1;
                    tower2_disc_count++;
                    if(tower3_disc_count == 0)
                    {
                        tower3_top_disc=-1;
                    } */
                    tower2_top_disc++;
                    tower2_store[tower2_top_disc]=tower3_store[tower3_top_disc];
                    tower3_top_disc--;
                    tower3_disc_count--;
                    tower2_disc_count++;
                    console.log("Press The Next Step");
                    document.getElementById("Next").style.display="block";
                }
            }
        }
        if(from_disc[count_step] == 2 && to_disc[count_step] == 1)
        {
            tower2_to_tower1_vertical_up();
            function tower2_to_tower1_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                
                hanoi1[tower2_store[tower2_top_disc]].rect.move2_to_1();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower2_to_tower1_vertical_up);
                }
                else
                {
                    hanoi1[tower2_store[tower2_top_disc]].rect.toMovehorizontal=true;
                    tower2_to_tower1_horizontal();
                }
                
            }

            function tower2_to_tower1_horizontal()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower2_store[tower2_top_disc]].rect.move2_1_hori();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
            
                if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovehorizontal)
                {
                    window.requestAnimationFrame(tower2_to_tower1_horizontal);
                }
                else
                {
                    hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically=true;
                    tower2_to_tower1_vertically_down();
                }
            }

            function tower2_to_tower1_vertically_down()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower2_store[tower2_top_disc]].rect.move2_to_1_vdown(tower1_disc_count);
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower2_store[tower2_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower2_to_tower1_vertically_down);
                }
                else
                {
                    //tower2_top_disc--;
                    /*tower1_top_disc=tower2_top_disc;
                    tower2_disc_count--;
                    tower2_top_disc = tower2_disc_count-1;
                    tower1_disc_count++;
                    if(tower2_disc_count == 0)
                    {
                        tower2_top_disc=-1;
                    }
                    */
                    tower1_top_disc++;
                    tower1_store[tower1_top_disc]=tower2_store[tower2_top_disc];
                    tower2_top_disc--;
                    tower2_disc_count--;
                    tower1_disc_count++;
                    console.log("Press The Next Step");
                    document.getElementById("Next").style.display="block";
                }
            }
        }
        if(from_disc[count_step] == 3 && to_disc[count_step] == 1)
        {
            tower3_to_tower1_vertical_up();
            function tower3_to_tower1_vertical_up()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                
                hanoi1[tower3_store[tower3_top_disc]].rect.move2_to_1();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower3_to_tower1_vertical_up);
                }
                else
                {
                    hanoi1[tower3_store[tower3_top_disc]].rect.toMovehorizontal=true;
                    tower3_to_tower1_horizontal();
                }
                
            }
            function tower3_to_tower1_horizontal()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower3_store[tower3_top_disc]].rect.move3_1_hori();
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
            
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovehorizontal)
                {
                    window.requestAnimationFrame(tower3_to_tower1_horizontal);
                }
                else
                {
                    hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically=true;
                    tower3_to_tower1_vertically_down();
                }
            }
            function tower3_to_tower1_vertically_down()
            {
                context.clearRect(0,0, canvas.width, canvas.height);
                this.reactangle(280,100,10,90,"white");
                this.reactangle(380,100,10,90,"white");
                this.reactangle(480,100,10,90,"white");
                hanoi1[tower3_store[tower3_top_disc]].rect.move3_to_1_vdown(tower1_disc_count);
                for(let i = 0;i<hanoi1.length;i++)
                {
                    hanoi1[i].rect.drawdisc();
                }
                if(hanoi1[tower3_store[tower3_top_disc]].rect.toMovevertically)
                {
                    window.requestAnimationFrame(tower3_to_tower1_vertically_down);
                }
                else
                {
                    
                   /* tower1_top_disc=tower3_top_disc;
                    tower3_disc_count--;
                    tower3_top_disc = tower3_disc_count-1;
                    tower1_disc_count++;
                    if(tower3_disc_count == 0)
                    {
                        tower3_top_disc=-1;
                    }
                    */

                    tower1_top_disc++;
                    tower1_store[tower1_top_disc]=tower3_store[tower3_top_disc];
                    tower3_top_disc--;
                    tower3_disc_count--;
                    tower1_disc_count++;
                    console.log("Press The Next Step");
                    document.getElementById("Next").style.display="block";
                }
            }
        }
    }
    else if(count_step==count_moves)
    {
        console.log("Hanoi Tower Problem Solved");
    }
    
}
function reactangle(x:number,y:number,w:number,h:number,color:string)
    {
        this.context.beginPath();
        this.context.rect(x,y,w,h);
        this.context.fillStyle=color;
        this.context.fill();
        this.context.stroke();
    }
