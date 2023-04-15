import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <div className="haye">
                <div className="footer_contenet">
                    <div className="logo">
                        <Link to="/">
                        <img src="/Images/Logo_Cadaan.png" alt="Logo" />
                        <p>Ixsaan</p>
                        </Link>
                    </div>
                    <div className="q_footer">
                        <p>developed by <a href="tel:0634645195">Eng Jumhuur </a><span>&copy; 2023</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer