import { Portrait, github, linkedin, URLogo } from '../assets';

const SidebarData = [
    {
        label: "About",
        content: (
        <div style = {{ fontSize: '20px' }}>
            <div className = "about-cover"></div>
            <img src = {URLogo} className = "UR-logo" alt = "Alexandra de'Ath" />
            <img src = {Portrait} className = "about-portrait" alt = "Alexandra de'Ath" />
            <a href="https://github.com/Alexde-Ath" target="_blank" rel="noopener noreferrer">
                <img src = {github} className = "about-github" alt = "Alexandra de'Ath" />
            </a>
            <a href="https://linkedin.com/in/alexandra-de-ath333" target="_blank" rel="noopener noreferrer">
                <img src = {linkedin} className = "about-linkedin" alt = "Alexandra de'Ath" /> 
            </a>
            <p style = {{fontSize: '25px'}}>I am a senior studying a <strong>B.S in Computer Science</strong> at the <strong>University of Rochester</strong>.</p> 
            <p style = {{marginBottom: '30px', marginTop: '10px' }}>Outside of academics, I enjoy playing the flute, soccer, drawing, and have a passion for trying new foods!</p>
            <p style = {{color: 'Navy'}}> **NOTE: Click the burger at the top left for quick view :)</p>

        </div>
    )
    },
    {
        label: "Courses",
        content: 
        <div className = "text-10xl">
            <ul>
                {"Web Programming: HTTP, JavaScript, CSS, the LAMP stack, XML, JSON, Ajax, WebSockets, and modern MVC frameworks,  Computer Models & Limitations: JAVA,  Computer Organization:,  Intro to AI: Java C LISP,  Data Structures & Algorithms: C Java ,  Computation & Formal Systems: Rust C Java".split(/,(?=\s\s\w)/).map((item, index) => {
                    const parts = item.split(':');
                    return <li key = {index}>
                        <strong>
                            {parts[0]}
                        </strong>: {parts[1]}
                    </li>
                    })
                }
            </ul>
        </div>
    },
    {
        label: "Languages",
        content: "Java, C, Python, Html/CSS, React, JavaScript, R, SQL"
    },
    {
        label: "Skills",
        content: "Excel(Intermediate)/Microsoft office, Design in CAD (OnShape), MATLAB"
    },
    {
        label: "Leadership",
        content: "Stuff"
    },
    {
        label: "Certifications",
        content: "Linkedin"
    },
];

const SidebarData2 = [
    {
        label: "hi",
        content: "hi"
    },
    {
        label: "Courses",
        content: "content"
    },
    {
        label: "Languages",
        content: "content"
    },
    {
        label: "Skills",
        content: "content"
    },
    {
        label: "Leadership",
        content: "content"
    },
    {
        label: "Certifications",
        content: "content"
    },
];

export { SidebarData, SidebarData2 };