import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseFirestore } from './firestore';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreCollection'
})
export class FirestoreCollectionPipe implements PipeTransform {

    constructor(
        private firestore: FirebaseFirestore
    ) { }

    transform(collectionName: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
        if (!collectionName) {
            return;
        }
        return this.firestore
            .collection(collectionName);
    }

}
