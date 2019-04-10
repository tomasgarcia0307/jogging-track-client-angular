import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Record } from '@/_models';
import { RecordService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'recordList.component.html' })
export class RecordListComponent {
    records: Record[] = [];
    displayedColumns: string[] = ['index', 'date', 'distance', 'time', 'avg', 'edit', 'remove']

    constructor(private recordService: RecordService) { }

    ngOnInit() {
        this.recordService.getAll().pipe(first()).subscribe(records => {
            this.records = records;
        });
    }
}