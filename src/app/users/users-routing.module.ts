import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';
const routes: Routes = [  { path: '', redirectTo: '/users', pathMatch: 'full' },
{ path: 'users', component: ListUsersComponent },
{ path: 'addUpdate', component: AddUpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
