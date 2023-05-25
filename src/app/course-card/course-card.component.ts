import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewClick(){
    console.log("course view button click");
    this.courseSelected.emit(this.course);
  }

}