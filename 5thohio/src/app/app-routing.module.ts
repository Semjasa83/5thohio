import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    // children: [
    //   { path: '', redirectTo: 'summary', pathMatch: 'prefix' },
    //   { path: 'summary', component: SummaryComponent },
    //   { path: 'board', component:  BoardComponent },
    //   { path: 'contacts', component: ContactsComponent,
    //     children: [
    //       { path: '',   redirectTo: 'contacts', pathMatch: 'full' },
    //       { path: 'contactdetail/:id', component: ContactDetailComponent }
    //     ]},
    //   { path: 'addtask', component: TaskAddRouterComponent}
    // ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
