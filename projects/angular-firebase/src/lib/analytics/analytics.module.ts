import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseAnalytics } from './analytics';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseAnalyticsModule {
    static init() {
        return {
            ngModule: FirebaseAnalyticsModule,
            providers: [
                FirebaseAnalytics
            ]
        };
    }
}
