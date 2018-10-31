import React, {Component} from 'react';
import PanelComponent from "./PanelComponent";
import {appPanel1, otherPanels} from "./TextBlocks";
import '../Common/common.css';

class AppsPage extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/app1.jpg'} alt={''} />
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>Apps</span>
                    </div>
                </div>
                <PanelComponent title={'IGH App'} text={appPanel1} even={false} image={'app2.png'}>
                    <div style={{
                        alignSelf: 'center',
                        height: 50,
                        display: 'flex',
                        marginTop: 10
                    }}>
                        <a href={'https://itunes.apple.com/us/app/igh-compact/id895412247?mt=8'}>
                            <img src={'/images/appstore.png'} alt={''}
                                 style={{height: '100%'}}/></a>
                        <a style={{marginLeft: 10}}
                           href={'https://play.google.com/store/apps/details?id=com.igh.ighcompact3&hl=en'}><img
                            src={'/images/googleplay.png'} alt={''} style={{height: '100%'}}/></a>
                    </div>
                </PanelComponent>
                {otherPanels.map((item, index) => (index === 2 ?
                    <div key={index} style={{
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundImage: 'url(/images/app8.jpg)',
                    }}>
                        <div style={{background: 'rgba(0,0,0,0.7)'}}>
                            <PanelComponent title={item.title} key={index} text={item.text}
                                            whiteText={true}
                                            image={item.image} even={true}/>
                        </div>
                    </div> :
                    <PanelComponent title={item.title} key={index} text={item.text}
                                    image={item.image} even={index % 2 === 0}/>))}
            </div>
        );
    }
}

export default AppsPage;