import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/BehaviorSubject';

@Injectable()
export class MainRefreshService {
public status: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);

display(value: boolean) {
    this.status.next(value);
}
}