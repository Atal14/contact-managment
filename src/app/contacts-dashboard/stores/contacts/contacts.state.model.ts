import { ContactsModel } from "src/app/models/contacts.model";

export class ContactsStateModel {
	contacts: ContactsModel[] = [];
	filterContacts: ContactsModel[] = [];
	selectedContact: ContactsModel | null = null;
}