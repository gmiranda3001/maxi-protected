import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-calling',
  templateUrl: './calling.page.html',
  styleUrls: ['./calling.page.scss'],
})
export class CallingPage implements OnInit 
{
  user: any;

  constructor
  (
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }
}
