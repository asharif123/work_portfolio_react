import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() {
        return (
            <div className="contact-main">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D35AQEjJCAynOs2XQ/profile-framedphoto-shrink_200_200/0?e=1601884800&v=beta&t=9VcPLvYc1zAU-cb7UgQYOlDLuMTmnQyXPJAIgU7JTHU" alt="avatar" style={{height: '250px'}}/>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contacts-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (714) 552-7522</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        awadsharif9@gmail.com</ListItemContent>

                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        Skype ID: azsharif123</ListItemContent>

                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;