import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Education } from './education';
import { Experience } from './experience';
import { Skills } from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://avatars2.githubusercontent.com/u/49471791?s=460&u=8a9951378043e2ca1436587d66f5556a8fbefb79&v=4"
                                alt="avatar"
                                style={{height: '300px', width: '300px'}}
                            />
                        </div>
                        <div className="profile-info">
                            <h2 style={{paddingTop: '2em'}}>Awad Sharif</h2>
                            <h4 style={{color: 'gray'}}>Front-End Programmer</h4>
                            <hr style={{borderTop: '3px solid #833f52', width: '50%'}}/>
                            <p>I am currently a Mobile Tester at Google and I have recently completed my coding bootcamp with emphasis in HTML,CSS,Javascript,and Python for full-stack development.</p>
                            <p>A passionate full stack software developer with over 4 years of experience solving technical issues across QA/QC. An agile and proven quick learner eager to join a developer team and contribute impactful software solutions. </p>
                            <hr style={{borderTop: '3px solid #833f52', width: '50%'}}/>
                            <h5>Address</h5>
                            <p>9761 Johannah Avenue, Garden Grove, CA 92844</p>
                            <h5>Phone</h5>
                            <p>(714) 552-7522</p>
                            <h4>Email</h4>
                            <p>awadsharif9@gmail.com</p>
                            <h5>Web</h5>
                            <p>Deployed Website.com</p>
                            <hr style={{borderTop: '3px solid #833f52', width: '50%'}}/>
                        </div>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2008}
                            endYear={2013}
                            schoolName="University of California, Irvine"
                            degree="Bachelors of Science"
                            major= "Electrical Engineering - Specialization in Signals Processing"
                            />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear="Present"
                            jobName="Mobile Tester"
                            company="Google" 
                            
                            jobDescription="Ensured between 2-8 Google and Android devices per day on average met passing quality assurance criteria prior to their official public launch by utilizing different audio hardware testing processes.
                            Leverage QA and QC expertise to successfully develop and optimize audio quality testing processes across  different Android devices including Google Pixel and Motorola.
Led audio quality improvement on Google and Motorola devices to improve customer experience by creating internal bugs using Google’s internal bug system, “Buganizer”.
"
                        />

                        <Experience 
                            startYear={2017}
                            endYear={2018}
                            jobName="Field Test Engineer"
                            company="Spirent Telecommunications"
                            jobDescription="Analyzed user data and coordinated communications with field test engineers to ensure that multiple client prototype devices (LG,Samsung,Motorola,Alcatel) met passing audio quality and call performance criterias across different US markets including Midwest, Southwest, and East Coast regions.
Travelled across account markets testing for quality to provide engineers and leadership with recommendations to ensure  that T-Mobile LTE Band 66 Coverage had strong cellular coverage.
Collect and build reports for field test engineers and engineering managers to mitigate and reduce technical issues including call drops, weak signal and speed.
"
                        />
                        <h3>Other Experience</h3>

                        <Experience 
                            startYear="Apr 2017"
                            endYear="Jun 2017"
                            jobName="Technical Project Coordinator"
                            company="Crown Castle"

                        />

                        <Experience 
                            startYear="Nov 2015"
                            endYear="Apr 2017"
                            jobName="Field Test Engineerr"
                            company="Nextnav"

                        />

                        <Experience 
                            startYear="Mar 2014"
                            endYear="Jul 2015"
                            jobName="Field Test Engineer"
                            company="Motive Energy Telecommunications"

                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills 
                            skills="HTML"
                            progress={87}
                        />

                        <Skills 
                            skills="CSS"
                            progress={75}
                        />

                        <Skills 
                            skills="Javascript"
                            progress={70}
                        />

                        <Skills 
                            skills="React"
                            progress={61}
                        />

                        <Skills 
                            skills="Django"
                            progress={87}
                        />

                        <Skills 
                            skills="Python"
                            progress={80}
                        />

                        <Skills 
                            skills="Bootstrap"
                            progress={70}
                        />











                        


                        


                    
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;