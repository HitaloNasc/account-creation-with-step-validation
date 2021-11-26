import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  formInvites: FormGroup;

  amountEmails = new Array(3);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formInvites = this.formBuilder.group({
      email: this.formBuilder.array([])
    });
  }


  ngOnInit(): void {
  }

  addEmailField(): void {
    this.amountEmails.push('');
  }

  skip(): void {
    this.router.navigate(['/']);
  }

  sendInvites(): void{
    console.log(this.formInvites.value);
  }

  nextStep(): void {
    this.router.navigate(['/']);
  }
}
