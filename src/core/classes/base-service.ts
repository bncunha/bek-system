import { AngularFireDatabase } from '@angular/fire/database';
import { DefaultResponse } from './default-response';
import { map } from 'rxjs/operators';

export class BaseService {
    firebaseKey: string;
    constructor(private db: AngularFireDatabase, firebaseKey: string) {
        this.firebaseKey = firebaseKey;
    }   

    async insert(model: any) {
        try {
            const res = await this.db.list(this.firebaseKey).push(model);
            console.log('Inserido', res);
            return new DefaultResponse().success('Inserido com sucesso!');
        } catch(err) {
            return new DefaultResponse().error('Erro ao inserir', err);
        }
    }

    async update(model: any, id: string) {
        try {
            const res = await this.db.list(this.firebaseKey).update(id, model);
            return new DefaultResponse().success('Atualizado com sucesso!');
        } catch(err) {
            return new DefaultResponse().error('Erro ao Atualizar', err);
        }
    }

    async delete(id: string) {
        try {
            const res = await this.db.object(`${this.firebaseKey}/${id}`).remove();
            console.log(res);
            return new DefaultResponse().success('Removido com sucesso!');            
        } catch(err) {
            return new DefaultResponse().error('Erro ao remover', err);
        }
    }

    getAll() {
        return this.db.list(this.firebaseKey).snapshotChanges().pipe(
            map(changes => {
                return changes.map(c => ({ id: c.payload.key, ...c.payload.val() }));
            })
        );
    }

    findById(id: string) {
        return this.db.object(`${this.firebaseKey}/${id}`).snapshotChanges().pipe(
            map(c => {
                let newObj = { id: c.payload.key, ...c.payload.val() };
                return new DefaultResponse().success('Recuperado com sucesso', newObj);
            })
        );
    }
}