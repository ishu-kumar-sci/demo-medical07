const canvas=document.getElementById("bg"),ctx=canvas.getContext("2d");
let w,h,pts=[];
function resize(){w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";pts=Array.from({length:55},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+0.5,v:Math.random()*.25+.08}))}
function draw(){ctx.clearRect(0,0,w,h);ctx.fillStyle="rgba(101,230,211,.6)";for(const p of pts){p.y-=p.v;if(p.y<0)p.y=h;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();

document.getElementById("appointmentForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  document.getElementById("formMsg").textContent=`Thanks ${data.get("name")}! Your appointment request has been received. (Demo only)`;
  e.target.reset();
});
