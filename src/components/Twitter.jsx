import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Twitter extends Component {
        
    render() {
        return (
            <div>
                <Accordion className='cdcTweets'>
                    <Card>
                        <Accordion.Toggle className="cdcButton" as={Card.Header} eventKey="0">
                            CDC Tweets
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName='cdcgov'
                                options={{height: 400}}
                                theme="dark"
                                noHeader
                                noFooter
                            />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion className='cdcTweets'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            WHO Tweets
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName='who'
                                options={{height: 400}}
                                theme="dark"
                                noHeader
                                noFooter
                            />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Twitter

