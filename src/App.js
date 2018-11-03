import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import IGHHome from './components/Home/HomePage';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faQuoteRight, faPlus, faPaperPlane, faBars} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import AdvantagesPage from "./components/Advantages/AdvantagesPage";
import FaqPage from "./components/FAQ/FaqPage";
import ContactPage from "./components/Common/ContactPage";
import ProductsPage from "./components/Products/ProductsPage";
import AppsPage from "./components/Apps/AppsPage";
import HotelPage from "./components/Hotel/HotelPage";
import OfficePage from "./components/Home/OfficePage";

library.add(faQuoteRight, faPlus, fab, faPaperPlane, faBars);

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {shrinked: false};
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
    }

    handleScroll = ({target}) => {
        const {scrollTop} = target.scrollingElement ? target.scrollingElement : target.documentElement;
        const shrinked = scrollTop > 100;
        if (this.state.shrinked !== shrinked) {
            this.setState({
                shrinked
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div className={'appRoot'}>
                            <Switch>
                                <Route exact path='/' component={HomePage}/>
                                <Route exact path='/about' component={AboutPage}/>
                                <Route exact path='/advantages' component={AdvantagesPage}/>
                                <Route exact path='/faq' component={FaqPage}/>
                                <Route exact path='/apps' component={AppsPage}/>
                                <Route exact path='/hotel' component={HotelPage}/>
                                <Route exact path='/office' component={OfficePage}/>
                                <Route exact path='/home' component={IGHHome}/>
                                <Route path='/products' render={() => <ProductsPage
                                    shrinked={this.state.shrinked}/>}/>
                                <Route render={() => <Redirect to="/" push/>} />
                            </Switch>
                            <div style={{height: 100}}/>
                            <ContactPage/>
                        </div>
                        <Header shrinked={this.state.shrinked}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
