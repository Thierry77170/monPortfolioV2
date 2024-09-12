// REACT
import { useEffect, useState } from 'react';

// VARIABLES
import arrowLeft from '../../assets/icons/chevron-left.157x256.png';
import arrowRight from '../../assets/icons/chevron-right.157x256.png';

// COMPONENTS
import ProjectCard from "../projectCard/ProjectCard";
import BtnSlider from "../btnSlider/BtnSlider";
import Dropdown from "../dropdown/Dropdown.jsx";

// STYLE
import './slider.scss';

function Slider({projects}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const [centralDescription, setCentralDescription] = useState('');
  const [centralTechno1, setCentralTechno1] = useState('');
  const [centralTechno2, setCentralTechno2] = useState('');
  const [centralTechno3, setCentralTechno3] = useState('');
  const [centralTechno4, setCentralTechno4] = useState('');
 
  useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 880);
        setIsVerySmallScreen(window.innerWidth < 560);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
        const middleIndex = Math.floor(projects.length / 2);
        const adjustedIndex = (currentIndex + middleIndex) % projects.length;
        setCentralDescription(projects[adjustedIndex].description?.stringValue || '');
        setCentralTechno1(projects[adjustedIndex].techno1?.stringValue || '');
        setCentralTechno2(projects[adjustedIndex].techno2?.stringValue || '');
        setCentralTechno3(projects[adjustedIndex].techno3?.stringValue || '');
        setCentralTechno4(projects[adjustedIndex].techno4?.stringValue || '');
    } else {
        setCentralDescription('');
        setCentralTechno1('');
        setCentralTechno2('');
        setCentralTechno3('');
        setCentralTechno4('');
    }
  }, [currentIndex, projects]);
  
  const getRotateY = (index, total) => {
      if (isVerySmallScreen) {
        return 0;
      }
      const middleIndex = Math.floor(total / 2);
      const middleRange = [middleIndex - 2, middleIndex - 1, middleIndex, middleIndex + 1, middleIndex + 2];
      const adjustedIndex = (index - currentIndex + total) % total;
      if (adjustedIndex < middleRange[0]) {
        return -45;
      } else if (adjustedIndex > middleRange[4]) {
        return 45;
      } else {
        switch (adjustedIndex - (middleIndex - 2)) {
          case 0: return -45;
          case 1: return -22.5;
          case 2: return 0;
          case 3: return 22.5;
          case 4: return 45;
          default: return 0;
        }
      }
  };

  const getTranslateZ = (index, total) => {
      if (isVerySmallScreen) {
        return 0;
      }
      const middleIndex = Math.floor(total / 2);
      const middleRange = [middleIndex - 2, middleIndex - 1, middleIndex, middleIndex + 1, middleIndex + 2];
      const adjustedIndex = (index - currentIndex + total) % total;
      if (adjustedIndex < middleRange[0] || adjustedIndex > middleRange[4]) {
        return isSmallScreen ? 300 : 500;
      } else {
        switch (adjustedIndex - (middleIndex - 2)) {
          case 0: return isSmallScreen ? 260 : 400;
          case 1: return isSmallScreen ? 280 : 450;
          case 2: return isSmallScreen ? 300 : 500;
          case 3: return isSmallScreen ? 280 : 450;
          case 4: return isSmallScreen ? 260 : 400;
          default: return isSmallScreen ? 300 : 500;
      }
    }
  };

  const getOpacity = (index, total) => {
    const middleIndex = Math.floor(total / 2);
    const middleRange = [middleIndex - 2, middleIndex - 1, middleIndex, middleIndex + 1, middleIndex + 2];
    const adjustedIndex = (index - currentIndex + total) % total;
    if (adjustedIndex < middleRange[0] || adjustedIndex > middleRange[4]) {
      return 0;
    } else {
      switch (adjustedIndex - (middleIndex - 2)) {
        case 0: return isVerySmallScreen ? 0 : 0.7;
        case 1: return isVerySmallScreen ? 0 : 0.85;
        case 2: return isVerySmallScreen ? 1 : 1;
        case 3: return isVerySmallScreen ? 0 : 0.85;
        case 4: return isVerySmallScreen ? 0 : 0.7;
        default: return 1;
      }
    }
  };

  const handleClickPrevBtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }

  const handleClickNextBtn = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % projects.length);
  }

  return (
    <>
      <section className='sliderContainer'>
        <h2 className='sliderContainer__title'>Mes réalisations</h2>
        <div className='sliderContainer__slider'>
            {projects.map((project, index) => {
                const rotateY = getRotateY(index, projects.length);
                const translateZ = getTranslateZ(index, projects.length);
                const opacity = getOpacity(index, projects.length);
                const style = {
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    opacity: opacity
                }
                return <ProjectCard 
                  key={index} 
                  project={project} 
                  style={style} 
                  />
            })}
        </div>
        <div className='sliderContainer__btnContainer'>
            <BtnSlider 
                src={arrowLeft} 
                alt="flèche gauche"
                onClick={handleClickPrevBtn}
            />
            <BtnSlider 
                src={arrowRight} 
                alt="flèche droite"
                onClick={handleClickNextBtn}
            />
        </div>
      </section>
      <Dropdown 
        description={centralDescription}
        techno1={centralTechno1}
        techno2={centralTechno2}
        techno3={centralTechno3}
        techno4={centralTechno4}
      />
    </>
  )
}

export default Slider;