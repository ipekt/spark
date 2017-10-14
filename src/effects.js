import * as firebase from 'firebase';
import * as moment from 'moment';
// fetch all entries by user id

export const fetchEntries = (id, onSuccess) => {
  let obj = {};
  return firebase.database()
  .ref('/entries/' + id)
  .once('value')
  .then(result => {
    onSuccess(result.val());
  })
};

export const updateCompleted = (id, completed) => {
  console.log("completed", completed)
  const today = new moment().format("YYYY-MM-DD");
  const userEntryRef = firebase.database().ref('/entries/' + id + "/" + today);

   userEntryRef.child('completed').set(completed);

};
2
