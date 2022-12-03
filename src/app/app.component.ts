import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionsComponent } from './options/options.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitness-app';

  constructor(
    private readonly dialog: MatDialog
  ) {
  }

  openOptions() {
    this.dialog.open(
      OptionsComponent,
      {
        maxWidth: '100vw',
        height: '50vh',
        width: '80vw',
        // height: '100vh',
        // width: '100vw',
      }
    )
  }
}
