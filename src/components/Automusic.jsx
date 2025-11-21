import { useEffect, useRef } from "react";

const Automusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // ابدأ الصوت هادي (20%)
    audio.volume = 0.2;

    // حاول يشغّل الصوت بدون تفاعل
    audio.play().catch(() => {
      console.log("Autoplay blocked until user interacts");
    });

    const enableSound = () => {
      // الهدف النهائي للصوت (نص الصوت)
      const targetVolume = 0.5;
      const fadeDuration = 2000; // 2 ثواني
      const steps = 20;
      const stepTime = fadeDuration / steps;

      let currentVolume = audio.volume;
      const volumeStep = (targetVolume - currentVolume) / steps;

      const fadeIn = setInterval(() => {
        currentVolume += volumeStep;
        audio.volume = currentVolume;

        if (currentVolume >= targetVolume) {
          clearInterval(fadeIn);
        }
      }, stepTime);

      audio.play();

      document.removeEventListener("click", enableSound);
    };

    document.addEventListener("click", enableSound);
  }, []);

  return <audio ref={audioRef} src="./vioce.mp3" />;
};

export default Automusic;
