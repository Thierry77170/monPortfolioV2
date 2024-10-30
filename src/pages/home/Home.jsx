// REACT
import { useEffect, useState } from 'react';

// COMPONENTS
import Slider from "../../components/slider/Slider.jsx";
import Dropdown from "../../components/dropdown/Dropdown.jsx";

// STYLE
import './home.scss';

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
            <section className='mesRealisationsContainer'>
                <Slider projects={projects} />
            </section>
            <section className='mesServicesContainer'>
                <h2 className='mesServicesContainer__title'>Mes servives</h2>
                <Dropdown 
                    title="Création d'Applications Web Complètes et Responsives"
                    description="Description : Créer une application web complète et responsive pour permettre à l’entreprise ou au client de vendre ses produits et services en ligne, sur tous types d’appareils."
                    exemple="Exemple de Réalisation : Développement d'une boutique en ligne pour une marque de vêtements, accessible sur ordinateurs, tablettes et smartphones."
                />
                <Dropdown 
                    title="Dynamisation de Pages Web"
                    description="Description : Dynamiser des pages web pour mieux mettre en valeur les produits et services de l’entreprise ou du client."
                    exemple="Exemple de Réalisation : Ajout d'animations et d'interactions utilisateur pour rendre une page d'accueil plus engageante."
                />
                <Dropdown
                    title="Création d'Interfaces Communicantes avec le Back-End"
                    description="Description : Créer des interfaces communiquant avec le back-end du site pour élaborer des applications dynamiques et permettre aux clients de s’identifier sur le site."
                    exemple="Exemple de Réalisation : Développement d'un système de connexion utilisateur avec authentification sécurisée."
                />
                <Dropdown
                    title="Optimisation des Performances et Maintenance de Sites Web"
                    description="Description : Optimiser les performances et réaliser la maintenance de sites web déjà existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche."
                    exemple="Exemple de Réalisation : Audit et optimisation d'un site web pour améliorer le temps de chargement et le référencement SEO."
                />
                <Dropdown 
                    title="Gestion de Projet Web de A à Z"
                    description="Description : Gérer un projet web de A à Z : du chiffrage et découpage des tâches du projet à la présentation de la solution, en passant par la rédaction des spécifications techniques."
                    exemple="Exemple de Réalisation : Coordination d'un projet de refonte complète d'un site web, incluant la planification, le développement et la livraison."
                />
            </section>
        </main>
    )
}

export default Home;
