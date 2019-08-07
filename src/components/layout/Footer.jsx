import React from 'react'

function Footer() {
    return (
        <div className="row" style={stickyFooter}>
            <div className="col-md-12">
                <div className="footer p-3 mt-4 text-center bg-dark text-light">
                    Developed By:
                    <span className="text-warning font-weight-normal">Hiroshi Tsutsui</span>
                    , Using <i className="fab fa-react" />React JS &amp; Redux JS
                    Integrated with external movies data API
                    <a href="http://www.omdbapi.com/"
                        target="_blank"
                        rel="noopener noreferrer">OMDB</a>

                </div>
            </div>
        </div>
    )
}

const stickyFooter = {
    position: 'fixed',
    width: '110%',
    bottom: '0'

}


export default Footer