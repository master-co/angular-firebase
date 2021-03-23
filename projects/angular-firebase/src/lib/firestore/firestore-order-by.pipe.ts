import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreOrderBy'
})
export class FirestoreOrderByPipe implements PipeTransform {

    constructor() { }

    transform(collectionRef, ...args: unknown[]): firebase.firestore.Query<firebase.firestore.DocumentData> {
        if (!collectionRef) {
            return;
        }
        if (args.length) {
            return collectionRef.orderBy(...args);
        } else {
            return collectionRef
        }
    }

}
