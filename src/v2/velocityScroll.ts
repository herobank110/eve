let g_scrollVelocity = 0;

function onScroll(e: WheelEvent) {
  e.preventDefault();
  if (Math.sign(g_scrollVelocity) == Math.sign(e.deltaY))
    g_scrollVelocity += e.deltaY; // same direction - accumulate
  else g_scrollVelocity = e.deltaY; // direction change - reassign
  g_scrollVelocity *= 1.13; // exponential speed up
}

function tickScroll() {
  const dt = 1 / 60; // assume 60fps???
  const constant = 3.5;
  g_scrollVelocity *= 0.96;
  if (g_scrollVelocity < 100) g_scrollVelocity *= 0.98;
  if (Math.abs(g_scrollVelocity) > 1) {
    const oldPageYOffset = window.pageYOffset;
    window.scrollTo(0, window.pageYOffset + g_scrollVelocity * dt * constant);
    if (window.pageYOffset == oldPageYOffset) g_scrollVelocity = 0;
  }
  requestAnimationFrame(tickScroll);
}

window.addEventListener("wheel", onScroll, { passive: false });
tickScroll();
