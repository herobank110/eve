window.onload = () => {
  document.querySelector('.splashVignette').animate(
    { opacity: [0, 1] },
    {
      timeline: new ViewTimeline({
        subject: document.querySelector(".a1"),
        // subject: document.querySelector('body'),
        orientation: 'block',
      }),
      timeRange: 'exit 0% 50%',
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
