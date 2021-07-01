class Point // x and y point
 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class hanoitower {
    constructor(canvas, context, disc_no, centpt, no) {
        this.disc_no = 0;
        this.toMovevertically = false;
        this.toMovehorizontal = false;
        this.canvas = canvas;
        this.context = context;
        this.disc_no = disc_no;
        this._centpt = centpt;
        this.disc_no = no;
    }
    drawdisc() {
        //Horizontal Bars-----------------
        this.reactangle(this._centpt.x, this._centpt.y, 70, 10, "black");
        //---------------------------------
        this.context.font = "15px Arial";
        this.context.fillStyle = "white";
        this.context.fillText(this.disc_no.toString(), this._centpt.x + 30, this._centpt.y + 9.6);
    }
    //Tower 1 to tower 2 Complete Animation-----------------------------------------------------------------------------------
    move1_to_2() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        // console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move1_2_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x += 1;
            // console.log("X : "+this._centpt.x);
            if (this._centpt.x >= 350) {
                this.toMovehorizontal = false;
            }
        }
    }
    move1_to_2_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    //Tower 1 to Tower 3 Complete Animation---------------------------------------------------------------
    move1_to_3() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        //console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move1_3_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x += 1;
            //console.log("X : "+this._centpt.x);
            if (this._centpt.x >= 450) {
                this.toMovehorizontal = false;
            }
        }
    }
    move1_to_3_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    //Tower 2 to Tower 3 Complete Animation--------------------------------------------------------------------
    move2_to_3() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        // console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move2_3_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x += 1;
            // console.log("X : "+this._centpt.x);
            if (this._centpt.x >= 450) {
                this.toMovehorizontal = false;
            }
        }
    }
    move2_to_3_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    //Tower 3 to tower 2 Complete Animation-----------------------------------------------------------------------
    move3_to_2() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        // console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move3_2_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x -= 1;
            // console.log("X : "+this._centpt.x);
            if (this._centpt.x <= 350) {
                this.toMovehorizontal = false;
            }
        }
    }
    move3_to_2_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    //Tower 2 to Tower 1 Complete Animation-------------------------------------------------------------
    move2_to_1() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        // console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move2_1_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x -= 1;
            // console.log("X : "+this._centpt.x);
            if (this._centpt.x <= 250) {
                this.toMovehorizontal = false;
            }
        }
    }
    move2_to_1_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    //Tower 3 to Tower 1------------------------------------------------------------------
    move3_to_1() {
        this.toMovevertically = true;
        this._centpt.y -= 1;
        // console.log(" Y : "+this._centpt.y);
        if (this._centpt.y <= 80) {
            this.toMovevertically = false;
        }
    }
    move3_1_hori() {
        if (this.toMovehorizontal) {
            this._centpt.x -= 1;
            // console.log("X : "+this._centpt.x);
            if (this._centpt.x <= 250) {
                this.toMovehorizontal = false;
            }
        }
    }
    move3_to_1_vdown(elevation) {
        var temp;
        if (this.toMovevertically) {
            this._centpt.y += 1;
            // console.log(" Y : "+this._centpt.y);
            temp = 180 - (15 * elevation);
            if (this._centpt.y == temp) {
                this.toMovevertically = false;
            }
        }
    }
    //---------------------------------------------------------------------------------------------------------------------
    reactangle(x, y, w, h, color) {
        this.context.beginPath();
        this.context.rect(x, y, w, h);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.stroke();
    }
}
//# sourceMappingURL=hanoi.js.map