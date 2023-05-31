import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  startDate = new Date();
  price = 20.5;

  // @ViewChild(CourseCardComponent)
  // card:CourseCardComponent

  // @ViewChild('cardRef1')
  // card1:CourseCardComponent;

  // @ViewChild('cardRef2')
  // card2:CourseCardComponent;



  // onCourseSelected(course:Course){
  //   console.log("course card click, ", this.card1);
  //   console.log("course card click, ", this.card2);
  // }

  onCourseSelected(course:Course){
    console.log("course card click, ", course);
  }

  // @ViewChild('container')
  // containerDiv:ElementRef;

  // @ViewChild('testContent')
  // testConyentDiv:ElementRef;

  // onCourseSelected(course:Course){
  //   console.log("course container, ", this.testConyentDiv);
  // }

}
