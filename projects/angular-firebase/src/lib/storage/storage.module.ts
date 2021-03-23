import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { FirebaseModule } from '../firebase.module';
import { StorageMetadataPipe } from './storage-metadata.pipe';
import { StorageUrlPipe } from './storage-url.pipe';

const SHARED = [
    StorageMetadataPipe,
    StorageUrlPipe
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
export class StorageModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                StorageService
            ]
        };
    }
}
