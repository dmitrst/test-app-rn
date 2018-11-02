import React from 'react';

const withRouteParams = Component =>
    (props) => {
        const { params } = props.navigation.state;
        return <Component { ...params } { ...props } />;
    };


export default withRouteParams;