import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from './analytics.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class AnalyticsModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                AnalyticsService
            ]
        };
    }
}
