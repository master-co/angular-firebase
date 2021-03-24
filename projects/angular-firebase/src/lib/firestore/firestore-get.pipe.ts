import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreGet'
})
export class FirestoreGetPipe implements PipeTransform {

    async transform(collectionRef: firebase.firestore.DocumentReference | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>): Promise<any> {
        if (collectionRef instanceof firebase.firestore.DocumentReference) {
            const doc = await collectionRef.get();
            return doc.exists
                ? { id: doc.id, ...doc.data() }
                : null
        } else {
            const docData = await collectionRef.get();
            return docData.docs.map(eachDoc => ({
                id: eachDoc.id,
                ...eachDoc.data()
            }));
        }
    }

}
