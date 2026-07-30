import { useState, useEffect, useRef } from 'react';
import IntroScreen from '../components/IntroScreen';
import HeartAnimation from '../components/HeartAnimation';
import FloatingText from '../components/FloatingText';
import LoveLetter from '../components/LoveLetter';
import PhotoSlider from '../components/PhotoSlider';
import SurpriseButton from '../components/SurpriseButton';
import ParticleHeart from '../components/ParticleHeart';
import SurpriseModal from '../components/SurpriseModal';
import FlowerPetals from '../components/FlowerPetals';
import SweetQuotes from '../components/SweetQuotes';
import AnimatedImageGrid from '../components/AnimatedImageGrid';
import AnimatedVideoSection from "../components/AnimatedVideoSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.3;
  }
}, []);

const handleMusicToggle = () => {
  if (!audioRef.current) return;

  if (musicPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }

  setMusicPlaying(!musicPlaying);
};

 const handleEnterSite = () => {
  setShowIntro(false);

  setTimeout(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      setMusicPlaying(true);
    }
  }, 200);
};

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    setShowModal(true);
  };

  if (showIntro) {
    return <IntroScreen onEnter={handleEnterSite} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden romantic-bg">
      {/* Flower Petals */}
      <FlowerPetals />
      
      {/* Animated Background Elements */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>💖</div>
        ))}
      </div>

      {/* Music Control */}
    <button
      onClick={handleMusicToggle}
      className="fixed top-4 right-4 z-50 bg-pink-500/20 backdrop-blur-md rounded-full p-3 text-white text-xl hover:bg-pink-500/40 transition-all"
    >
      {musicPlaying ? "🎵" : "🔇"}
    </button>

      <div className="twinkling-stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`}>✨</div>
        ))}
      </div>

      {/* Sweet Quotes */}
      <SweetQuotes />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 page-enter">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <HeartAnimation />
          <FloatingText />
        </div>

        {/* Love Letter Section */}
        <div className="w-full max-w-4xl mb-12">
          <LoveLetter />
        </div>

        {/* Photo Slider Section */}
        <div className="w-full max-w-4xl mb-12">
          <PhotoSlider />
        </div>

        {/* Animated Image Grid Section */}
        <div className="w-full max-w-6xl mb-12">
          <AnimatedImageGrid />
        </div>

{/* Animated Video Section */}
<div className="w-full max-w-6xl mb-12">
  <AnimatedVideoSection />
</div>

        {/* Surprise Button */}
        <div className="mb-12">
          <SurpriseButton onReveal={handleSurpriseClick} />
        </div>

        {/* Surprise Animation */}
        {showSurprise && !showModal && <ParticleHeart />}
      </div>

           {/* Surprise Modal */}
      <SurpriseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      
            {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Index;

