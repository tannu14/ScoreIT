import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = '';
  email = '';
  constructor(private nav: NavController, public navParams: NavParams, private auth: AuthService) {
    //let info = this.auth.getUserInfo();
    this.name = navParams.get('name')
    this.email = navParams.get('email')
    console.log(this.email)
  }

  public createTournament() {
    this.nav.push('CreateTournamentPage', {
    name: this.name,
    email: this.email
    });
  }

  public enterScores() {
    this.nav.push('InsertScoresPage', {
    name: this.name,
    email: this.email
    });
  }

  public viewScores() {
    this.nav.push('ViewScoresPage', {
    name: this.name,
    email: this.email
    });
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
