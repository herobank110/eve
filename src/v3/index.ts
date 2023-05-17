/// <reference path="./@types/types.d.ts" />

window.onload = () => {
  document.querySelector('.splashVignette')!.animate(
    { opacity: [0, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector(".a1")!,
        // subject: document.querySelector('body'),
        orientation: 'block',
      }),
      timeRange: 'exit 200% 50%',
      fill: 'both',
    },
  );

  document.querySelector('.splash').animate(
    { position: ["fixed", "relative"], marginTop:['0px', '100px'] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.a1'),
        orientation: 'block',
      }),
      timeRange: 'exit 0% 50%',
      timingFunction: 'steps(10, end)',
      fill: 'both',
    },
  );
};
