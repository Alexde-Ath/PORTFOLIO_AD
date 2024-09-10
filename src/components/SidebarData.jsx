import { Portrait, github, linkedin } from '../assets';

const SidebarData = [
    {
        label: "About",
        content: (
        <div className = "mt-0" style = {{ fontSize: '20px' }}>
            <img src = {Portrait} className = "about-portrait" alt = "Alexandra de'Ath" />
            <p style = {{fontSize: '25px'}}>I am a senior studying a <strong>B.S in Computer Science</strong> at the <strong>University of Rochester</strong>.</p> 
            <p>Outside of academics, I enjoy playing the flute, soccer, drawing, and have a passion for trying new foods!</p> 
            <p style = {{color: 'Navy'}}> **NOTE: If you prefer seeing a list of all tabs, click the burger at the top left :)"</p>
        </div>
    )
    },
    {
        label: "Courses",
        content: "Web Programming, Computer Models & Limitations, Computer Organization, Intro to AI, Data Structures & Algorithms, Computation & Formal Systems"
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