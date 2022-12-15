import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from '../students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private dataBase: AngularFirestore) {

  }

  createStudent(student: Student): void {
    this.dataBase.collection ('students').add({
      name: student.name,
      age: student.age
    });
  }

  updateStudent(key: string, value: any) {

  }

  deleteStudent(key: string) {
    const student = this.dataBase.doc(`students/${key}`);
    student.delete();
  }

  getStudentsList(): Observable<any[]>  {
    return this.dataBase.collection('students').valueChanges({idField: '_id'});
  }

   deleteAll() {
    return this.dataBase.collection('students')
  }

}
