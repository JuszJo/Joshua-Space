const About = () => {
    return (
        <div id="about" className="section-about-cont">
            <section className="section-about-flex">
                <div className="section-about">
                    <section className="section-about-h1">
                        <h1><span>/About</span></h1>
                    </section>
                    <section className="section-about-article">
                        <article>I’m a web developer that makes responsive Static and Dynamic webpages to meet the needs of those who require my services. 
                            In my free time, i enjoy programming Games,
                            Visualizing Data and making Simulations of real-time events.
                        </article>
                    </section>
                    <section className="section-about-tech">
                        <p>Technologies I work with;<br/><br/>
                            FrontEnd: HTML, CSS,  JavaScript, React.<br/><br/>
                            Back-End: Node.js, Express.js.<br/><br/>
                            Database: MongoDB, MongoDB Atlas.<br/><br/>
                        </p>
                        <button>My Works</button>
                    </section>
                </div>
            </section>
        </div>
    );
}
export default About;
