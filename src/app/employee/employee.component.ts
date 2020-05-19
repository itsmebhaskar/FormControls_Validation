import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { PasswordMatch } from '../Validator/match-Validator';

@Component({ selector: 'app', templateUrl: 'employee.component.html' })
export class EmployeeComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: PasswordMatch('password', 'confirmPassword')
        });
    }

   
    get registerFrmCntrls() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

       
        if (this.registerForm.invalid) {
            return;
        }

       
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
