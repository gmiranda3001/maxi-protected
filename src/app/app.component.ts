import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Llamar', url: '/calling', icon: 'call' },
    { title: 'Localizame', url: '/localizame', icon: 'location' },
    { title: 'Pagos', url:'/pago' , icon: 'card' },
    { title: 'Restablecer Contraseña', url: '/passwordreset', icon: 'refresh-circle' }
  ];
  constructor(
    private auth: AuthService,
  ) { }

  logout()
  {
    this.auth.signOut();
  }
}


