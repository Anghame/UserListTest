import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Campany } from '../../model/campany';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
 

  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent {
  isError=false;
  isLoading=true;
  selected=false
  companyToDisplay:any = {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
  users=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
  ];

  constructor(private userService:UserService
  ) {}
  ngOnInit(): void {
    this.fetchUsers();
  
  }
  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        this.isLoading = false;
      },
      (error:any) => {
        this.isError = true;
        this.isLoading = false;
      }
    );
  }
  handleSelect(user:any){
this.selected=true
this.companyToDisplay=user.company

  }
}
