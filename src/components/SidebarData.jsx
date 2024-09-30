import { Portrait, github, linkedin, URLogo, css, html, javascript, reactjs, java,python, cicon, sql, rlogo } from '../assets';

const SidebarData = [
    {
        label: "About",
        content: (
        <div style = {{ fontSize: '20px' }}>
            <div className = "about-cover"></div>
            <img src = {URLogo} className = "UR-logo" alt = "Alexandra de'Ath" draggable="false"/>
            <img src = {Portrait} className = "about-portrait" alt = "Alexandra de'Ath" draggable="false"/>
            <a href="https://github.com/Alexde-Ath" target="_blank" rel="noopener noreferrer">
                <img src = {github} className = "about-github" alt = "Alexandra de'Ath" draggable="false"/>
            </a>
            <a href="https://linkedin.com/in/alexandra-de-ath333" target="_blank" rel="noopener noreferrer">
                <img src = {linkedin} className = "about-linkedin" alt = "Alexandra de'Ath" draggable="false"/> 
            </a>
            <p className = "text-2xl my-2">I am a senior studying a <strong className="text-[#00205B]">B.S in Computer Science</strong> at the <strong className="text-[#00205B]">University of Rochester.</strong></p> 
            <p className = "text-1xl">My path to CS has been very curvy, from exploring mechanical Engineering to Bussiness, I finally found my way to CS!</p>
            <p>I eventually chose to minor in Chinese and focus on applied economics. Outside of academics, I enjoy playing the flute, soccer, drawing, and have a passion for trying new foods!</p>
            <p className = "ml-30 text-navy"> Connect with me! </p>

        </div>
    )
    },
    {
        label: "CS Courses",
        content: 
        <div className = "text-[15px]">
            <ul>
                {"Web Programming: HTTP, JavaScript, CSS, the LAMP stack, XML, JSON, Ajax,  Computer Models & Limitations: Finite-state machines and pumping lemmas, CFL, Turing machines,  Computer Organization: C, RISCV, RUST,  Intro to AI: Java C LISP,  Data Structures & Algorithms: Java, C ,  Computation & Formal Systems: C Java".split(/,(?=\s\s\w)/).map((item, index) => {
                    const parts = item.split(':');
                    return <li key = {index}>
                        <strong className = "text-[#00205B] text-[22px]">
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
        content:
        <div className="grid grid-cols-4 gap-10 gap-y-12">
            <img src={cicon} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={java} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={python} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={rlogo} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={sql} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={javascript} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={html} className="languages" alt="Alexandra de'Ath" draggable="false"/>
            <img src={css} className="languages" alt="Alexandra de'Ath" draggable="false"/>
        </div>
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
        label: "Certificates",
        content: "Linkedin"
    },
];

const SidebarData2 = [
    {
        label: "Headstarter",
        content: "hi"
    },
    {
        label: "RBC",
        content: "Summer Internship"
    },
    {
        label: "Retail",
        content: "JCrew, Ann Taylor"
    },
];

export { SidebarData, SidebarData2 };