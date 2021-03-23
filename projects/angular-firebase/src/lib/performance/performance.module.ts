import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceService } from './performance.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class PerformanceModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                PerformanceService
            ]
        };
    }
}
