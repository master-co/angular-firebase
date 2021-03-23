import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService, FirebaseDatabaseOptions, FIREBASE_DATABASE_OPTIONS } from './database.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class DatabaseModule {
    static init(options?: FirebaseDatabaseOptions) {
        return {
            ngModule: FirebaseModule,
            providers: [
                { provide: FIREBASE_DATABASE_OPTIONS, useValue: options },
                DatabaseService
            ]
        };
    }
}
