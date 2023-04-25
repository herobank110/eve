import anims from './anims';
import lottie from 'lottie-web';
console.log(anims);

lottie.loadAnimation({
  container: document.body,
  animationData: anims.VRW_010
});
