import React from 'react';
import './router.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const onClick = (item, history, selector) => () => {
    if (item.location === '/contact') {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            try {
                window.scroll({
                    top: contactSection.offsetTop,
                    behavior: 'smooth',
                    left: 0
                })
            } catch {
                window.scroll(0, contactSection.offsetTop);
            }
        }
    } else {
        if (history.location.pathname === item.location &&
            (item.hash === undefined || item.hash === history.location.hash)) {
            try {
                window.scroll({
                    left: 0,
                    top: 0,
                    behavior: 'smooth'
                });
            } catch {
                window.scroll(0, 0);
            }
        } else
            history.push(item.location);
        selector && selector(false);
    }
};

const HomeRouter = ({items, productsSelector, history}) => {
    return (
        <div style={{
            display: 'flex',
            listStyle: 'none',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end', width: '100%'
        }}>
            {items.map((item, index) =>
                <span className={'routeSpan'} key={index}
                      onClick={onClick(item, history, productsSelector)} onMouseEnter={() => {
                    productsSelector(item.location === '/products')
                }}>
                    {item.label}
            </span>)}
            <a href={'https://www.facebook.com/Green-point-systems-238798076273979/'}>
                <FontAwesomeIcon className={'icon'} icon={['fab', 'facebook']}/>
            </a>
            <a href='https://www.youtube.com/channel/UCC7898iqiW5suONL54YRoXg'>
                <FontAwesomeIcon className={'icon'} icon={['fab', 'youtube']}/>
            </a>
        </div>
    );
};

export default HomeRouter;