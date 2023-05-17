/// <reference path="./@types/types.d.ts" />

window.onload = () => {
  document.querySelector('.splashVignette')!.animate(
    { opacity: [0, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1')!,
      }),
      timeRange: 'exit 25% 50%',
      fill: 'both',
    },
  );

  document.querySelector('.splash')!.animate(
    { position: ['fixed', 'relative'], translate: ['0 0', '0 50lvh'] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1')!,
      }),
      timeRange: 'exit 0% 50%',
      easing: 'steps(1)',
      fill: 'both',
    },
  );
};
