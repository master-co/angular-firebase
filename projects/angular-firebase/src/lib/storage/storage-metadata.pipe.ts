import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from './storage.service';

@Pipe({
    name: 'storageMetadata'
})
export class StorageMetadataPipe implements PipeTransform {

    constructor(
        private storage: StorageService
    ) { }

    async transform(path: string): Promise<any> {
        if (!path) {
            return;
        }
        return this.storage.ref(path).getMetadata();
    }

}
