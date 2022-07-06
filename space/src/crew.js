import { useEffect, useState, useRef } from "react"
import Head from "./head"

import crewImage1 from './assets/crew/image-douglas-hurley.webp'
import crewImage2 from './assets/crew/image-mark-shuttleworth.webp'
import crewImage3 from './assets/crew/image-victor-glover.webp'
import crewImage4 from './assets/crew/image-anousheh-ansari.webp'

const Crew = () => {
    var [crew1, setCrew1] = useState({})
    var [crew2, setCrew2] = useState({})
    var [crew3, setCrew3] = useState({})
    var [crew4, setCrew4] = useState({})

    document.body.classList.add('crew')

    document.body.classList.remove('technology')

    document.body.classList.remove('image')

    document.body.classList.remove('destination')

    if(document.body.classList.contains('image')) {
        document.body.classList.remove('image')

        document.body.style.backgroundColor = 'black'
        
        document.body.classList.add('crew')
    }

    document.body.classList.remove('tabdes')

    document.body.classList.remove('technology')

    document.body.classList.add('crew')
    
    document.body.style.backgroundColor = 'black'

    useEffect(() => {

        function crew() {
            try {
                fetch('data.json')
                .then(res => {
                    res.json()
                    .then(data => {
                        console.log(data.crew)

                        setCrew1(data.crew[0])
                        setCrew2(data.crew[1])
                        setCrew3(data.crew[2])
                        setCrew4(data.crew[3])
                    })
                })

            } catch (error) {
                console.log(error)
            }
        }
        crew()
    }, [])

    var crewImage = useRef(null)
    var crew1Span = useRef(null)
    var crew2Span = useRef(null)
    var crew3Span = useRef(null)
    var crew4Span = useRef(null)
    var role = useRef(null)
    var name = useRef(null)
    var bio = useRef(null)
    var article = useRef(null)

    var selected = crew1Span

    function addData(object, span, image) {
        var p = document.createElement('p')

        var child = ''
            
        crewImage.current.src = image

        crewImage.current.classList.add('opacity')

        selected.current.classList.remove('circle-select')

        selected = span

        selected.current.classList.add('circle-select')

        name.current.innerHTML = `${object.name}`

        role.current.innerHTML = `${object.role}`

        if(article.current.hasChildNodes()) {
            child = article.current.lastElementChild
            
            article.current.removeChild(child)
        }

        p.innerHTML = `${object.bio}`

        article.current.appendChild(p)
    }

    function addAnimate() {
        crewImage.current.classList.remove('opacity')

        crewImage.current.classList.add('first')

        setTimeout(() => {
            crewImage.current.classList.remove('first')
        }, 1000)
    }

    function choice(e) {
        var key = true

        switch (key) {
            case e.target.classList.contains('crew1-div'):
                addData(crew1, crew1Span, crewImage1)

                break;

            case e.target.classList.contains('crew2-div'):
                addData(crew2, crew2Span, crewImage2)

                break;

            case e.target.classList.contains('crew3-div'):
                addData(crew3, crew3Span, crewImage3)

                break;

            case e.target.classList.contains('crew4-div'):
                addData(crew4, crew4Span, crewImage4)

                break;
        
            default:
                break;
        }

    }

    return(
        <div className="crew">
            <Head />
            <section className="crew-header">
                <p>MEET YOUR CREW</p>
            </section>
            <div className="tab">
                <section className="crew-image-wrap">
                    <div>
                        <section>
                            <img className="crew-image" onLoad={addAnimate} ref={crewImage} src={crewImage1} />
                        </section>
                    </div>
                </section>
                <div className="tab2">
                    <div className="choose-crew-wrap">
                        <section className="choose-crew">
                            <div ref={crew1Span} onClick={choice} className="crew1-div circle-select"></div>
                            <div ref={crew2Span} onClick={choice} className="crew2-div"></div>
                            <div ref={crew3Span} onClick={choice} className="crew3-div"></div>
                            <div ref={crew4Span} onClick={choice} className="crew4-div"></div>
                        </section>
                    </div>
                    <section className="crew-choice-wrap">
                        <section className="crew-choice">
                            <h3 ref={role} className="crew-choice-header1">{crew1.role}</h3>
                            <h1 ref={name} className="crew-choice-header2">{crew1.name}</h1>
                            <article ref={article}>
                                <p ref={bio} className="crew-choice-description">{crew1.bio}</p>
                            </article>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Crew