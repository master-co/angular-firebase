import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from './firestore.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ],
    providers: [FirestoreService]
})
export class FirestoreModule { }
