/*import React from 'react';
import ReactDOM from 'react-dom';



const myfirstelement = <h1>Hello React!</h1>
const table = (
    <table>
        <thead>
        <tr>
            <th>Joshua</th>
        </tr>
        </thead>
    </table>
);
function Car(props) { return <h1>I am a {props.brand}!</h1>} 
//var Car = props => <h1>I am a {props.brand}!</h1>

var myelement = <Car brand = "ford" />


  

//const Name = () => `Joshua`;
const Name = () => <h1>Joshua</h1>

ReactDOM.render(myfirstelement, document.getElementById(`root`));
ReactDOM.render(table, document.getElementById(`man`));
ReactDOM.render(<Name />, document.getElementById(`man1`));
ReactDOM.render(myelement, document.getElementById(`man2`));
*/

import React from "react";
import ReactDOM from "react-dom";

const Intro = () => {
    return (
    <div className="section1">
        <Table />
        <div className="headerwrap">
            <section className="header">
                <h1 className="intro text-color">Hi, I'm Joshua.<br/>Aspiring Fullstack Dev.</h1>
                <p className="para text-color">Studying <span className="para2 text-color2">Software Engineering</span> and learning<br/> about
                <span className="para2 text-color2"> Game Dev</span></p>
            </section>   
            <section className="image">
                <img src="task.png" className="dev" />
            </section>
        </div>
    </div>
    );
}

const Table = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="" className="nav-items text-color">Home</a></li>
                <li><a href="" className="nav-items text-color">About</a></li>
                <li><a href="" className="nav-items text-color">Projects</a></li>
                <li><a href="" className="nav-items text-color">Contact</a></li>
            </ul>
        </nav>
    );
}

const main = <div id="reactmain"></div>


ReactDOM.render(<Intro />, document.getElementById("root"));
//ReactDOM.render(main, document.getElementById("main"));
