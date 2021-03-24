import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingService } from './messaging.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class MessagingModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                MessagingService
            ]
        };
    }
}
