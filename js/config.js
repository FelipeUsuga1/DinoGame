export const STATES=Object.freeze({MENU:'MENU',PLAYING:'PLAYING',PAUSED:'PAUSED',GAME_OVER:'GAME_OVER'});
export const CONFIG=Object.freeze({
  world:{width:960,desktopHeight:420,mobileHeight:600,groundRatio:.82},
  player:{width:82,height:88,duckWidth:88,duckHeight:48,x:90,gravity:2350,jumpVelocity:-890,runFrameTime:.11,hitbox:{x:8,y:6,right:9,bottom:4},duckHitbox:{x:8,y:7,right:9,bottom:4}},
  obstacle:{initialGap:450,minGap:330,maxGap:590,gapReduction:.075,spawnPadding:24,pteroUnlockScore:80,pteroWidth:76,pteroHeight:48,pteroLowOffset:8,pteroHighOffset:55,animTime:.18},
  game:{initialSpeed:330,maxSpeed:650,acceleration:8,scoreRate:.025,recordFlashTime:1.2},
  cycle:{dayLength:500,transitionLength:10,nightLength:200,stars:18},
  audio:{jumpFrequency:470,recordFrequency:720,collisionFrequency:105,volume:.07},colors:{ink:'#484848',paper:'#ffffff',nightInk:'#f2f2f2',nightPaper:'#202124'}
});
