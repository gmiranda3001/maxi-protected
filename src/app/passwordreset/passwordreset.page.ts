import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})

export class PasswordresetPage implements OnInit
{
  email: string;

  constructor
  (
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController

  ) { }

  ngOnInit() {
  }

  async resetPassword()
  {
    if(this.email)
    {
       const loading = await this.loadingCtrl.create({
      message: 'enviado correo...',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afauth.sendPasswordResetEmail(this.email)
    .then(()=> {
      //envia mensaje correcto
      loading.dismiss();
      this.toast('Enviado', 'success');
      this.router.navigate(['/login']);
    })
      .catch((error)=>{
        // error
        loading.dismiss();
        this.toast(error.message,'danger');
      })
  
    }else{
      this.toast('ingresa tu correo','danger');
    }
  }//final de reseteo

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });

    toast.present();

  }//final del toast



} 
