import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({ templateUrl: 'userList.component.html' })
export class UserListComponent {
    users: User[] = [];
    displayedColumns: string[] = ['index', 'first_name', 'last_name', 'username', 'email', 'edit', 'remove']

    constructor(private userService: UserService, private router:Router) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    onSelect(id){
        this.router.navigate(['/users', id]);
    }
}