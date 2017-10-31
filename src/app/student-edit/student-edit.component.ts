import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Student} from '../model/student';
import {StudentManagementService} from '../services/StudentManagement/student-management.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnChanges {

  private _editingStudent: Student;
  protected student: Student;

  @Input()
  set setEditingStudent(editingStudent: Student) {
    console.log('test');
    this.setStudent(editingStudent);
  }

  studentForm: FormGroup;

  private setStudent(editingStudent: Student) {
    if (editingStudent) {
      this._editingStudent = editingStudent;
      this.student.index = editingStudent.index;
      this.student.name = editingStudent.name;
      this.student.surname = editingStudent.surname;
      this.student.program = editingStudent.program;
    } else {
      this.student = new Student;
      this._editingStudent = this.student;
    }
  }

  constructor(private route: ActivatedRoute,
              private  service: StudentManagementService,
              private fb: FormBuilder) {
    this.student = new Student();
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      index: '',
      name: '',
      surname: '',
      program: ''
    });
  }

  ngOnChanges() {
    this.studentForm.reset({
      index: this.student.index,
      name: this.student.name,
      surname: this.student.surname,
      program: this.student.program
    });
  }



  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndex = params.get('index');
        const studentPromise = this.service.findByIndex(Number(studentIndex));
        studentPromise.catch(
          error => {
            console.error(error.errorMessage);
            this.setStudent(null);
          }
        );
        return studentPromise;
      })
      .subscribe(student => {
        console.log('test');
        this.setStudent(student);
      });

  }

  save(): void {
    this.service.addStudent(this.student).then(studentServer => this.setStudent(studentServer));
    this.student = new Student();
  }

  onSubmit() {
    const formModel = this.studentForm.value;
    const saveStudent: Student = {
      index: formModel.index,
      name: formModel.name,
      surname: formModel.surname,
      program: formModel.program
    };
    this.service.addStudent(saveStudent).then(studentServer => this.setStudent(studentServer));
    this.student = new Student();
  }

  edit(): void {
    this.service.editStudent(this._editingStudent, this.student).then(studentServer => this.setStudent(studentServer));
  }
}
