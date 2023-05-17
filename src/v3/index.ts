import LilGui from 'lil-gui';

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

const track = (index: number) =>
  new (class {
    animate(
      selector: string,
      keyframes: Keyframe[] | PropertyIndexedKeyframes,
      options: KeyframeAnimationOptions,
    ) {
      // track element for scroll percentages.
      const trackEl = document.querySelector(`.t${index}`);
      if (!trackEl) throw new Error(`Invalid element for track: ${index}`);

      // the element we are about to animate.
      const animEl = document.querySelector(selector);
      if (!animEl) throw new Error(`Invalid element for selector: ${selector}`);

      // set the animation. requires reloading the page every time it was changed
      // as does not seem to work well with hot reload
      animEl.animate(keyframes, {
        ...options,
        timeline: new ViewTimeline({ subject: trackEl }),
      });

      // allow chaining
      return this;
    }
  })();

window.onload = () => {
  track(1)
    .animate(
      '.splashVignette',
      { opacity: [0, 1] },
      { timeRange: 'exit 15% 35%', fill: 'both', easing: 'ease-in' },
    )
    .animate(
      '.splash',
      { position: ['fixed', 'relative'], translate: ['', '0 24lvh'] },
      { timeRange: 'exit 0% 30%', easing: 'steps(1)', fill: 'both' },
    )
    .animate(
      '.splash',
      { translate: ['0 24lvh', '0 -20lvh'] },
      {
        timeRange: 'exit 30% 100%',
        easing: 'cubic-bezier(0.3, 0.3, 0.1, 1)',
        fill: 'forwards',
      },
    );
};
