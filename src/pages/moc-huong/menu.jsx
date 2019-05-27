import React from 'react'

class Menu extends React.Component {
   
    render() {
        let data = this.props.data || {}
        console.log("xxxxxxxxxxxxxxxxxxxxxx", data)
        return (
            <div id="page-top">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="./img/logo.png" alt="" /></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                            
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">tản mạn Hương garden</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#portfolio"><i className="icon-top fab fa-facebook-square"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#team"><i className="icon-top fas fa-shopping-cart"></i></a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To {data.name}</div>
                            <div className="intro-heading text-uppercase">{data.slogan}</div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Menu