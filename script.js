function copyBibtex(id) {
  const bib = document.getElementById(id).textContent;
  navigator.clipboard.writeText(bib).then(() => {
  });
}  

function drawLightning() {
    const svg = document.getElementById('lightning');
    svg.innerHTML = ''; // Clear previous lightning

    const boltCount = Math.floor(Math.random() * 3) + 1; // 1–3 bolts

    for (let i = 0; i < boltCount; i++) {
      let x = Math.random() * window.innerWidth;
      let y = 0;

      for (let j = 0; j < 5; j++) {
        const nextX = x + (Math.random() - 0.5) * 100;
        const nextY = y + window.innerHeight / 5;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", y);
        line.setAttribute("x2", nextX);
        line.setAttribute("y2", nextY);
        line.setAttribute("stroke", "white");
        line.setAttribute("stroke-width", 3);
        line.setAttribute("stroke-linecap", "round");
        line.setAttribute("filter", "url(#glow)");

        svg.appendChild(line);

        x = nextX;
        y = nextY;
      }
    }

    // Remove lightning after a short flash
    setTimeout(() => {
      svg.innerHTML = '';
      document.body.style.backgroundColor = '#f2f2f2';
    }, 200);
  }

  // Lightning flash
  function flashBackground() {
    document.body.style.backgroundColor = '#e6f7ff';
  }

  // Random interval for lightning
  function randomLightning() {
    drawLightning();
    flashBackground();
    setTimeout(randomLightning, Math.random() * 10000 + 3000);
  }

  // Start effect after load
  window.onload = () => {
    randomLightning();
  };
  
  setInterval(() => {
    drawLightning();
    document.body.style.backgroundColor = '#ffffff';
    setTimeout(() => {
      document.body.style.backgroundColor = '#f2f2f2';
    }, 100);
  }, Math.random() * 10000 + 5000);