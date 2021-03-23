import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firestoreOnSnapshot'
})
export class FirestoreOnSnapshotPipe implements PipeTransform {

    items = [];
    observer;

    async transform(collectionRef): Promise<any[]> {
        this.items = [];
        if (!collectionRef) {
            return this.items;
        }
        if (this.observer) {
            this.observer();
        }
        await new Promise((resolve: Function) => {
            this.observer = collectionRef
                .onSnapshot((snapshot) => {
                    this.items.length = 0;
                    snapshot.forEach((eachDoc) => {
                        const item: any = {
                            id: eachDoc.id,
                            ...eachDoc.data()
                        };
                        this.items.push(item);
                    });
                    resolve();
                })
        });
        return this.items;
    }

    ngOnDestroy(): void {
        this.observer?.();
    }

}
