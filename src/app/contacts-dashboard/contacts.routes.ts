import { Routes } from "@angular/router";
import { ContactsDashComponent } from "./contacts-dash/contacts-dash.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { DetailsComponent } from "./details/details.component";
import { ContactsResolver } from "./resolvers/contacts.resolver";

export const ContactsRoutes: Routes = [
    {
        path: 'contacts',
        component: ContactsDashComponent,
        children: [
            {
                path: '',
                component: ContactsComponent,
                resolve: {ContactsResolver}
            },
            {
                path: ':id',
                outlet: 'details',
                component: DetailsComponent
            }
        ]
    }
]