import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { ContactsActions } from "../stores/contacts/contacts.action";


@Injectable()
export class ContactsResolver implements Resolve<any> {

	constructor(
		private store: Store,
	) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> | any {
		return this.store.dispatch(new ContactsActions.GetContacts());
	}
}