import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
// import { AuthService } from '../../providers/auth-service/auth-service';
import { HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  name: any
  email: any
  data: any

  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public http: HttpClient) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    //this.showLoading()
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed) {
    //     console.log("allowed")
    //     this.nav.setRoot('HomePage');
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });
    this.http.post('http://localhost:8000/scoreIT/api/login/',
    {
      email : this.registerCredentials.email,
      password: this.registerCredentials.password
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(data => {
        console.log("Loggedin to true")
        this.data= data
        this.name = this.data.Name
        this.email = this.data.Email
        this.nav.setRoot('HomePage', {
        name: this.name,
        email: this.email
        });
      },err=> {
        this.showError("Access Denied");
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
