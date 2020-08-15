import { Spinner } from 'react-bootstrap';
import React from 'react';

export default class SpinnerComp extends React.Component {
    render() {
        return (
            <div className="spinCont">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }

} 