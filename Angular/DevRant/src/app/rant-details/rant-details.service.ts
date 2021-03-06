import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable()
export class PostDetailsRefreshService {
public status: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);

refresh(value: boolean) {
    this.status.next(value);
}
}