// REACT
import { useEffect, useState } from 'react';

// COMPONENTS
import Slider from "../../components/slider/Slider.jsx"

function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://firestore.googleapis.com/v1/projects/monportfolio-8dd08/databases/(default)/documents/works");
                const data = await response.json();
                const projectsFields = data.documents.map(doc => doc.fields);
                setProjects(projectsFields);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <Slider projects={projects} />
        </main>
    )
}

export default Home;
