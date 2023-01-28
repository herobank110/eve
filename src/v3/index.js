window.onload = () => {
  document.querySelector('.splashVignette').animate(
    { background: [

  'radial-gradient(circle, transparent 50%, transparent 150%)',
  'radial-gradient(circle, transparent 50%, red 150%)'

    ] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.splash'),
        orientation: 'block',
      }),
      timeRange: 'exit',
      fill: 'both',
    },
  );
};
