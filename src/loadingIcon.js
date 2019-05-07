import React from 'react';

const LoadingIcon = (props) => {

    if (props.active) {        
        return (
            <div class="ui active small centered inline loader">Loading</div>
        );
    }
    return <div></div>;
}

export default LoadingIcon;