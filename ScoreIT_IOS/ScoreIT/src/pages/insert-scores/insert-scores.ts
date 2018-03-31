import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the InsertScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-scores',
  templateUrl: 'insert-scores.html',
})
export class InsertScoresPage {
  tournaments: any
  isTournamentScorePresent: any
  name = '';
  email = '';
  tournamentData = { teamA: '', teamB: '' , tournamentName: '', tournamentType:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.email = navParams.get('email')
    console.log(this.email)
    this.name = navParams.get('name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertScoresPage');
    this.http.post('http://localhost:8000/scoreIT/api/retrieve_tournaments/',
    {
      email : this.email
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.tournaments = data
        // alert(data)
      },err=> {
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }

  populateTeam(tournament) {
    this.http.post('http://localhost:8000/scoreIT/api/retrieve_tournament_scores/',
    {
      email : this.email,
      tournament_name:tournament
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.isTournamentScorePresent=true
        // alert(data)
      },err=> {
      this.isTournamentScorePresent=false
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }
}
