import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course:Course;

  @Input() noImageTemplate: TemplateRef<any>;

  @Input() cardIndex:number;

  @Output() courseSelected = new EventEmitter<Course>();
  
  constructor(){
    console.log(this.course);
  }

  onCourseViewClick(){
    console.log("course view button click");
    this.courseSelected.emit(this.course);
  }

  cardClasses(){
    return {"beginner":this.course.category == "BEGINNER"}
  }

}
