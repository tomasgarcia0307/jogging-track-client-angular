import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '@/_models';

@Injectable({ providedIn: 'root' })
export class RecordService {
    constructor(
        private http: HttpClient,
    ) { }

    getAll() {
        return this.http.get<Record[]>(`${config.apiUrl}/api/records/`);
    }

    addOne(distance: number, time: number){
        return this.http.post<Record>(`${config.apiUrl}/api/records/`, {distance, time, date: new Date, user: JSON.parse(localStorage.getItem('currentUser')).user.id})
    }

    removeOne(recordId: number){
        return this.http.delete<Record>(`${config.apiUrl}/api/records/${recordId}/`)
    }
    
    editOne(record: Record){
        return this.http.put<Record>(`${config.apiUrl}/api/records/${record.id}/`, record)
    }

    // getWeekly()
}