import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { filter, tap } from "rxjs";
import { ContactsModel } from "src/app/models/contacts.model";
import { IEmailPhone } from "src/mockData";
import { ContactsActions } from "./contacts.action";
import { ContactsService } from "./contacts.service";
import { ContactsStateModel } from "./contacts.state.model";

@State<ContactsStateModel>({
	name: 'contacts',
	defaults: new ContactsStateModel(),
})
@Injectable()
export class ContactsState {

	@Selector()
	static contacts(state: ContactsStateModel) { return state.contacts };

	@Selector()
	static filterContacts(state: ContactsStateModel) { return state.filterContacts };

	@Selector()
	static selectedContact(state: ContactsStateModel) { return state.selectedContact };

	constructor(private contactsService: ContactsService) { }

	@Action(ContactsActions.GetContacts)
	getContacts(ctx: StateContext<ContactsStateModel>) {
		return this.contactsService.getUsers().pipe(
			tap((contacts: ContactsModel[]) => {
				ctx.patchState({
					contacts: contacts,
					filterContacts: contacts
				})
			})
		)
	}

	@Action(ContactsActions.GetContactById)
	getContactById(ctx: StateContext<ContactsStateModel>, action: ContactsActions.GetContactById) {
		const index: number = action.payload;
		const contacts: ContactsModel[] = ctx.getState().contacts;
		const selectedContact: ContactsModel = contacts[index];
		ctx.patchState({
			selectedContact: selectedContact
		})
	}

	@Action(ContactsActions.FilterContacts)
	filterContacts(ctx: StateContext<ContactsStateModel>, action: ContactsActions.FilterContacts) {
		let { value, page } = action.payload;
		value = value.toLocaleLowerCase();
		page = page * 8;
		const contacts: ContactsModel[] = ctx.getState().contacts;
		const filterContacts: ContactsModel[] = contacts.filter((contact: ContactsModel) => {
			return contact.FullName.toLowerCase().includes(value) || contact.emails.some((email: IEmailPhone) => email.contact.includes(value)) ||
				contact.phones.some((phone: IEmailPhone) => phone.contact.includes(value))
		})

		// filter logic needs work tried pagination but diidn't work
		// for (let i=0; i<page && i<contacts.length; i++) {
		// 	if (contacts[i].FullName.toLowerCase().includes(value) || contacts[i].emails.some((email: IEmailPhone) => email.contact.includes(value)) ||
		// 		contacts[i].phones.some((phone: IEmailPhone) => phone.contact.includes(value))) {
		// 			filterContacts.push(contacts[i])
		// 	}
		// }

		ctx.patchState({
			filterContacts: filterContacts
		})
	}

}