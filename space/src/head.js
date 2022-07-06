import React, { useRef } from "react"
import { Link } from "react-router-dom"

const Head = () => {
    var ul = useRef(null)

    document.body.classList.remove("stopScroll");
    
    /*function disableScroll() {
        // Get the current page scroll position
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    
    function enableScroll() {
        window.onscroll = function() {};
    }*/

    function disableScroll() {
        document.body.classList.add("stopScroll");
    }
      
    function enableScroll() {
        document.body.classList.remove("stopScroll");
    }

    function checkScroll() {
        ul.current.classList.contains('show') ? disableScroll() : enableScroll();
    }

    function menu() {
        ul.current.classList.toggle('show')
        
        checkScroll()
    }
    
    return(
        <header>
            <nav>
                <div className="shape"></div>
                <section>
                    <section className="trans">
                        <ul ref={ul}>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/destination'>DESTINATION</Link></li>
                            <li><Link to='/crew'>CREW</Link></li>
                            <li><Link to='/technology'>TECHNOLOGY</Link></li>
                        </ul>
                    </section>
                    <div className="menu"></div>
                    <div className="click" onClick={menu}></div>
                </section>
            </nav>
        </header>
    )
}

export default Head