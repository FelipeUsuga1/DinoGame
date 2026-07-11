export function intersects(a,b){const x=a.getHitbox(),y=b.getHitbox();return x.x<y.x+y.width&&x.x+x.width>y.x&&x.y<y.y+y.height&&x.y+x.height>y.y}
