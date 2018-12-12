import {Component} from 'react';
import {withRouter} from "react-router-dom";
import {pageview} from "react-ga";

class LocationListener extends Component {

    componentWillMount() {
        const {history} = this.props;
        this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
        this.handleLocationChange(history.location);
    }

    componentWillUnmount() {
        if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
    }

    handleLocationChange = (location) => {
        if (location && location.pathname)
            pageview(location.pathname + "?" + (location.hash || ''));
    };

    render() {
        return this.props.children;
    }
}

export default withRouter(LocationListener);