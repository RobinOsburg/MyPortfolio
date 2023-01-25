import { Component, ViewChild, ElementRef } from '@angular/core';
import { SendMassageComponent } from '../send-massage/send-massage.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

constructor(public dialog: MatDialog){}

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField ') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;



    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);


    
    await fetch('https://robinosburg.com/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }

    ),


    this.dialog.open(SendMassageComponent, { position: { right: '10px', bottom: '150px'},width:'20%' })

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
