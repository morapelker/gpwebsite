import React from 'react';
import MatButton from "../Common/MatButton";
import './AboutSection.css';
import {aboutUs} from "./TextBlocks";

const AboutSection = ({history}) => {
    return (
        <div style={{
            width: '100%',
            backgroundImage: 'url(/images/office7_0.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <div
                style={{
                    width: '100%',
                    height: 0,
                    paddingTop: '50%',
                    position: 'relative',
                    paddingLeft: 5,
                    paddingRight: 5,
                    overflowX: 'hidden',
                    overflowY: 'hidden',

                }}>
                <iframe title={'IGH Product Introduction'} style={{
                    position: 'absolute', top: '10%', bottom: 0,
                    width: '50%', height: '80%', left: '25%'
                }}
                        allowFullScreen="allowfullscreen"
                        src="https://www.youtube.com/embed/P1U-8Mgi-yw">
                </iframe>
            </div>

            <div style={{
                width: '100%',
                paddingTop: 30,
                paddingBottom: 30,
                boxSizing: 'unset',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div className={'about_section_root'}>
                    <h4 style={{marginLeft: 40}}>About Us</h4>
                    {aboutUs.split('\n').map((item, index) => <p key={index}>{item}</p>)}
                    <MatButton type={'secondary'}
                               onClick={() => {
                                    history.push('/about');
                               }}
                               backgroundColor={'#33cc33'} style={{
                        alignSelf: 'center'
                    }}>
                        Read More
                    </MatButton>
                </div>

            </div>

        </div>
    );
};

export default AboutSection;