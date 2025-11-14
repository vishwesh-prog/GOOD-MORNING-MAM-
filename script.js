// script.js
const btn = document.getElementById('startBtn');
const msg = document.getElementById('messageBox');
const chum = document.getElementById('chum');
let moveInterval;

const apologyText = `Hey… I know you’re disappointed with me, and it’s really bothering me that I might have made a mistake without realizing it.<br><br>
I genuinely tried to recall everything, but I honestly can’t figure out what hurt you.<br><br>
Your feelings matter a lot to me, and I want to make things right. When you’re ready, please tell me what went wrong. I promise I’ll listen calmly and understand you fully.<br><br>
I care about you, and I don’t want to repeat the same mistake again. 💗`;

btn.addEventListener('click', startGame);
chum.addEventListener('click', catchChum);

function startGame(){
  btn.style.display = 'none';
  msg.innerHTML = 'Catch the Chum-Chum 💗';
  chum.style.display = 'block';
  // place the chum initially near center
  chum.style.left = (window.innerWidth / 2) + 'px';
  chum.style.top = (window.innerHeight / 2) + 'px';
  moveChum();
}

function moveChum(){
  if(moveInterval) clearInterval(moveInterval);

  moveInterval = setInterval(()=>{
    const margin = 140; // keeps it within viewport edges
    const maxX = Math.max(window.innerWidth - margin, 20);
    const maxY = Math.max(window.innerHeight - margin, 20);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    // center the image at the random point
    chum.style.left = x + 'px';
    chum.style.top = y + 'px';
    chum.style.transform = 'translate(-50%, -50%) scale(1.06)';
    setTimeout(()=> chum.style.transform = 'translate(-50%, -50%) scale(1)', 160);
  }, 900);
}

function catchChum(){
  if(moveInterval) clearInterval(moveInterval);
  // center chum
  chum.style.left = '50%';
  chum.style.top = '50%';
  chum.style.transform = 'translate(-50%, -50%) scale(0.96)';

  setTimeout(()=>{
    msg.innerHTML = apologyText;
    showRestartButton();
  }, 300);
}

function showRestartButton(){
  // remove existing if any
  const existing = document.getElementById('okBtn');
  if(existing) existing.remove();

  const ok = document.createElement('button');
  ok.id = 'okBtn';
  ok.textContent = 'OK';
  ok.addEventListener('click', ()=> location.reload());
  document.body.appendChild(ok);
}

// adapt placement on window resize (keeps experience stable)
window.addEventListener('resize', ()=> {
  // nothing required immediately; the interval will place chum safely
});
