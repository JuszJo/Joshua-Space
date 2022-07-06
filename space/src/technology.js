import { useState, useEffect, useRef } from "react";
import Head from "./head";


import techImage1 from "./assets/technology/image-launch-vehicle-landscape.jpg"
import techImage2 from "./assets/technology/image-spaceport-landscape.jpg"
import techImage3 from "./assets/technology/image-space-capsule-landscape.jpg"

import techImage4 from "./assets/technology/image-launch-vehicle-portrait.jpg"
import techImage5 from "./assets/technology/image-spaceport-portrait.jpg"
import techImage6 from "./assets/technology/image-space-capsule-portrait.jpg"

const Technology = () => {
    var [tech1, setTech1] = useState({})
    var [tech2, setTech2] = useState({})
    var [tech3, setTech3] = useState({})

    document.body.classList.remove('crew')

    document.body.classList.add('technology')

    document.body.classList.remove('image')

    document.body.classList.remove('destination')

    if(document.body.classList.contains('image')) {
        document.body.classList.remove('image')

        document.body.style.backgroundColor = 'black'

        document.body.classList.add('technology')
    }

    document.body.classList.remove('crew')

    document.body.classList.add('technology')
    
    document.body.style.backgroundColor = 'black'

    useEffect(() => {
        function technology() {
            try {
                fetch('data.json')
                .then(res => {
                    res.json()
                    .then(data => {
                        console.log(data.technology)

                        setTech1(data.technology[0])
                        setTech2(data.technology[1])
                        setTech3(data.technology[2])
                    })
                })

            } catch (error) {
                console.log(error)
            }
        }
        technology()
    }, [])

    var techImage = useRef(null)
    var techName = useRef(null)
    var techDesc = useRef(null)
    var techSpan1 = useRef(null)
    var techSpan2 = useRef(null)
    var techSpan3 = useRef(null)
    var article = useRef(null)

    var selected = techSpan1

    function addData(object, span, image) {
        var p = document.createElement('p')

        var child = ''
            
        techImage.current.src = image

        techImage.current.classList.add('opacity')

        selected.current.classList.remove('tech-choice')

        selected = span

        selected.current.classList.add('tech-choice')

        techName.current.innerHTML = `${object.name}`

        if(article.current.hasChildNodes()) {
            child = article.current.lastElementChild
            
            article.current.removeChild(child)
        }

        p.innerHTML = `${object.description}`

        article.current.appendChild(p)
    }

    function addAnimate() {
        techImage.current.classList.remove('opacity')

        techImage.current.classList.add('first')

        setTimeout(() => {
            techImage.current.classList.remove('first')
        }, 1000)
    }

    function choice(e) {
        var key = true
        
        switch (key) {
            case e.target.classList.contains('tech-value1'):
                if (document.body.getBoundingClientRect().width >= 1280) {
                    addData(tech1, techSpan1, techImage4)
                    break
                }
                else {
                    addData(tech1, techSpan1, techImage1)
                }

                break;
        
            case e.target.classList.contains('tech-value2'):
                if (document.body.getBoundingClientRect().width >= 1280) {
                    addData(tech2, techSpan2, techImage5)
                    break
                }
                else {
                    addData(tech2, techSpan2, techImage2)
                }

                break;
        
            case e.target.classList.contains('tech-value3'):
                if (document.body.getBoundingClientRect().width >= 1280) {
                    addData(tech3, techSpan3, techImage6)
                    break
                }
                else {
                    addData(tech3, techSpan3, techImage3)
                }
                
                break;
        
            default:

                break;
        }
    }

    return(
        <div className="technology">
            <Head />
            <section className="technology-header">
                <p>SPACE LAUNCH 101</p>
            </section>
            <div className="techomo2">
                <section className="tech-image-wrap">
                    <div>
                        <section>
                            <img ref={techImage} onLoad={addAnimate} className="tech-image" alt="technology used" src={(document.body.getBoundingClientRect().width >= 1280) ? techImage4 :techImage1} />
                        </section>
                    </div>
                </section>
                <div className="techomo">
                    <section className="tech-selection-wrap">
                        <div ref={techSpan1} className="tech-selection1 tech-choice">
                            <div onClick={choice} className="tech-value1">
                                <p>1</p>
                            </div>
                        </div>
                        <div ref={techSpan2} className="tech-selection2">
                            <div onClick={choice} className="tech-value2">
                                <p>2</p>
                            </div>
                        </div>
                        <div ref={techSpan3} className="tech-selection3">
                            <div onClick={choice} className="tech-value3">
                                <p>3</p>
                            </div>
                        </div>
                    </section>
                    <section className="technology-main">
                        <div className="technology-wrap">
                            <h3>THE TERMINOLOGY...</h3>
                            <h1 ref={techName} className="technology-type">{tech1.name}</h1>
                            <article ref={article} className="technology-article">
                                <p ref={techDesc} className="technology-description">{tech1.description}</p>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Technology