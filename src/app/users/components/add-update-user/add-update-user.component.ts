import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss'],
  providers: [MessageService]
})
export class AddUpdateUserComponent {

  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
   
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const newUser: any = this.userForm.value;
    this.userService.addUser(newUser);

    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Success',
    //   detail: 'User added successfully'
    // });

    setTimeout(() => this.router.navigate(['/users']), 1000);
  }
}
