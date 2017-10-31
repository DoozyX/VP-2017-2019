import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentManagementService} from '../services/StudentManagement/student-management.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;

  constructor(private route: ActivatedRoute,
              private  service: StudentManagementService) {
  }


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndex = params.get('index');
        const promiseStudent = this.service.findByIndex(Number(studentIndex));
        promiseStudent.catch(
          error => {
            console.error(error.errorMessage);
          }
        );
        return promiseStudent;
      })
      .subscribe(student => {
        this.student = student;
      });

  }

}
