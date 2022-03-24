import Table from "./nav";

const Intro = () => {
    return (
    <div className="section1">
        <Table />
        <section className="headerwrap">
            <section className="header">
                <h1 className="intro">Hi, I'm Joshua.<br/>Aspiring Fullstack Dev.</h1>
                <p>Studying Software Engineering and learning about Game Dev and Web Development. 
                    Currently love Data Visualization and Simulations.
                </p>
                <div>
                    
                </div>
            </section>   
            <section className="image-cont">
                <img src="joshua.png" className="image"></img>
            </section>
        </section>
    </div>
    );
}
export default Intro;