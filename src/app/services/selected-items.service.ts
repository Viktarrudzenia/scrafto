import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemsService {

  constructor() { }

  private subject = new BehaviorSubject(0);
  private isAllSelected = new BehaviorSubject(false);

  emit(events) {
    this.subject.next(events.length);
    if (events.length === 50) {
      this.isAllSelected.next(true);
    } else {
      this.isAllSelected.next(false);
    }
  }

  get() {
    return this.subject.asObservable();
  }

  getIsAllSelected() {
    return this.isAllSelected.asObservable();
  }
}
