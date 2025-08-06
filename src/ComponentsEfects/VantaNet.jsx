import { useEffect, useRef, useState } from "react";

const VantaNet = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xebdd,
        backgroundColor: 0x000000,
        points: 18.0,
        maxDistance: 13.0,
        spacing: 13.0,
        showDots: false,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        height: "100dvh",
        zIndex: -444, 
        
      }}
    />
  );
};

export default VantaNet;
