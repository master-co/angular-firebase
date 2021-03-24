import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreOnSnapshot'
})
export class FirestoreOnSnapshotPipe implements PipeTransform {

    result;
    observer;

    async transform(collectionRef): Promise<any[]> {
        if (!collectionRef)
            return this.result;

        if (this.observer) {
            this.observer();
        }
        await new Promise((resolve: Function) => {
            this.observer = collectionRef
                .onSnapshot((snapshot: firebase.firestore.DocumentSnapshot | firebase.firestore.QuerySnapshot) => {
                    if (snapshot instanceof firebase.firestore.QuerySnapshot) {
                        if (this.result) {
                            this.result.length = 0;
                        } else {
                            this.result = [];
                        }

                        snapshot.docs.forEach(eachDoc => {
                            const item: any = {
                                id: eachDoc.id,
                                ...eachDoc.data()
                            };
                            this.result.push(item);
                        });
                    } else {
                        if (this.result) {
                            for (const key in this.result) {
                                delete this.result[key];
                            }
                        } else {
                            this.result = {};
                        }

                        const data = snapshot.data();
                        for (const key in data) {
                            this.result[key] = data[key];
                        }
                        this.result = snapshot.id;
                    }

                    resolve();
                });
        });
        return this.result;
    }

    ngOnDestroy(): void {
        this.observer?.();
    }

}
