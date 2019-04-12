import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/api/users/`);
    }
    
    getOne(id:number) {
        return this.http.get<User>(`${config.apiUrl}/api/users/${id}/`);
    }

    deleteOne(id:number) {
        return this.http.delete<User>(`${config.apiUrl}/api/users/${id}/`);
    }

    updateOne(user:User) {
        return this.http.put<User>(`${config.apiUrl}/api/users/${user.id}/`, user);
    }

    addOne(user:User) {
        return this.http.post<User>(`${config.apiUrl}/api/users/`, user);
    }
}