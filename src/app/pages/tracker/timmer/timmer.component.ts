import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-timmer',
  templateUrl: './timmer.component.html',
  styleUrls: ['./timmer.component.scss']
})
export class TimmerComponent implements OnInit {
  hr:number=0;
  min:number=0;
  sec:number=0;
  play:boolean=false;
  interval:any;
  @Output() time = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  start() {
    this.play = true;
    this.interval = setInterval(() => {

      this.sec++;
      if(this.sec===60){
        this.min++;
        this.sec=0;
        if(this.min ===60){
          this.hr++;
          this.min =0;
        }
      }
    },1000)
  }
  
  pause() {
    this.play = false;
    clearInterval(this.interval);
    const timespent ={hr:this.hr,min:this.min,sec:this.sec};
    this.time.emit(timespent);
  }


}
