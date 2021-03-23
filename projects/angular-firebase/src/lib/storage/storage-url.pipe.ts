import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseStorage } from './storage';

@Pipe({
    name: 'storageUrl'
})
export class StorageUrlPipe implements PipeTransform {

    constructor(
        private storage: FirebaseStorage
    ) { }

    async transform(path: string): Promise<string> {
        if (!path) {
            return;
        }
        return this.storage.ref(path).getDownloadURL();
    }

}
