import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseMessaging } from './messaging';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseMessagingModule {
    static init() {
        return {
            ngModule: FirebaseMessagingModule,
            providers: [
                FirebaseMessaging
            ]
        };
    }
}
