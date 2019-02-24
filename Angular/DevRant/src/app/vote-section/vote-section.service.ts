import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable()
export class VoteService {
public status: Rx.BehaviorSubject<any> = new Rx.BehaviorSubject<any>(false);

update(value: any) {
    this.status.next(value);
}
}