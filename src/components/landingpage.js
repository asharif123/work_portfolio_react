import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
class LandingPage extends Component {
    render() {
        return (
            <div className="main-content" style={{width: '100%', height: '10%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://avatars2.githubusercontent.com/u/49471791?s=460&u=8a9951378043e2ca1436587d66f5556a8fbefb79&v=4"
                        alt="avatar"
                        className="avatar-image"/>                   
                    <div className="banner-text">
                        <h1>Front End Web Developer</h1>
                        <hr/>
                        <p> HTML | CSS | Bootstrap | Javascript | React | Python</p>
                        <div className="social-links">

                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/awad-sharif/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/* GITHUB */}
                            <a href="https://github.com/asharif123" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                            {/* Instagram
                            <a href="https://github.com/asharif123" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram-square"  aria-hidden="true"/>
                            </a> */}




                        </div>
                    </div>
                    </Cell>
                </Grid>

            </div>
            
        )
    }
}

export default LandingPage;