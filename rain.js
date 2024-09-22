const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Lowered transparency for clearer content
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#0ff'; // Color of the rain
  ctx.font = `${fontSize}px monospace`;
  
  for (let x = 0; x < columns; x++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, x * fontSize, drops[x] * fontSize);
    
    if (drops[x] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0; // Reset the drop
    }
    
    drops[x]++;
  }
}

setInterval(draw, 33); // Adjust for speed
