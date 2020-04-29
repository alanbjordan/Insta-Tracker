import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Twitter extends Component {

    render() {
        return (
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName='cdcgov'
                options={{height: 360}}
                noHeader
                noFooter
            />
        )
    }
}

export default Twitter

