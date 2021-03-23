import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseStorage } from './storage';
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
export class FirebaseStorageModule {
    static init() {
        return {
            ngModule: FirebaseStorageModule,
            providers: [
                FirebaseStorage
            ]
        };
    }
}
