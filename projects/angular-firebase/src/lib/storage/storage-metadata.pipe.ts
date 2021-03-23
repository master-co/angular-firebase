import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseStorage } from './storage';

@Pipe({
    name: 'storageMetadata'
})
export class StorageMetadataPipe implements PipeTransform {

    constructor(
        private storage: FirebaseStorage
    ) { }

    async transform(path: string): Promise<any> {
        if (!path) {
            return;
        }
        return this.storage.ref(path).getMetadata();
    }

}
