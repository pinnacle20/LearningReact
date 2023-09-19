import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "fixed",
        width: "100%",
        bottom: "0px",
    }

    return (
        <div style={footerStyle}>
            <div>
                <p className="bg-dark text-light py-3 text-center">Copyright &copy; LearningReact </p>
            </div>
        </div>
    )
}
