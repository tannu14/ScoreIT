import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  tournamentData = { teamA: '', teamB: '' , tournamentName: '', tournamentType:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTournamentPage');
  }

  public createTournament() {
    //this.showLoading()
    //console.log(this.tournamentData.tournamentName);
    this.presentToast()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Tournament was created successfully',
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
