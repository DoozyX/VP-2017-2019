import {Component, OnInit} from '@angular/core';
import {Student} from './model/student';
import {StudentManagementService} from './services/StudentManagement/student-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Students';

  public students: Student[];
  public currentStudent: Student;

  constructor(private studentService: StudentManagementService) {
  }

  getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students)
  }

  ngOnInit(): void {
    this.getStudents();
  }

  showStudent(student: Student) {
    this.currentStudent = student;
  }

}
