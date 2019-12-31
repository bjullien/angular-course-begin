import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  /*
    declare an input property of <course-card> element, in app.component.html:
        <course-card [course]="rxjsCourse"></course-card>
    then {{ course.description }} is used in course-card.component.html
        <div class="course-title">
            {{ course.description }}
        </div>
  */
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  /*
    If no @Output() decorator => event not emitted
    event emitter is renamed here, we add a tslint instruction to avoid warning
  */
  // tslint:disable-next-line: no-output-rename
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed() {
    console.log('CourseCardComponent - onCourseViewed()');

    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

}
