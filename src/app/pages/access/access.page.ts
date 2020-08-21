import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async goToSignIn() {
    console.log('Sign-in');
    const modal = await this.modalCtrl.create({
      component: SignInComponent,
    });
    return await modal.present();
  }

  async goToSignUp() {
    console.log('Sign-Up');
    const modal = await this.modalCtrl.create({
      component: SignUpComponent,
    });
    return await modal.present();
  }

}
