import React from 'react';
import {appDescription} from "./TextBlocks";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const AppPanel = () => {
    return (
        <div>
            <SmallScreen>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                    <h4 style={{textAlign: 'center'}}>A friendly and intuitive App</h4>
                    {appDescription.split('\n').map((item, index) => (index === 0 ?
                            <div key={index} style={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>
                                <ImgWithLoader src={'/images/app_front2.png'} alt={''}
                                     style={{width: '40%', objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                                <p style={{alignSelf: 'flex-end'}}>{item}</p>
                            </div> :
                            <p key={index}>{item}</p>
                    ))}
                    <div style={{
                        alignSelf: 'flex-center',
                        height: 50,
                        width: 340,
                        display: 'flex',
                        marginTop: 10
                    }}>
                        <a style={{width: 170}} href={'https://itunes.apple.com/us/app/igh-compact/id895412247?mt=8'}>
                            <ImgWithLoader src={'/images/appstore.png'} alt={''}
                                 style={{height: '100%', width: 170}}/></a>
                        <a style={{marginLeft: 10, width: 170}} href={'https://play.google.com/store/apps/details?id=com.igh.ighcompact3&hl=en'}><ImgWithLoader
                            src={'/images/googleplay.png'} alt={''} style={{height: '100%', width: 170}}/></a>
                    </div>
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    width: '100%',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-evenly'
                }}>
                    <ImgWithLoader src={'/images/app_front2.png'} alt={''}
                         style={{width: '40%', marginTop: 40, objectFit: 'scale-down', alignSelf: 'flex-start'}}/>
                    <div style={{
                        flex: 1,
                        height: '100%',
                        padding: 30,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h4>A friendly and intuitive App</h4>
                        <span style={{textAlign: 'left'}}>{appDescription}</span>
                        <div style={{
                            alignSelf: 'center',
                            height: 50,
                            width: 340,
                            marginTop: 10,
                            display: 'flex'
                        }}>
                            <a style={{width: 170}} href={'https://itunes.apple.com/us/app/igh-compact/id895412247?mt=8'}>
                                <ImgWithLoader src={'/images/appstore.png'} alt={''}
                                     style={{height: '100%', width: 170}}/></a>
                            <a style={{marginLeft: 10, width: 170}} href={'https://play.google.com/store/apps/details?id=com.igh.ighcompact3&hl=en'}><ImgWithLoader
                                src={'/images/googleplay.png'} alt={''} style={{height: '100%', width: 170}}/></a>
                        </div>
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default AppPanel;