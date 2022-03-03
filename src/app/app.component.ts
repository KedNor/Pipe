import { Component, OnInit } from '@angular/core';
//  Il faut définir la locale pour pouvoir utiliser le paramètre locale du pipe
//  Vous ne pourrez pas lui passer 'fr' en deuxième paramètre sinon
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { UserService } from './user.service';
import { observable } from 'rxjs';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public nom = 'Jean';
  public date1 = new Date();
  public date2 = Date.now();

  public search = '';
  public names$ = this.userService.users$;

  // public names = ['David', 'Christine', 'Amel', 'Fatou'];

  public phrase =
    "Ma très longue phrase que j'aimerais raccourcir et mettre en majuscules en utilisant des pipes";

  constructor(private userService: UserService) {}

  //On assigne directement notre observable a notre propriété nomUser pour l'utilisation de notre pipe async
  // public nomUsers$ = this.userService.users$;

  ngOnInit(): void {
    console.log(this.names$);

    // utilisation du pipe async permet d'éviter de faire une souscription sur l'observable
    // this.userService.users.subscribe((nomUsers) => {
    //   this.nomUsers = this.nomUsers;
    // });
  }

  //ajout d'un nom dans notre tableau
  // addname() {
  //   this.names.push('saitama');
  //   console.log(this.names);
  // }
}
