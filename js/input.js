export class Input{
  constructor(canvas,controls,h){
    this.activePointer=null;
    this.activeControl=null;
    this.keyDown=e=>{if(['Space','ArrowUp','ArrowDown','KeyW','KeyS','KeyP','Escape'].includes(e.code))e.preventDefault();if(e.repeat&&!['ArrowDown','KeyS'].includes(e.code))return;if(['Space','ArrowUp','KeyW'].includes(e.code))h.jump();if(['ArrowDown','KeyS'].includes(e.code))h.duck(true);if(['KeyP','Escape'].includes(e.code))h.pause()};
    this.keyUp=e=>{if(['ArrowDown','KeyS'].includes(e.code))h.duck(false)};
    const begin=(control,e)=>{e.preventDefault();if(this.activePointer!==null)return;this.activePointer=e.pointerId;this.activeControl=control;e.currentTarget.setPointerCapture?.(e.pointerId);e.currentTarget.classList.add('is-active');canvas.focus({preventScroll:true});if(control==='duck')h.duck(true);else h.jump()};
    const end=e=>{if(this.activePointer!==e.pointerId)return;if(this.activeControl==='duck')h.duck(false);controls.duck.classList.remove('is-active');controls.jump.classList.remove('is-active');this.activePointer=null;this.activeControl=null};
    const releaseAll=()=>{if(this.activeControl==='duck')h.duck(false);controls.duck.classList.remove('is-active');controls.jump.classList.remove('is-active');this.activePointer=null;this.activeControl=null};
    controls.duck.addEventListener('pointerdown',e=>begin('duck',e));
    controls.jump.addEventListener('pointerdown',e=>begin('jump',e));
    for(const button of[controls.duck,controls.jump])for(const event of['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,end);
    window.addEventListener('keydown',this.keyDown);window.addEventListener('keyup',this.keyUp);window.addEventListener('blur',releaseAll);document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseAll()});
  }
}
