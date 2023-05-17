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

window.onload = () => {
  document.querySelector('.splashVignette')!.animate(
    { opacity: [0, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1')!,
      }),
      timeRange: 'exit 15% 50%',
      fill: 'both',
    },
  );

  document.querySelector('.splash')!.animate(
    { position: ['fixed', 'relative'], translate: ['', '0 50lvh'] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1')!,
      }),
      timeRange: 'exit 0% 50%',
      easing: 'steps(1)',
      fill: 'both',
    },
  );

  document.querySelector('.splash')!.animate(
    { translate: ['0 50lvh', '0 0'] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1')!,
      }),
      timeRange: 'exit 50% 100%',
      fill: 'forwards',
    },
  );
};
