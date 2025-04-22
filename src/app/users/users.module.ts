import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,ButtonModule,FormsModule,ReactiveFormsModule
  ]
})
export class UsersModule { }
