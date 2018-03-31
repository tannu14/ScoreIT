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
  teamsPerTournamentObj: any
  teamBList: any
  isTeamBPresent: any
  tournament: any
  winnersList: any
  teams = new Array()
  teamAName: any
  teamBName: any
  winner: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.email = navParams.get('email')
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
    this.tournament = tournament
    this.http.post('http://localhost:8000/scoreIT/api/retrieve_teams_per_tournament/',
    {
      email : this.email,
      tournament_name:tournament
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.teamsPerTournamentObj = data
      this.isTournamentScorePresent=true
        // alert(data)
      },err=> {
      this.isTournamentScorePresent=false
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }

  populateTeamB(teamAName) {
    this.teamAName = teamAName
    this.teams.push(teamAName)
    this.http.post('http://localhost:8000/scoreIT/api/retrieve_team_b/',
    {
      email : this.email,
      tournament_name:this.tournament,
      Team_A_Name: teamAName
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.teamBList = data
      this.isTeamBPresent=true
        // alert(data)
      },err=> {
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }


  populateTeamWinnerList(teamBName) {
    this.teamBName = teamBName
    this.teams.push(teamBName)
    this.winnersList =  true
  }

  register(winner) {
    this.winner = winner
  }

  submitWinner() {
    this.http.post('http://localhost:8000/scoreIT/api/update_tournament_scores/',
    {
      email : this.email,
      tournament_name:this.tournament,
      Team_A_Name: this.teamAName,
      Team_B_Name: this.teamBName,
      won: this.winner
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.navCtrl.push('ViewScoresPage', {
      name: this.name,
      email: this.email
      });
      },err=> {
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
    }
}
