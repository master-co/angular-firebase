import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseDatabase, FirebaseDatabaseOptions, FIREBASE_DATABASE_OPTIONS } from './database';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseDatabaseModule {
    static init(options?: FirebaseDatabaseOptions) {
        return {
            ngModule: FirebaseDatabaseModule,
            providers: [
                { provide: FIREBASE_DATABASE_OPTIONS, useValue: options },
                FirebaseDatabase
            ]
        };
    }
}
