import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  adminSignInForm: FormGroup;
  errorMsg: string;

  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder,
              private authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() { // Permet de recréer le formulaire dans le partie HTML
    this.adminSignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]{6,}')]]
    });
  }

  onAuth() {
    const email = this.adminSignInForm.get('email').value;
    const password = this.adminSignInForm.get('password').value;
    this.authentificationService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/admin', 'dashboard']);
      },
      (error) => {
        this.errorMsg = error;
        alert(this.errorMsg);
      }
    );
  }

}
