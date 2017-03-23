import * as firebase from 'firebase';
import config from '../../ignore/firebase_keys';

firebase.initializeApp(config);

let getList = function(callback) {

    let rootPath = "/";

    firebase.database().ref(rootPath).on('value', (snapshot) => {

        let result = "";

        if (snapshot.val()) {
            result = snapshot.val()
        }

        callback(result)
    });

};

let save = function(model, callback) {
    console.log('saving');
};

let get = function(id, callback) {

};

module.exports = {
    getList: getList,
    save: save,
    get: get
};