import React from 'react';
import MatButton from "../Common/MatButton";
import ImgWithLoader from "../Common/ImgWithLoader";

const HomeInfo = ({info, history}) => {
    return (
        <div style={{padding: 30, minWidth: 300, width: '33%', cursor: 'pointer'}} onClick={() => {
            history.push('/' + info.link);
        }}>
            <ImgWithLoader src={'images/' + info.image} style={{objectFit: 'contain'}} alt={''} />
            <h4 style={{textAlign: 'center'}}>{info.title}</h4>
            <span>{info.text}</span>
            <p/>
            <MatButton type={'secondary'} onClick={() => {
                history.push('/' + info.link);
            }} backgroundColor={'default'}>
                Read More
            </MatButton>
        </div>
    );
};

export default HomeInfo;