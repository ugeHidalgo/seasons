import React from 'react';

const ErrorMessage = (props) => {

    if (props.message && props.message.length > 0 ) {        
        return (
            <div className="ui pointing red basic label">
                <div className="ui error">Position error: {props.message}</div>
            </div>
        );
    }
    return <div></div>;
}

export default ErrorMessage;