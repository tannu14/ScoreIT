import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the ViewScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-scores',
  templateUrl: 'view-scores.html',
})
export class ViewScoresPage {
tournaments: any
name = '';
email = '';
summaryData: any
summaryDataPresent: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.email = navParams.get('email')
    this.name = navParams.get('name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewScoresPage');
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

   viewSummary(selectedTournament) {
    this.http.post('http://localhost:8000/scoreIT/api/retrieve_tournament_scores/',
    {
      email : this.email,
      tournament_name: selectedTournament
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
      console.log(data)
      this.summaryData = data
      this.summaryDataPresent = true
        // alert(data)
      },err=> {
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
   }

}
