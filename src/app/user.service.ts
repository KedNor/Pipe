import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([
    'David',
    'Christine',
    'Amel',
    'Fatou',
  ]);
  constructor() {}
}
