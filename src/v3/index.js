window.onload = () => {
  document.querySelector('.splash:after').animate(
    // { background: ['transparent', 'radial-gradient(circle, transparent 50%, black 150%)'] },
    { background: ['black', 'red'] },
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
