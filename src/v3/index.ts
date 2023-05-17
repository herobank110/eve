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
  { opacity: [0, 1] },
  { timeRange: 'exit 15% 35%', fill: 'both', easing: 'ease-in' },
);
animate(
  '.splash',
  { position: ['fixed', 'relative'], translate: ['', '0 24lvh'] },
  { timeRange: 'exit 0% 30%', fill: 'both', easing: 'steps(1)' },
);
animate(
  '.splash',
  { translate: ['0 24lvh', '0 -20lvh'] },
  {
    timeRange: 'exit 30% 100%',
    fill: 'forwards',
    easing: 'cubic-bezier(0.3, 0.3, 0.1, 1)',
  },
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
