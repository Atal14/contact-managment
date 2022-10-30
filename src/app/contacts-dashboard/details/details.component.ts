import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { ContactsModel } from 'src/app/models/contacts.model';
import { ContactsActions } from '../stores/contacts/contacts.action';
import { ContactsState } from '../stores/contacts/contacts.store';
@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

	private unsubscribe$ = new Subject();
	@Select(ContactsState.selectedContact)
	selectedContact$: Observable<ContactsModel>;

	selectedContact: ContactsModel = null;


	constructor(private route: ActivatedRoute, private store: Store) { 
		this.route.params.subscribe((params) =>{
				if (params?.['id']) {
					this.store.dispatch(new ContactsActions.GetContactById(+params['id']))
				}
			}
		);
	}

	ngOnInit(): void {
		this.selectedContactSub()
	}
	
	selectedContactSub(): void {
		this.selectedContact$.pipe(takeUntil(this.unsubscribe$)).subscribe((contact: ContactsModel) => {
			this.selectedContact = contact
		})
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(null);
		this.unsubscribe$.complete();
	}
	

}
