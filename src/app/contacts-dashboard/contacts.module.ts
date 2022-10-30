import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { ContactsDashComponent } from "./contacts-dash/contacts-dash.component";
import { ContactsRoutes } from "./contacts.routes";
import { ContactsComponent } from "./contacts/contacts.component";
import { DetailsComponent } from "./details/details.component";
import { ContactsResolver } from "./resolvers/contacts.resolver";
import { ContactsService } from "./stores/contacts/contacts.service";
import { ContactsState } from "./stores/contacts/contacts.store";

@NgModule({
	declarations: [
		ContactsDashComponent,
		ContactsComponent,
    	DetailsComponent,
	],
	imports: [
		// Common, Reactive Module should be in shared module and shared should be here
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(ContactsRoutes),
		NgxsModule.forFeature([ContactsState])
	],
	providers: [
		ContactsService,
		ContactsResolver
	]
})
export class ContactsModule { }

