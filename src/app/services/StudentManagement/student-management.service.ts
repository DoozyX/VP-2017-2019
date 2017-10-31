import {Injectable} from '@angular/core';
import {Student} from '../../model/student';
import {STUDENTS} from './mock-students';

@Injectable()
export class StudentManagementService {
  constructor() {
  }

  private students = [{
    name: 'Doozy',
    surname: 'Dzx',
    index: 151539,
    program: 'KNIA'
  }, {
    name: 'Doozy1',
    surname: 'Dzx1',
    index: 151540,
    program: 'KNIA'
  }, {
    name: 'Doozy2',
    surname: 'Dzx2',
    index: 151541,
    program: 'KNIA'
  }, {
    name: 'Doozy3',
    surname: 'Dzx3',
    index: 151542,
    program: 'KNIA'
  }, {
    name: 'Doozy4',
    surname: 'Dzx4',
    index: 151543,
    program: 'KNIA'
  }];


  /*  getStudentsTest(): Student[] {
   return STUDENTS;
   }*/

  public getStudents(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  getStudentsSlowly(): Promise<Student[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStudents()), 2000);
    });
  }

  addStudent(student: Student): Promise<Student> {
    this.students.push(student);
    return Promise.resolve(student);
  }

  editStudent(oldStudent: Student, updatedStudent: Student): Promise<Student> {
    Object.assign(oldStudent, updatedStudent);

    return Promise.resolve(updatedStudent);
  }

  findByIndex(index: number): Promise<Student> {
    const result = this.students.filter(student => student.index === index);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);
    } else {
      return Promise.reject({
        errorMessage: 'No student with the given index found',
        errorCode: index
      });
    }
  }
}
