import React, { Component } from 'react'
import {Cell, ProgressBar} from 'react-mdl';

export class Skills extends Component {
    render() {
        return (
            <div>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.skills} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /></div>

                </Cell>
            </div>
        )
    }
}

export default Skills
