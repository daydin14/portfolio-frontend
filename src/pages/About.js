import { useState, useEffect } from "react";

function About(props) {

    const [about, setAbout] = useState("");

    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);

        // console.log(props);
        // console.log(data);
    };

    console.log(about);

    useEffect(() => {getAboutData()});

    const loaded = () => {
        return(
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <img src={about.headshot} alt="img" />
                <p>{about.bio}</p>
            </div>
        )
    };

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;