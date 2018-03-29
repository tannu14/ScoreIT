import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the CreateTournamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-tournament',
  templateUrl: 'create-tournament.html',
})
export class CreateTournamentPage {
  email = ''
  name = ''

  tournamentData = { teamA: '', teamB: '' , tournamentName: '', tournamentType:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController, public http: HttpClient) {
    this.email = navParams.get('email')
    this.name = navParams.get('name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTournamentPage');
  }

  public createTournament() {
    let loader = this.showLoading()
    //console.log(this.tournamentData.tournamentName);
    this.http.post('http://localhost:8000/scoreIT/api/insert_team_table/',
    {
      email : this.email,
      tournament_name: this.tournamentData.tournamentName,
      team_a_name: this.tournamentData.teamA,
      team_b_name: this.tournamentData.teamB,
      tournament_type: this.tournamentData.tournamentType
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
        alert(data)
        this.loading.dismiss()
      },err=> {
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
      this.loading.dismiss()
    });
    this.presentToast()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Tournament was created successfully ',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
