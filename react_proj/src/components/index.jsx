import React, { useState, useEffect } from "react";

function Portfolio() {

    const [skills, setskills] = useState([]);
    const [contactinfo, setcontactinfo] = useState([]);
    useEffect(() => {
        const getskills = async () => {
            let response = await fetch("https://nodejs-y11g.onrender.com/api/project");
            let data = await response.json();
            setskills(data);
        }
        const getcontactinfo = async () => {
            let response = await fetch("https://nodejs-y11g.onrender.com/api/contact");
            let data = await response.json();
            setcontactinfo(data);
        };

        getcontactinfo();
        getskills();
    }, []);

    return (
        <div>

            <div className="about-container">
                <div className="about">
                    <h1>Hey,</h1>
                    <h1>I am Khushi Patel</h1>
                    <h2>Web Designer</h2>
                    <p>I'm currently pursuing PG Diploma Web Development. I like working on different designing project and wish
                        to make a career out of it. I am a practical person with amiable disposition and strong cultural values. I
                        firmly
                        believe in accuracy and precision in whatever I do. I believe that my skills will provide more productivity in
                        the
                        organisation.</p>
                    <button className="more">Learn More</button>
                </div>
                <div className="profile-pic">
                    <img src="img/profile.jpg" alt="Profile" />
                </div>
            </div>
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img src={skill.img} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="contact">
                <div className="social">
                    {contactinfo.map((contact, index) => (
                        <div key={index} className="contact-item">
                            <p>{contact.platform}</p>
                            <a href={contact.url}>{contact.url}</a>
                        </div>
                    ))}
                </div>
                <div className="vl"></div>
                <div className="info">
                    <h3>Information:</h3>
                    <p>Email - <br />khushi3503@gmail.com</p>
                    <a href="file:///C:/Users/khushi/Downloads/Professional_Resume.pdf" download>
                        <button className="btn">Download CV</button>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;








