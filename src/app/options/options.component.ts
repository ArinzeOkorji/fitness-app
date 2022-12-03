import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  selected = '';
  isSelected = false;
  changeBackground = false;

  constructor(
    private readonly dialogRef: MatDialogRef<OptionsComponent>
  ) { }

  ngOnInit(): void {
  }

  select() {
    // this.changeBackground = true
    this.isSelected = true;
        this.dialogRef.updateSize('100vw', '100vh').addPanelClass(['expand-panel'])
    // setTimeout(
    //   () => {
    // this.isSelected = true;
    //     this.dialogRef.updateSize('100vw', '100vh').addPanelClass(['expand-panel'])
    //   }
    //   , 1000
    // )
    
  }

  close() {
    this.dialogRef.addPanelClass(['animate__animated', 'animate__slideOutDown'])
    this.dialogRef.close();
  }

}
