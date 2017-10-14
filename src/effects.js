import * as firebase from 'firebase';
// fetch all entries by user id

export const fetchEntries = (id) => {
  firebase.database().ref('/entries').orderByChild('userId').once('value')  //.equalTo('1', 'userId')
  .then(result => console.log(result.val() ));
};
