import { Link } from "react-router-dom"

const Footer = () => {
    
    return(
        <footer>
            <div className="footer-flex">
                <div className="shape-explore2">
                    <Link to='/destination'>
                        <div className="shape-explore">
                            <p>EXPLORE</p>
                        </div>
                    </Link>

                </div>
            </div>
        </footer>
    )
}

export default Footer