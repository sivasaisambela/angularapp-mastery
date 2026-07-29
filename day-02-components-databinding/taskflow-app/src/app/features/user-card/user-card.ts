import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  userName:string='Siva';
  userRole:string='Full Stack developer';
  isOnline:boolean=true;


  toggleStatus(){
    this.isOnline= !this.isOnline;
  }
}
