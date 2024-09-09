// REACT
import { useEffect, useState } from 'react';

// COMPONENTS
import ProjectCard from "../projectCard/ProjectCard";
import BtnSlider from "../btnSlider/BtnSlider";

// STYLE
import './slider.scss';

function Slider() {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://firestore.googleapis.com/v1/projects/monportfolio-8dd08/databases/(default)/documents/works");
                const data = await response.json();
                const projectsFields = data.documents.map(doc => doc.fields);
                setProjects(projectsFields);
                console.log("fetchData", projectsFields);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 880);
          setIsVerySmallScreen(window.innerWidth < 560);
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // Appel initial pour définir l'état initial pour tablette
      return () => window.removeEventListener('resize', handleResize);
    }, []);

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

  console.log(currentIndex);

  const handleClickPrevBtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }

  const handleClickNextBtn = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % projects.length);
  }

    return (
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
                    value="<" 
                    onClick={handleClickPrevBtn}
                />
                <BtnSlider 
                    value=">" 
                    onClick={handleClickNextBtn}
                />
            </div>
        </section> 
    )
}

export default Slider;