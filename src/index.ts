function lerp1(a: number, b: number, x: number) {
  return a + (b - a) * x;
}

$(window).on('scroll', () => {
  const percent = window.scrollY / window.innerHeight;
  $(document.body).css('background', `hsl(0, 0%, ${lerp1(0, 100, percent)}%)`);
  set(R.arrowOpac, lerp1(100, -500, percent), '%');
});

$(() => {
  $('.scr').append(makeArrow());
  $('.scr').html($('.scr').html()); // reload for svg
});

const R = {
  arrowOpac: '--arrowOpac',
} as const;

// const R2 = xs(['arrowOpac']);

// function xs<T extends string[]>(t: T): { [P in T[number]]: `--${T[number]}` };
// function xs(t: string[]) {
//   return t.reduce((xs, ti) => ({ ...xs, [ti]: '--' + ti }), {});
// }

function get(name: string) {
  return `var(${name})`;
}

function set(name: string, value: string | number, unit?: string) {
  if (unit) value = value.toString() + unit;
  $('html').css(name, value);
}

const makeArrow = () =>
  $('<svg>', {
    css: { width: 100, height: 200, opacity: get(R.arrowOpac) },
  }).append(
    $('<line>', {
      x1: '50',
      y1: '20',
      x2: '50',
      y2: '148',
      style: `stroke:#ccc;stroke-width:2;`,
    }),
    $('<polygon>', {
      points: '20,140, 80,140, 50,160',
      style: 'fill:transparent;stroke:#ccc;stroke-width:2;',
    }),
  );
