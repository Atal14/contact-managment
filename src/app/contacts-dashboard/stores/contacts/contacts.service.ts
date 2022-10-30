import { Injectable } from "@angular/core";
import { delay, map, Observable, of } from "rxjs";
import { ContactsModel } from "src/app/models/contacts.model";
import { IUser, users } from "src/mockData";

@Injectable()
export class ContactsService {
	constructor() {}

    // Normally we would be using httpClient to fetch data form server here
    getUsers(): Observable<ContactsModel[]> {
        return of(users).pipe(
            delay(1000),
            map((users: IUser[]) => {
                if (Array.isArray(users) && users.length) {
                    return users.map((user) => new ContactsModel(user))
                }
                return [];
            })
        )
    }
}