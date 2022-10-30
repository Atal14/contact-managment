import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';
import { ContactsState } from '../stores/contacts/contacts.store';

@Component({
	selector: 'app-contacts-dash',
	templateUrl: './contacts-dash.component.html',
	styleUrls: ['./contacts-dash.component.scss']
})
export class ContactsDashComponent {

	@Select(ContactsState.selectedContact)
	selectedContact$: Observable<ContactsModel>;

	constructor() { }

}
