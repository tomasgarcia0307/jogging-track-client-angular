import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'userList.component.html' })
export class UserListComponent {
    users: User[] = [];
    displayedColumns: string[] = ['index', 'first_name', 'last_name', 'username', 'email', 'edit', 'remove']

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}