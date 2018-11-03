import React from 'react';
import './router.css';

const SlideItem = ({item, history}) => {
    return (
        <div style={{width: '100%', height: '90vh', cursor: 'pointer'}}
             onClick={() => {
                 item.link && history.push(item.link);
             }}>
            <img src={item.source} alt={''}
                 id={'img'}
                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                background: 'rgba(0,0,0,0.5)',
                bottom: 0,
            }}>
                <div style={{
                    margin: 'auto',
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '100%',
                    paddingLeft: 10,
                    paddingRight: 10,
                    maxWidth: 1200,
                    justifyContent: 'center'
                }}>
                    <h4 style={{textAlign: 'center'}}>
                        <span className={'title'}>{item.title}</span>
                    </h4>
                    {item.text.map((line, index) =>
                        <span key={index} className={'text'}>{line}</span>)}
                </div>
            </div>
        </div>
    );
};

export default SlideItem;