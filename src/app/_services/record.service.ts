import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '@/_models';

@Injectable({ providedIn: 'root' })
export class RecordService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Record[]>(`${config.apiUrl}/api/records/`);
    }
}