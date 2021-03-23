import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreGet'
})
export class FirestoreGetPipe implements PipeTransform {

    async transform(collectionRef: firebase.firestore.DocumentReference): Promise<any> {
        const doc = await collectionRef.get();
        return doc.exists
            ? { id: doc.id, ...doc.data() }
            : null
    }

}
