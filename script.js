function copyBibtex(id) {
  const bib = document.getElementById(id).textContent;
  navigator.clipboard.writeText(bib).then(() => {
  });
}
