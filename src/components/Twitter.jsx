import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

// const Twit = require('twit');

// let T = new Twit({
//     consumer_key:         '9klML23yOZbniXoV15tDVAbm6',
//     consumer_secret:      '9uSsxtZSE3weHjeiffGL6bCbakn3QZOaoDGF0BOH6JS61pL7Xs',
//     access_token:         '3099981671-4oQVttH1gQIQUp0ZC8gYhVVkVe32f2YuLWJVVjR',
//     access_token_secret:  'vuSqhtDL5hDaVHvtPlNX7V9Ty9SN8xBk8uI4Fg3oJkhbr',
//     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//     strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })

class Twitter extends Component {

    // state = {
    //     screenName: ""
    // }

    // cdcClick = () => {
    //     this.setState((prevState) => ({
    //         screenName: prevState.screenName + "cdcgov"
    //     }))
    //     console.log(this.state.screenName)
    // }

    // componentDidMount = () => {
    //     T.get('statuses/user_timeline', { screen_name: 'cdcgov', count: 2 }, function(err, data, response) {
    //         console.log('TWITTER DATA: ', data)
    //       })
    // }
        


    render() {
        // const { screenName } = this.state
        return (
            // <div>
            //     {/* <button type="button" onClick={this.cdcClick}>CDC</button> */}
            //     <div className="cdcTweets">
            //         {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Telehealth?src=hash&amp;ref_src=twsrc%5Etfw">#Telehealth</a> is a valuable tool used to augment or replace in-person visits with patients, when appropriate. Learn more about telehealth - and if it&#39;s right for you as a patient or a healthcare provider - via the new <a href="https://t.co/p9IMZEIbKr">https://t.co/p9IMZEIbKr</a>. <a href="https://twitter.com/hashtag/COVID19?src=hash&amp;ref_src=twsrc%5Etfw">#COVID19</a> <a href="https://t.co/0dt87DKzIg">pic.twitter.com/0dt87DKzIg</a></p>&mdash; U.S. Surgeon General (@Surgeon_General) <a href="https://twitter.com/Surgeon_General/status/1254755764180267008?ref_src=twsrc%5Etfw">April 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            //         <TwitterTimelineEmbed
            //             sourceType="profile"
            //             screenName='cdcgov'
            //             options={{height: 400}}
            //         />
            //     </div>
                
            // </div>
            <Accordion className='cdcTweets'>
                <Card>
                    <Accordion.Toggle as='cdcTweets' eventKey="0">
                        CDC Tweets
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName='cdcgov'
                            options={{height: 400}}
                        />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default Twitter

