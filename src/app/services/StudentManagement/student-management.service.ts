import { Injectable } from '@angular/core';
import {Student} from '../../model/student';

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

  public latestStudents(): Student[] {
    return this.students.slice(0, 4);
  }
}
