function lerp1(a: number, b: number, x: number) {
  return a + (b - a) * x;
}

$(window).on('scroll', () => {
  const percent = window.scrollY / window.innerHeight;
  $(document.body).css('background', `hsl(0, 0%, ${lerp1(0, 100, percent)}%)`);
});

$(() => {
    $(".cent").append(makeArrow())
    $(".cent").html($(".cent").html()) // reload for svg
})

const makeArrow = () =>
  $('<svg>', { width: 100, height: 200 }).append(
    $('<line>', {
      x1: '50',
      y1: '20',
      x2: '50',
      y2: '148',
      style: 'stroke:#ccc;stroke-width:2;',
    }),
    $('<polygon>', {
      points: '20,140, 80,140, 50,160',
      style: 'fill:transparent;stroke:#ccc;stroke-width:2;',
    }),
  );
