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
import Main from "./main"


ReactDOM.render(<Main />, document.getElementById("root"));
//ReactDOM.render(main, document.getElementById("main"));
