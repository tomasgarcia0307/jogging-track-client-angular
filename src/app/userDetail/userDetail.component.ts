import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: 'userDetail.component.html' })
export class UserDetailComponent {
    updateForm: FormGroup;
    EditUser: User;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(private userService: UserService, private router: ActivatedRoute, private formBuilder: FormBuilder,) { }

    ngOnInit() {
        
        let id:number = parseInt(this.router.snapshot.paramMap.get('id'))
        this.userService.getOne(id).pipe(first()).subscribe(user => {
            this.EditUser = user
            this.updateForm = this.formBuilder.group({
                first_name: [user.first_name, Validators.required],
                last_name: [user.last_name, Validators.required],
                email: [user.email, Validators.required],
                username: [user.username, Validators.required]
            });
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.updateForm.controls; }

    onSubmit() {
        console.log('*********submitted')
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateForm.invalid) {
            return;
        }

        this.loading = true;
    }
}