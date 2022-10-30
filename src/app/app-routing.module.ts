import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'contacts',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('./contacts-dashboard/contacts.module').then(m => m.ContactsModule),
	},
	{
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
