window.onload = () => {
  document.querySelector('.splashVignette').animate(
    { opacity: [0, 1] },
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
