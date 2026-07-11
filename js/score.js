import{CONFIG}from'./config.js';
const KEY='nimbo-high-score';
export class Score{constructor(onRecord){this.value=0;
    this.high=Number(localStorage.getItem(KEY))||0;this.onRecord=onRecord;
    this.flash=0;this.surpassed=false}reset(){this.value=0;this.flash=0;this.surpassed=false}update(distance,dt){this.value=Math.floor(distance);
        if(!this.surpassed&&this.value>this.high){
            this.surpassed=true;this.high=this.value;this.flash=CONFIG.game.recordFlashTime;localStorage.setItem(KEY,String(this.high));
            this.onRecord?.()}else if(this.surpassed&&this.value>this.high){this.high=this.value;localStorage.setItem(KEY,String(this.high))}this.flash=Math.max(0,this.flash-dt)}commit(){if(this.value>this.high){this.high=this.value;localStorage.setItem(KEY,String(this.high))}}draw(ctx,width,palette=CONFIG.colors){ctx.fillStyle=this.flash>0&&Math.floor(this.flash*10)%2===0?palette.paper:palette.ink;
                ctx.font='bold 19px Arial';ctx.textAlign='right';ctx.fillText(`HI ${String(this.high).padStart(5,'0')}  ${String(this.value).padStart(5,'0')}`,width-26,34)}}
