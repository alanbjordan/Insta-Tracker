import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Twitter extends Component {

    render() {
        return (

                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName='cdcgov'
                            options={{height: 360}}
                        />

        )
    }
}

export default Twitter

