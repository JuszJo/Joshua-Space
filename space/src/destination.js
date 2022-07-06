import { useEffect, useRef, useState } from "react"
import Head from "./head"

import moonImage from './assets/destination/image-moon.webp'
import marsImage from './assets/destination/image-mars.webp'
import europaImage from './assets/destination/image-europa.webp'
import titanImage from './assets/destination/image-titan.webp'

const Destination = () => {
    var [moon, setMoon] = useState({})
    var [mars, setMars] = useState({})
    var [europa, setEuropa] = useState({})
    var [titan, setTitan] = useState({})

    document.body.classList.remove('crew')

    document.body.classList.remove('technology')

    document.body.classList.remove('image')

    document.body.classList.add('destination')

    if(document.body.classList.contains('image')) {
        document.body.style.backgroundColor = 'black'

        document.body.classList.remove('image')

        document.body.classList.add('destination')
    }

    document.body.classList.add('destination')

    document.body.style.backgroundColor = 'black'

    useEffect(() => {
        function destination() {
            try {
                fetch('data.json')
                .then(res => {
                    res.json()
                    .then(data => {
                        console.log(data.destinations)

                        setMoon(data.destinations[0])
                        setMars(data.destinations[1])
                        setEuropa(data.destinations[2])
                        setTitan(data.destinations[3])
                    })
                })

            } catch (error) {
                console.log(error)
            }
        }
        destination()
    }, [])

    var article = useRef(null)
    var planetImage = useRef(null)
    var h1 = useRef(null)
    var moonSpan = useRef(null)
    var marsSpan = useRef(null)
    var europaSpan = useRef(null)
    var titanSpan = useRef(null)
    var avgDistance = useRef(null)
    var avgTime = useRef(null)

    var selected = moonSpan

    function changeData(object, span, image) {
        var p = document.createElement('p')

        var child = ''
            
        planetImage.current.src = image

        planetImage.current.classList.add('opacity')
        
        selected.current.classList.remove('selected')
        
        selected = span

        selected.current.classList.add('selected')
        
        h1.current.innerHTML = `${object.name}`
        
        if(article.current.hasChildNodes()) {
            child = article.current.lastElementChild
            
            article.current.removeChild(child)
        }
        p.innerHTML = `${object.description}`
        
        p.classList.add('choice-description')

        avgDistance.current.innerHTML = `${object.distance}`
        avgTime.current.innerHTML = `${object.travel}`
        
        article.current.appendChild(p)
    }

    function addAnimate() {
        planetImage.current.classList.remove('opacity')

        planetImage.current.classList.add('first')

        setTimeout(() => {
            planetImage.current.classList.remove('first')
        }, 1000)
    }

    function Choice(e) {
        var key = e.target.innerHTML

        switch (key) {
            case 'Moon':
                changeData(moon, moonSpan, moonImage)

                break;

            case 'Mars':
                changeData(mars, marsSpan, marsImage)

                break;

            case 'Europa':
                changeData(europa, europaSpan, europaImage)

                break;

            case 'Titan':
                changeData(titan, titanSpan, titanImage)

                break;

            default:

                break;
        }

    }

    return(
        <div>
            <Head />
            <div className="destomo">
                <div className="omo2">
                    <section className="destination-header">
                        <p>PICK YOUR DESTINATION</p>
                    </section>
                    <section className="destination-image-wrap">
                        <img ref={planetImage} className="destination-image opacity" onLoad={() => {addAnimate()}} alt="destination" src={moonImage} />
                    </section>
                </div>
                <div className="omo3">
                    <div className="choose-destination-wrap">
                        <section className="choose-destination">
                            <span ref={moonSpan} className="moon-span selected" onClick={Choice}>{moon.name}</span>
                            <span ref={marsSpan} className="mars-span" onClick={Choice}>{mars.name}</span>
                            <span ref={europaSpan} className="europa-span" onClick={Choice}>{europa.name}</span>
                            <span ref={titanSpan} className="titan-span" onClick={Choice}>{titan.name}</span>
                        </section>
                    </div>
                    <section className="choice-wrap">
                        <h1 className="choice-header" ref={h1}>MOON</h1>
                        <article ref={article}>
                            <p className="choice-description">{moon.description}</p>
                        </article>
                    </section>
                    <section className="destination-footer">
                        <section className="destination-footer-wrap1">
                            <p className="destination-footer-distance">AVG. DISTANCE</p>
                            <p ref={avgDistance} className="destination-footer-distance-value">{moon.distance}</p>
                        </section>
                        <section className="destination-footer-wrap2">
                            <p className="destination-footer-travel">EST. TRAVEL TIME</p>
                            <p ref={avgTime} className="destination-footer-travel-value">{moon.travel}</p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Destination