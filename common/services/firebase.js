import * as firebase from 'firebase';
import config from '../../ignore/firebase_keys';

firebase.initializeApp(config);

let getList = function(callback) {

    let rootPath = "/";

    firebase.database().ref(rootPath).on('value', (snapshot) => {

        let results = [];

        if (snapshot.val()) {
            results = snapshot.val()
        }

        callback(results)
    });

};

let save = function(model, callback) {
    let rootPath = "/";

    firebase.database().ref(rootPath).push(model, function(err) {
        if (err) {
            callback({status: 'error'});
        } else {
            callback({status: 'success'});
        }
    });
};

let get = function(id, callback) {
    let rootPath = "/" + id;

    firebase.database().ref(rootPath).on('value', function(snapshot) {
        let result = {};

        if (snapshot.val()) {
            result = snapshot.val()
        }

        callback(result);
    });
};

module.exports = {
    getList: getList,
    save: save,
    get: get
};