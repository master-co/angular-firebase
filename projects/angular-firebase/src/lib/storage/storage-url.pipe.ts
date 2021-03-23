import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from './storage.service';

@Pipe({
    name: 'storageUrl'
})
export class StorageUrlPipe implements PipeTransform {

    constructor(
        private storage: StorageService
    ) { }

    async transform(path: string): Promise<string> {
        if (!path) {
            return;
        }
        return this.storage.ref(path).getDownloadURL();
    }

}
