import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseFirestore } from './firestore';
import { FirebaseModule } from '../firebase.module';
import { FirestoreDocPipe } from './firestore-doc.pipe';
import { FirestoreCollectionPipe } from './firestore-collection.pipe';
import { FirestoreOrderByPipe } from './firestore-order-by.pipe';
import { FirestoreOnSnapshotPipe } from './firestore-on-snapshot.pipe';
import { FirestoreGetPipe } from './firestore-get.pipe';
import { FirestoreWherePipe } from './firestore-where.pipe';
import { FirestoreStartAtPipe } from './firestore-start-at.pipe';
import { FirestoreEndAtPipe } from './firestore-end-at.pipe';
import { FirestoreLimitPipe } from './firestore-limit.pipe';
import { FirestoreEndBeforePipe } from './firestore-end-before.pipe';
import { FirestoreLimitToLastPipe } from './firestore-limit-to-last.pipe';
import { FirestoreIsEqualPipe } from './firestore-is-equal.pipe';

const SHARED = [
    FirestoreCollectionPipe,
    FirestoreDocPipe,
    FirestoreEndAtPipe,
    FirestoreEndBeforePipe,
    FirestoreGetPipe,
    FirestoreIsEqualPipe,
    FirestoreLimitPipe,
    FirestoreLimitToLastPipe,
    FirestoreOnSnapshotPipe,
    FirestoreOrderByPipe,
    FirestoreStartAtPipe,
    FirestoreWherePipe,
]

@NgModule({
    declarations: [
        ...SHARED
    ],
    imports: [
        CommonModule,
        FirebaseModule
    ],
    exports: [
        ...SHARED
    ]
})
export class FirebaseFirestoreModule {
    static init() {
        return {
            ngModule: FirebaseFirestoreModule,
            providers: [
                FirebaseFirestore
            ]
        };
    }
}
