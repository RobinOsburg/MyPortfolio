import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-massage',
  templateUrl: './send-massage.component.html',
  styleUrls: ['./send-massage.component.scss']
})
export class SendMassageComponent {

  constructor(private dialogRef: MatDialogRef<SendMassageComponent>){ }
  
  closeDialog(){
    this.dialogRef.close();
  }

}
