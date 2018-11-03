import React, {Component} from 'react';
import MainSlideShow from "./MainSlideShow";
import HomeInfo from "./HomeInfo";
import AboutSection from "./AboutSection";
import QuoteSection from "./QuoteSection";
import {withRouter} from "react-router-dom";

const info = [
    {
        title: 'Intelligent Green Office',
        text: 'GreenPoint systems redefine the entire working environment and working experience, making your day much more joyful and efficient at the office.',
        image: 'office_icon.svg',
        link: 'office'
    }, {
        title: 'Intelligent Green Hotel',
        text: 'Intelligent room occupancy detection system that makes decision based on a door magnet and a PIR detector, allowing separate WELCOME and GOODBYE scenario...',
        image: 'hotel_icon.svg',
        link: 'hotel'
    }, {
        title: 'Intelligent Green Home',
        text: 'Close your shutter at night, open it slightly in the morning, close it while you are at work or even manage the room temperature and light automatically by...',
        image: 'home_icon.svg',
        link: 'home'
    }
];

function loadImage(url) {
    const r = (img, resolve) => () => {
        img.removeEventListener('load', r);
        img.removeEventListener('error', r);
        resolve()
    };

    return new Promise((resolve) => {
        const img = new Image();
        img.addEventListener('load', r(img, resolve));
        img.addEventListener('error', r(img, resolve));
        img.src = url;
    });
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            loadedImages: false
        };
    }

    imageLoaded = () => {
        this.setState({loadedImages: true});
    };

    componentWillMount() {
        loadImage('/images/slide1.jpg').then(() => {
            this.imageLoaded();
        });
        loadImage('/images/slide2.jpg');
        loadImage('/images/slide3.jpg');
        loadImage('/images/slide4.jpg');
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <MainSlideShow history={this.props.history} loaded={this.state.loadedImages}/>
                <div style={{
                    marginTop: 10,
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {info.map((info, index) => <HomeInfo history={this.props.history} info={info} key={index}/>)}
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: 0,
                            paddingTop: '50%',
                            position: 'relative',
                            paddingLeft: 5,
                            paddingRight: 5,
                            overflowX: 'hidden'
                        }}>
                        <iframe title={'IGH Product Introduction'} style={{
                            position: 'absolute', left: 0, top: 0, bottom: 0,
                            width: '100%', height: '100%'
                        }}
                                allowFullScreen="allowfullscreen"
                                src="https://www.youtube.com/embed/P1U-8Mgi-yw">
                        </iframe>
                    </div>
                    <AboutSection history={this.props.history}/>
                    <QuoteSection/>
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);