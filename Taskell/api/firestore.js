import firebase from "firebase";

export function addTask(name, userID) {
  firebase
    .firestore()
    .collection("Tasks")
    .add({
      name: name,
      userID: userID,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((data) => {})
    .catch((error) => console.log(error));
}

export async function getTasks(userID) {
  var taskList = [];
  var snapshot = await firebase
    .firestore()
    .collection("Tasks")
    .where("userID", "==", userID)
    .get();
  snapshot.forEach((doc) => {
    taskList.push({ id: doc.id, name: doc.data().name });
  });
  return taskList;
}

export function deleteTask(docID) {
  firebase.firestore().collection("Tasks").doc(docID).delete();
}
