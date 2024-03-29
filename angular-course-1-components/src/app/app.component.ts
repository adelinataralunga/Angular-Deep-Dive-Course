import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;

  price = 9.9923742374238;

  rate = 0.67;

  course = COURSES[0];

  // 1st of January 2000
  startDate = new Date(2000, 0, 1);

  onCourseSelected(course: Course) {
    console.log('App comp - btn clicked...', course);
  }

}
