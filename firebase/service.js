import { db, getTimeStamp } from './initialize.js';

export function convertCollectionsSnapshotToMap(snapshots) {
  return snapshots.docs.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection.data();
    return accumulator;
  }, {});
}

export async function getNewDocRef(collectionName) {
  return await db.collection(collectionName).doc();
}

export async function addDocument(collectionName, documentData) {
  const data = { ...documentData, createdAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .add(data)
    .then((docRef) => docRef.id);
}

export async function deleteDocument(collectionName, id) {
  return await db
    .collection(collectionName)
    .doc(id)
    .delete()
    .then(() => id);
}

export async function updateDocument(collectionName, documentData) {
  const data = { ...documentData, updatedAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .doc(documentData.id)
    .update(data)
    .then(() => documentData.id);
}

export async function setDocument(collectionName, documentData) {
  const data = { ...documentData, updatedAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .doc(documentData.id)
    .set(data, { merge: true })
    .then(() => documentData.id);
}

export async function getDocuments(collectionName) {
  return await db
    .collection(collectionName)
    .orderBy('createdAt', 'desc')
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
}
export async function getDocumentsByQuery(collectionName, query) {
  console.log(...query, collectionName, 'test');

  return await db
    .collection(collectionName)
    .where(...query)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
}

export async function deleteDocuments(collectionName) {
  const collectionRef = db.collection(collectionName);
  var batch = db.batch();
  await collectionRef
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => batch.delete(collectionRef.doc(doc.id)))
    );

  return await batch.commit().then(() => {
    console.log('Batch Deletion successfully committed!');
  });
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit().then(() => {
    console.log('Batch Addition successfully committed!');
  });
};
