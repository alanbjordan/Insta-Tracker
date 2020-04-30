import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Twitter extends Component {

    render() {
        return (
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName='cdcgov'
                options={{
                    // borderRadius: 30,
                    height: 400
                }}
                noHeader
                noFooter
                theme='dark'
                transparent
            />
        )
    }
}

export default Twitter

