import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebasePerformance } from './performance';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebasePerformanceModule {
    static init() {
        return {
            ngModule: FirebasePerformanceModule,
            providers: [
                FirebasePerformance
            ]
        };
    }
}
