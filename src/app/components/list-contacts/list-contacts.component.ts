import { Contact } from './../../models/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  myContact:Contact;
  statusUpdate:boolean=false;
  contacts;
  constructor(private  contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts=>{
      this.contacts=contacts
      console.log(this.contacts);
    }
      );
  }

  updateContact(contact:Contact){
    this.contactService.updateContact(contact);
  }
  editContact(contact:Contact){
    this.myContact=contact;
    this.statusUpdate=!this.statusUpdate;

  }
  destroyContact(contact:Contact){
  this.contactService.destroyContact(contact);';'

  }

  deleteContact(contact:Contact){
    if(confirm('are you sure to delete this contact !!'))
    this.contactService.destroyContact(contact);
    else 
    this.statusUpdate=false;
  }
}
