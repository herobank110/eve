window.onload = () => {
  document.querySelector('.splashVignette').animate(
    { opacity: [0, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.splash'),
        orientation: 'block',
      }),
      timeRange: 'exit 0% 50%',
      fill: 'both',
    },
  );
};
