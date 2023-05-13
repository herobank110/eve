window.onload = () => {
  document.querySelector('.splashVignette').animate(
    { opacity: [0, 1, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector('.splash'),
        orientation: 'block',
      }),
      timeRange: 'exit',
      fill: 'both',
    },
  );

  // document.querySelector('.splash').animate(
  //   { position: ["fixed", "fixed"] },
  //   {
  //     timeline: new ViewTimeline({
  //       subject: document.querySelector('.1'),
  //       orientation: 'block',
  //     }),
  //     timeRange: 'exit',
  //     fill: 'both',
  //   },
  // );
};
