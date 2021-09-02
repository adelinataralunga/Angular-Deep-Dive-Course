import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseView() {
    console.log('card comp - btn clicked...');

    this.courseEmitter.emit(this.course);
  }

  isImageVisible () {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      // return ['beginner'];
      return 'beginner';
    }
    // return {
    //   'beginner': this.course.category == 'BEGINNER'
    // };
  }

  cardStyles() {
     return {
       'text-decoration': 'underline'};
  }

}
