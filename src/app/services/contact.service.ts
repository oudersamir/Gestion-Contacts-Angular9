import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument}  from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDoc:AngularFirestoreDocument<Contact>;
  contactsCollection : AngularFirestoreCollection<Contact>;
  contacts:Observable<Contact[]>;
  constructor(private afs:AngularFirestore  ) { 

    this.contactsCollection=this.afs.collection('contacts');
    this.contacts=this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
    
  }

  getContacts(){
    return this.contacts;
  }

  addContact(contact){
    this.contactsCollection.add(contact);
  }
  updateContact(contact:Contact){
  this.contactDoc=this.contactsCollection.doc<Contact>(contact.id);
  this.contactDoc.update(contact);

  }

  destroyContact(contact:Contact){
  this.contactDoc=this.contactsCollection.doc<Contact>(contact.id);
  this.contactDoc.delete();
  }


}


