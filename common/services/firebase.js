import * as firebase from 'firebase';
import config from '../../ignore/firebase_keys';

firebase.initializeApp(config);

let read = function(callback) {

    let rootPath = "/";

    firebase.database().ref(rootPath).on('value', (snapshot) => {

        let result = "";

        if (snapshot.val()) {
            result = snapshot.val()
        }

        callback(result)
    });

};

module.exports = {
    read: read
};