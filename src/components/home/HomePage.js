import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Modus App</h1>
                <p>A one of a Kind platform to discover news all over the world</p>
                <Link to="news" className="btn btn-primary btn-lg">Start your journey</Link>
            </div>
        );
    }
}

export default HomePage;
