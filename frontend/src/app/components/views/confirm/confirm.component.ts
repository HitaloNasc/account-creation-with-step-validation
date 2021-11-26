import { User } from './../../user/user.model';
import { UserService } from './../../user/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  user: User = this.userService.userSaved;
  email = this.userService.userSaved.email;
  code = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0
  }

  formCode = {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  }



  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    console.log(this.user.code);
    this.breakCode(this.user.code)
    console.log(this.code)
  }


  breakCode(code: number): void {
    const broken = String(code).split('');
    this.code = {
      a: Number(broken[0]),
      b: Number(broken[1]),
      c: Number(broken[2]),
      d: Number(broken[3]),
      e: Number(broken[4]),
      f: Number(broken[5])
    }
  }

  valitationCode(): void {
    if (
      this.code.a == Number(this.formCode.a) &&
      this.code.b == Number(this.formCode.b) &&
      this.code.c == Number(this.formCode.c) &&
      this.code.d == Number(this.formCode.d) &&
      this.code.e == Number(this.formCode.e) &&
      this.code.f == Number(this.formCode.f)) {
        this.router.navigate(['/conditions']);
    } else {
      alert('Code is incorrect.');
    }
  }

  nextStep(): void {
  }
}
