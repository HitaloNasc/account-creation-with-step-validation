import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formCreate: FormGroup;

  user: User = {
    name: '',
    email: '',
    password: '',
    code: 0
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, this.passwordSize]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  ngOnInit(): void {

  }

  codeGenetor(): number {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 10);
    const e = Math.floor(Math.random() * 10);
    const f = Math.floor(Math.random() * 10);

    const code = Number(`${a}${b}${c}${d}${e}${f}`);

    return code;
  }

  passwordSize = (control: FormControl) => {
    const password = control.value;
    if (password && password !== '') {
      const size = /[0-9a-zA-Z$*&@#]{8,}/;
      return size.test(password) ? null : { sizeInvalid: true };
    }
    return null;
  }

  createUser(): void {
    this.user = {
      name: this.formCreate.value.name,
      email: this.formCreate.value.email,
      password: this.formCreate.value.password,
      code: this.codeGenetor()
    }
    if (this.formCreate.valid) {
      this.userService.create(this.user).subscribe(() => {
        this.router.navigate(['/confirm']);
      });
    }
  }

}
