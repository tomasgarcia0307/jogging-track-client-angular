import { Component, ChangeDetectorRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { Record } from '@/_models';
import { RecordService, AuthenticationService } from '@/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({ templateUrl: 'recordList.component.html' })
export class RecordListComponent {
    recordForm: FormGroup;
    records: Record[] = [];
    submitted = false;
    loading = false;
    error = '';

    displayedColumns: string[] = ['index', 'date', 'distance', 'time', 'avg', 'edit', 'remove']

    constructor(
        private recordService: RecordService,
        private formBuilder: FormBuilder,
        private changeDetectorRefs: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.recordForm = this.formBuilder.group({
            distance: ['', Validators.required],
            time: ['', Validators.required]
        })
        
        this.recordService.getAll().pipe(first()).subscribe(records => {
            this.records = records;
        });
    }

    get f1(){ return this.recordForm.controls;}

    onSubmit(){
        this.submitted = true;

        if(this.recordForm.invalid){
            return;
        }
        this.loading = true;

        this.recordService.addOne(this.f1.distance.value, this.f1.time.value)
        .pipe(first())
        .subscribe(record => {
            console.log('success', record)
            this.records.push(record)
            this.loading = false;
        })
    }

    confirmModal(recordId){
        if(confirm()){
            this.recordService.removeOne(recordId)
            .pipe(first())
            .subscribe(record => {
                console.log('success', record)
            })
        }
    }
}

