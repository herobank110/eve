function lerp1(a: number, b: number, x: number) {
  return a + (b - a) * x;
}

window.addEventListener('scroll', () => {
  // $(window).on('scroll', () => {
  const percent = window.scrollY / window.innerHeight;
  $(document.body).css('background', `hsl(0, 0%, ${lerp1(0, 100, percent)}%)`);
  document.body.style.background = `hsl(0, 0%, ${lerp1(0, 100, percent)}%)`;
});
