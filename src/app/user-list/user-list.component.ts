import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  //ici on recupere des valeurs de l'élement parent app.component
  //ici on recupere des valeurs de l'élement parent app.component
  @Input() names: string[] | [];
  @Input() search!: string;

  constructor() {
    this.names = [];
  }

  ngOnInit(): void {}
}
