import * as firebase from 'firebase';
// fetch all entries by user id

export const fetchEntries = (id, onSuccess) => {
  return firebase.database()
  .ref('/entries/' + id)
  .orderByChild('date')
  .once('value')
  .then(result => {
    const arr = [];
    result.forEach(v => {
      arr.push(v.val())
    });
    onSuccess(arr);
  })
};
