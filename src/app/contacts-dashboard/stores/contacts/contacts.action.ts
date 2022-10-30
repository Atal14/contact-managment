export namespace ContactsActions {
	
	export class GetContacts {
		static readonly type = '[Contacts] GetContacts';
		constructor() { }
	}

	export class GetContactById {
		static readonly type = '[Contacts] GetContactById';
		constructor(public payload: number) { }
	}

	export class FilterContacts {
		static readonly type = '[Contacts] FilterContacts';
		constructor(public payload: {value: string; page: number}) { }
	}
}