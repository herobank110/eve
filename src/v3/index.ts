import './scroll-timeline';
import LilGui from 'lil-gui';

// helper functions

function queryAncestor(el: Element, selector: string) {
  let fl: Element | null = el;
  do fl = fl!.parentElement;
  while (fl && !fl?.matches(selector));
  return fl;
}

const animate = (
  selector: string,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options: KeyframeAnimationOptions,
) => {
  const animEl = document.querySelector(selector);
  if (!animEl) throw new Error(`Invalid element for selector: ${selector}`);
  const trackEl = queryAncestor(animEl, '.t');
  if (!trackEl) throw new Error(`Couldn't find track for selector ${selector}`);
  const timeline = new ViewTimeline({ subject: trackEl });
  animEl.animate(keyframes, { ...options, timeline });
};

// create the animations

animate(
  '.splashVignette',
  { opacity: [0, 1, 1, 0] },
  { timeRange: 'exit -10% 40%', fill: 'both', easing: 'ease-in' },
);
animate(
  '.splashTrellis',
  { opacity: [0, 1] },
  { timeRange: 'exit 15% 27%', fill: 'both', easing: 'steps(1)' },
);
animate(
  '.splash',
  { visibility: ['visible', 'hidden'] },
  { timeRange: `exit 0% 26%`, fill: 'both', easing: 'steps(1)' },
);
{
  let p = 0.35;
  // @ts-ignore
  let h = +document.querySelector('.t1').style.height.split('lvh')[0];
  let o = h - (1 - p) * 100;
  animate(
    '.fix01a',
    { position: ['fixed', 'relative'], translate: ['', `0 ${o}lvh`] },
    { timeRange: `exit 0% ${p * 100}%`, fill: 'both', easing: 'steps(1)' },
  );
  animate(
    '.fix01a',
    { translate: [`0 ${o}lvh`, `0 ${-100 + h}lvh`] },
    {
      timeRange: `exit ${p * 100}% 100%`,
      fill: 'forwards',
      easing: 'cubic-bezier(0.3, 0.3, 0.1, 1)',
    },
  );
}

animate(
  '.fix01a',
  { visibility: ['hidden', 'visible'] },
  { timeRange: 'enter -50% 0%', fill: 'both', easing: 'steps(1)' },
);

animate(
  '.ext01',
  { visibility: ['hidden', 'visible'] },
  { timeRange: 'enter -50% 0%', fill: 'both', easing: 'steps(1)' },
);

// apply debug gui

if (window.location.hostname == 'localhost') {
  const debugGui = new LilGui();
  const debugSettings = {
    opacity: 100,
  };
  debugGui.add(debugSettings, 'opacity', 0, 100, 1).onChange(() => {
    document.body.style.setProperty(
      '--debug-opacity',
      debugSettings.opacity + '%',
    );
  });
}
