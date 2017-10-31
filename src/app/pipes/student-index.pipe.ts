import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../model/student';

@Pipe({
  name: 'studentIndex'
})
export class StudentIndexPipe implements PipeTransform {

  transform(value: Student, args?: any): any {
    return value ? value.index : '';
  }

}
