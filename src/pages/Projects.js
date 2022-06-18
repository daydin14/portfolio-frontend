import { useState, useEffect } from "react";

function Projects(props) {
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {getProjectsData()}, []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt="img"/>
                <a href={project.live}>
                    <button>live site</button>
                </a>
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;