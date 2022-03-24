const Project = () =>{
    return(
        <div className="project-cont" id="project">
            <div className="project-cont-h1-flex"><h1><span>/Projects</span></h1></div>
            <section className="project-flex">
                <section className="project">
                    <section>
                        <div className="project-items">
                            <a href="https://github.com/JuszJo/Form-with-database" target="_blank"><h2>Login Form</h2>
                            <p>Created a login form that accepts data from a user then submits them
                                to my MongoDB Atlas Cluster on the cloud.
                            </p>
                            <p className="project-items-tech">JavaScript(Node.js), HTML and CSS, MongoDB Atlas.</p>
                            </a>
                        </div>
                        <div className="project-items">
                            <a href="https://github.com/JuszJo/GPA-calc/tree/main" target="_blank"><h2>GPA Calculator</h2>
                            <p>This program calculates the Grade Point Average of a student with details being required
                                of the program.
                            </p>
                            <p className="project-items-tech">Java.</p>
                            </a>
                        </div>
                        <div className="project-items">
                            <a href="#home"><h2>Personal Webpage</h2>
                            <p>Created this personal website used to showcase my abilities as a Software Engineer.
                            </p>
                            <p className="project-items-tech">HTML and CSS, JavaScript(Node.js), React.</p>
                            </a>
                        </div>
                        <div className="project-items">
                            <a href="https://github.com/JuszJo/netflix-clone" target="_blank"><h2>Netflix Clone</h2>
                            <p>Created a clone of Netflix first section on their Login and Sign Up page.
                            </p>
                            <p className="project-items-tech">HTML and CSS</p>
                            </a>
                        </div>
                        <div className="project-items">
                            <a href="" target="_blank"><h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus laoreet ligula id lacus facilisis, eu pulvinar 
                                libero varius.
                            </p>
                            <p className="project-items-tech">JavaScript(Node.js), React, MongoDB</p>
                            </a>
                        </div>
                        <div className="project-items">
                            <a href="" target="_blank"><h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus laoreet ligula id lacus facilisis, eu pulvinar 
                                libero varius.
                            </p>
                            <p className="project-items-tech">JavaScript(Node.js), React, MongoDB</p>
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    );
}


export default Project;