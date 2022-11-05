function lerp1(a: number, b: number, x: number) {
  return a + (b - a) * x;
}
function clamp(a: number) {
  return Math.min(1, Math.max(0, a));
}
function mapRange<T extends number>(a: T, b: T, c: T, d: T, e: T) {
  return lerp1(e, d, clamp((c - a) / (c - b)));
}

$(window).on('scroll', () => {
  const percent = window.scrollY / window.innerHeight;
  execute(percent);
});

function rgb1(x: number) {
  return `rgb(${x}, ${x}, ${x})`;
}

function pY(a: number) {
  return `translateY(${a}px)`;
}

function execute(x: number) {
  function key(
    name: string,
    a: number,
    b: number,
    c: number,
    d: number,
    f: (x: number) => any | string,
  ) {
    if (a <= x && x <= b) {
      const v = mapRange(x, a, b, c, d);
      if (typeof f == 'string') set(name, v, f);
      else set(name, f(v));
    }
  }
  set(R.bodyBg, rgb1(mapRange(x, 0, 0.3, 10, 255)));
  set(R.arrowOpac, mapRange(x, 0, 0.1, 100, 0), '%');
  key(R.arrowTra, 0, 0.03, 0, -10, pY);
  key(R.arrowTra, 0.03, 0.1, -10, 60, pY);
  // set(R.arrowTra, pY(mapRange(x, 0, 0.03, 0, -50)));
  // set(R.arrowTra, pY(mapRange(x, 0.03, 0.1, 0, 150)));
}

$(() => {
  $('.scr').append(makeArrow());
  $('.scr').html($('.scr').html()); // reload for svg
  $('body').css('background', get(R.bodyBg));
  execute(0);
});

const R = {
  arrowOpac: '--arrowOpac',
  arrowTra: '--arrowTra',
  bodyBg: '--bodyBg',
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
    css: {
      width: 100,
      height: 200,
      opacity: get(R.arrowOpac),
      transform: get(R.arrowTra),
    },
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
