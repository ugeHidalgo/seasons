import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorMessage from './errorMessage';
import LoadingIcon from './loadingIcon';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.createInitialState();
    }

    componentDidMount = () => {
        this.getInitialposition();
    }

    createInitialState = () => {
        return {
            lat: null, 
            long: null,
            loading: true,
            errorMessage: null
        };
    }

    getInitialposition = () => {        
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.updatedCoordinates(position),
            (err) => this.updateErrorWhenGettingPosition(err)
        );
    }

    updatedCoordinates = (position) => {
        const newState = { lat: position.coords.latitude, long: position.coords.longitude, loading: false, errorMessage: null};
        this.setState(newState);
    }

    updateErrorWhenGettingPosition = (err) => {
        const errorMessage = (err.message === '') ? 'Unavailable position.' : err.message;
            
        this.setState({ lat: null, long: null, loading: false, errorMessage: errorMessage});
        console.log('An error ocurred: ' + errorMessage)
    }

    render () {
        return (
            <div className="ui centered card">
                <div className="ui container">
                    <div>Longitude: {this.state.long}</div>                    
                    <div>Latitude: {this.state.lat}</div>
                    <LoadingIcon active={this.state.loading}/>
                </div>                                
                <ErrorMessage message = {this.state.errorMessage} /> 
            </div>
        );        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

