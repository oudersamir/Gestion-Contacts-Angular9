import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  statusContact:boolean=false;
  contact:Contact={
    name:'',
    telephone:0

  };
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  addContact(){
    this.contactService.addContact(this.contact);
    this.contact={
      name:'',
      telephone:0
  
    };
    this.statusContact=false;
  }

}
