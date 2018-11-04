import React, {Component} from 'react';
import HomeRouter from "../HomePage/HomeRouter";
import Collapse from '@material-ui/core/Collapse';
import HeaderUnit from "./HeaderUnit";
import {withRouter} from "react-router-dom";
import './Header.css';
import {items, products} from "./TextBlocks";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import Drawer from "@material-ui/core/Drawer/Drawer";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import HamburgerMenu from "./HamburgerMenu";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProducts: false,
            dark: false,
            drawerOpen: false
        };
    }

    showProducts = showProducts => {
        if (showProducts !== this.state.showProducts)
            this.setState({showProducts});
    };

    toggleDrawer = open => () => {
        this.setState({drawerOpen: open});
    };

    render() {
        return (
            <div>
                <div className={'header_root ' + (this.props.shrinked ? 'shrinked' : '')}>
                    <div
                        style={{
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            maxWidth: 1230,
                            margin: 'auto',
                            alignItems: 'flex-start'
                        }}>
                        <SmallScreen>
                            <IconButton style={{alignSelf: 'center'}} onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onKeyDown={this.toggleDrawer(false)}
                                >
                                    <HamburgerMenu closeDrawer={this.toggleDrawer(false)} history={this.props.history} />
                                </div>
                            </Drawer>
                        </SmallScreen>
                        <img src={'/images/logo_green_point.svg'} alt={''} onClick={() => {
                            this.props.history.push('/');
                        }}
                             style={{height: '100%', maxWidth: '100%', marginLeft: 10, cursor: 'pointer'}}/>
                        <LargeScreen>
                            <HomeRouter history={this.props.history} items={items}
                                        productsSelector={this.showProducts}/>
                        </LargeScreen>
                    </div>

                </div>
                <LargeScreen>
                    <Collapse in={this.state.showProducts} onMouseLeave={() => {
                        this.setState({showProducts: false});
                    }} classes={{container: 'container'}}
                              style={{top: this.props.shrinked ? 50 : 70}}>
                        <div style={{
                            width: '100%',
                            minWidth: 450,
                            paddingBottom: 30,
                            zIndex: 10,
                            display: 'flex',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            background: this.state.dark ? '#b3b3b3' : 'white'
                        }}>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                maxHeight: 500,
                                overflowY: 'scroll',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                {products.map((product, index) =>
                                    <HeaderUnit key={index}
                                                product={product}
                                                productsSelector={this.showProducts}
                                                dark={this.state.dark}/>)}
                            </div>
                            <div style={{
                                width: 80, height: 40, display: 'flex',
                                justifyContent: 'space-evenly',
                                paddingTop: 7
                            }}>
                            <span
                                onClick={() => {
                                    this.setState({dark: true});
                                }}
                                style={{
                                    width: 25,
                                    borderRadius: 10,
                                    borderWidth: 3,
                                    borderColor: this.state.dark ? '#00ff00' : 'black',
                                    height: 25,
                                    borderStyle: 'solid',
                                    background: 'black',
                                    cursor: 'pointer'
                                }}/>

                                <span
                                    onClick={() => {
                                        this.setState({dark: false});
                                    }}
                                    style={{
                                        width: 25,
                                        borderWidth: 3,
                                        borderStyle: 'solid',
                                        borderRadius: 10,
                                        borderColor: this.state.dark ? 'white' : '#00ff00',
                                        height: 25,
                                        background: 'white',
                                        cursor: 'pointer'
                                    }}/>
                            </div>

                        </div>
                    </Collapse>
                </LargeScreen>
            </div>
        );
    }
}

export default withRouter(Header);