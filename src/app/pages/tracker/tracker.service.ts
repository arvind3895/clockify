import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor() { }
  trackerSubject = new BehaviorSubject<any[]>([]);
  tracker$ = this.trackerSubject.asObservable();
  getTracker(){
    this.trackerSubject.value;
  }
  setTracker(trackerData:any[]){
    this.trackerSubject.next(trackerData);
  }
  addTracker(tracker:any){
    const trackerValue =[...this.trackerSubject.value];
    trackerValue.push(tracker);
    this.setTracker(trackerValue);
  }
}
