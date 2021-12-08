import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerPageComponent } from './tracker-page/tracker-page.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TrackerEntryComponent } from './tracker-entry/tracker-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimmerComponent } from './timmer/timmer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrackerPageComponent,
    TrackerComponent,
    TrackerEntryComponent,
    TimmerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    TrackerComponent
  ]
})
export class TrackerModule { }
