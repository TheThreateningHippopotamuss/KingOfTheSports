import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  theUser = localStorage.getItem('email');
  constructor(public toastr: ToastsManager) { }

  ngOnInit() {
    // this.toastr.success('Hello from home page');
  }

}
