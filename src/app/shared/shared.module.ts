import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
