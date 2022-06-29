import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialogexample';

  constructor( private matDialog: MatDialog){}

  onOpenDialogClick(){
    this.matDialog.open(GreetingComponent);
  }
}
