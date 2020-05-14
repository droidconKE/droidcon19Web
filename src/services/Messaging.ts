import Axios from 'axios';

export function messaging(firebase: any) {
    const messo = null;
    if (firebase.messaging.isSupported()) {
        console.log('Messaging Supported');
        const messaging = firebase.messaging();

        messaging.usePublicVapidKey(process.env.VUE_APP_FIREBASE_PUBLIC_KEY); // 1. Generate a new key pair

        // Request Permission of Notifications
        messaging.requestPermission().then(() => {
            console.log('Notification permission granted.');
            // console.log(process.env.VUE_APP_MESSAGING_TOPIC)

            // Get Token
            messaging.getToken().then((token: any) => {
            //   console.log(token)
            sendTokenToServer(token);
            });
        }).catch((err: []) => {
            console.log('Unable to get permission to notify.', err);
        });

        // Callback fired if Instance ID token is updated.
        messaging.onTokenRefresh(function() {
            messaging.getToken()
            .then(function(refreshedToken: any) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent
            // to the app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            })
            .catch(function(err: []) {
            console.log('Unable to retrieve refreshed token ', err);
            setTokenSentToServer(false);
            });
        });

        // Send the Instance ID token your application server, so that it can:
        // - send messages back to this app
        // - subscribe/unsubscribe the token from topics
        function sendTokenToServer(currentToken: any) {
            if (!isTokenSentToServer()) {
            console.log('Sending token to server...');
            // TODO(developer): Send the current token to your server.
            setTokenToTopic(currentToken);
            setTokenSentToServer(true);
            } else {
            console.log('Token already sent to server so won\'t send it again ' +
                'unless it changes');
            }
        }

        function isTokenSentToServer() {
            return window.localStorage.getItem('sentToServer1') === '1';
        }

        function setTokenSentToServer(sent: boolean) {
            window.localStorage.setItem('sentToServer1', sent ? '1' : '0');
        }


            // Callback fired if Instance ID token is updated.
        messaging.onTokenRefresh(function() {
            messaging.getToken()
            .then(function(refreshedToken: any) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent
            })
            .catch(function(err: []) {
            console.log('Unable to retrieve refreshed token ', err);
            });
        });


        function setTokenToTopic(token: string) {
            //   console.log(process.env.VUE_APP_SERVER_KEY)
            const headers = {
                'Authorization': 'key=' + process.env.VUE_APP_SERVER_KEY,
                'Content-Type' : 'application/json',
            };
            const topic = process.env.VUE_APP_MESSAGING_TOPIC;
            Axios.post('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, null, {headers})
            .then((response) => {
                //   console.log('Subscribed to "'+topic+'"');
                console.log('Subscribed.');
                //   console.log(response)
            }).catch((err) => {
                console.log('Unable to subscribe ', err);
                // console.log(err.response.data)
                });
        }
    } else {
        console.log('Not Supported');
    }

}
