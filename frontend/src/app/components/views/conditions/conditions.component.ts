import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})

export class ConditionsComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  enableAccept = true;

  ngOnInit(): void {
  }

  onScroll(event: any): void {
    if (event) {
      console.log(event);
      this.enableAccept = false;
    } else {
      this.enableAccept = true;
    }
  }

  nextStep(): void {
    this.router.navigate(['/invites']);
  }

  decline(): void {
    this.router.navigate(['/']);
  }
}
