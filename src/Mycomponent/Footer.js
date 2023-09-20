import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        width: "100%",
        marginTop: "30px"
    }

    return (
        <div style={footerStyle}>
            <div>
                <p className="bg-dark text-light py-3 text-center">Copyright &copy; LearningReact </p>
            </div>
        </div>
    )
}
