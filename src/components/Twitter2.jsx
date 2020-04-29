// These are the two libraries I tried to run in order to get a list of tweets by search query (first library 'twitter'), and to get a list of tweets from a profile (second library 'twit'). For both libraries I received an
// error saying: Access to fetch at 'https://api.twitter.com/1.1/search/tweets.json?q=node.js' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control 
// check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// -------------------------------------------------------------------------------------------------------------------------------------------------

// The first library I tried:

// import React, { Component } from 'react';

// var Twitter = require('twitter');

// var client = new Twitter({
//     consumer_key: '9klML23yOZbniXoV15tDVAbm6',
//     consumer_secret: '9uSsxtZSE3weHjeiffGL6bCbakn3QZOaoDGF0BOH6JS61pL7Xs',
//     bearer_token: 'AAAAAAAAAAAAAAAAAAAAAI8FDAEAAAAAo0xampydHUwwrzD4rgbFNljFcXI%3DCHY8wJ7ekMwEVrnoiNKFHDy0rb7V4c0QxOphJKkpOM99IUsZr0'
//   });

// class Twitter2 extends Component {

//     componentDidMount = () => {
//         client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//             console.log(tweets);
//          });
//     }

//     render() {
//         return (
//             <div>
//            </div>
//         )
//     }
// }

// export default Twitter2;

// --------------------------------------------------------------------------------------------------------------------------------------------


// The second library I tried:

// import React, { Component } from 'react';

// const Twit = require('twit');

// let T = new Twit({
//     consumer_key:         '9klML23yOZbniXoV15tDVAbm6',
//     consumer_secret:      '9uSsxtZSE3weHjeiffGL6bCbakn3QZOaoDGF0BOH6JS61pL7Xs',
//     access_token:         '3099981671-4oQVttH1gQIQUp0ZC8gYhVVkVe32f2YuLWJVVjR',
//     access_token_secret:  'vuSqhtDL5hDaVHvtPlNX7V9Ty9SN8xBk8uI4Fg3oJkhbr',
//     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//     strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })

// class Twitter2 extends Component {

//     componentDidMount = () => {
//         T.get('statuses/user_timeline', { screen_name: 'cdcgov', count: 2 }, function(err, data, response) {
//             console.log('TWITTER DATA: ', data)
//         })
//     }

//     render() {
//         return (
//             <div>
//            </div>
//         )
//     }
// }

// export default Twitter2;