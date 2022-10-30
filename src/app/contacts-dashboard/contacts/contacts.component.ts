import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, startWith } from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';
import { ContactsActions } from '../stores/contacts/contacts.action';
import { ContactsState } from '../stores/contacts/contacts.store';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

	@Select(ContactsState.filterContacts)
	contacts$: Observable<ContactsModel[]>;

	searchCtrl: FormControl = new FormControl('');
	selectedIndex: number = -1;
	page: number = 1;

	constructor(private store: Store) { 
		this.searchControlSub();
	}

	searchControlSub(): void {
		this.searchCtrl.valueChanges.pipe(startWith('')).subscribe((value: string) => {
			this.filterContacts()
		})
	}

	filterContacts() {
		this.store.dispatch(new ContactsActions.FilterContacts({value:this.searchCtrl.value, page: this.page}));
	}

	setIndex(index: number) {
		this.selectedIndex = index;
	}

	pageChange(value: number) {
		this.page += value;
		this.filterContacts()
	}

}
