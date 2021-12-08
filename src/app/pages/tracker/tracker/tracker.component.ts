import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  taskName:string="";
  constructor(private trackerService:TrackerService) { }

  ngOnInit(): void {
  }
  updateTimerSubject(time:any){
    debugger;
    this.trackerService.addTracker({...time,taskName:this.taskName});
  }
}
