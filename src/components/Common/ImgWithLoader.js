import React from 'react';
import RefreshIndicator from "./RefreshIndicator";
import Img from 'react-image'

const ImgWithLoader = (props) => {
    const className = (props.style && props.style.objectFit) ? ' ' + props.style.objectFit : '';

    return (
        <Img className={props.className + className} style={props.style}
             src={props.src}
             alt={props.alt || ''}
             decode={false}
             loader={<div style={props.noMargin ? props.style : {...props.style, margin: 'auto'}}>
                 <RefreshIndicator size={props.size || 20} color={props.color || 'black'} style={{margin: 'auto'}}/>
             </div>}/>
    );
};

export default ImgWithLoader;