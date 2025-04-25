import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private totalLikesSubject = new BehaviorSubject<number>(0);
  totalLikes$ = this.totalLikesSubject.asObservable();

  private resetSubject = new Subject<void>();
  reset$ = this.resetSubject.asObservable();

  constructor() { }

  addLike() {
    const current = this.totalLikesSubject.value;
    this.totalLikesSubject.next(current+1);
  }

  resetLikes() {
    this.totalLikesSubject.next(0);
    this.resetSubject.next();
  }
}
