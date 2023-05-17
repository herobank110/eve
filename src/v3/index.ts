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
    private _animEl: Element | null = null;
    private _keyframes: Keyframe[] | PropertyIndexedKeyframes | undefined;

    animate(selector: string) {
      // the element we are about to animate.
      this._animEl = document.querySelector(selector);
      if (!this._animEl)
        throw new Error(`Invalid element for selector: ${selector}`);
      return this;
    }

    keyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes) {
      this._keyframes = keyframes;
      return this;
    }

    options(timeRange: AnimationTimeRange, fill: FillMode, easing: string) {
      // track element for scroll percentages.
      const trackEl = document.querySelector(`.t${index}`);
      if (!trackEl) throw new Error(`Invalid element for track: ${index}`);

      if (!this._animEl) throw new Error('Invalid anim element');

      // set the animation. requires reloading the page every time it was changed
      // as does not seem to work well with hot reload
      const timeline = new ViewTimeline({ subject: trackEl });
      this._animEl.animate(this._keyframes!, {
        timeRange,
        easing,
        fill,
        timeline,
      });

      // allow chaining
      return this;
    }
  })();

window.onload = () => {
  track(1)
    .animate('.splashVignette')
    .keyframes({ opacity: [0, 1] })
    .options('exit 15% 35%', 'both', 'ease-in')
    .animate('.splash')
    .keyframes({ position: ['fixed', 'relative'], translate: ['', '0 24lvh'] })
    .options('exit 0% 30%', 'both', 'steps(1)')
    .animate('.splash')
    .keyframes({ translate: ['0 24lvh', '0 -20lvh'] })
    .options('exit 30% 100%', 'forwards', 'cubic-bezier(0.3, 0.3, 0.1, 1)');
};
