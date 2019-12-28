import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
