import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreStartAt'
})
export class FirestoreStartAtPipe implements PipeTransform {

    constructor() { }

    transform(collectionRef, ...args: unknown[]): firebase.firestore.Query<firebase.firestore.DocumentData> {
        if (!collectionRef) {
            return;
        }
        if (args.length) {
            return collectionRef.startAt(...args);
        } else {
            return collectionRef
        }
    }

}
