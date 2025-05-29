function copyBibtex(id) {
  const bib = document.getElementById(id).textContent;
  navigator.clipboard.writeText(bib).then(() => {
  });
}  

function drawLightning() {
    const svg = document.getElementById('lightning');
    svg.innerHTML = ''; // Clear previous lightning

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", Math.random() * window.innerWidth);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", Math.random() * window.innerWidth);
    line.setAttribute("y2", window.innerHeight);
    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", 2);
    svg.appendChild(line);

    setTimeout(() => svg.innerHTML = '', 100); // Remove lightning quickly
  }