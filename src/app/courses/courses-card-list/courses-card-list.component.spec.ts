import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesCardListComponent } from './courses-card-list.component';
import { CoursesModule } from '../courses.module';
import { COURSES } from '../../../../server/db-data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';
import { Course } from '../model/course';
import { setupCourses } from '../common/setup-test-data';




describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let elementToDebug: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [CoursesModule]
    })
      .compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        elementToDebug = fixture.debugElement;

      });
  }));

  it('should create the component', () => {

    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {

    component.courses = setupCourses();

    console.log('Changes NOT Detected: ', elementToDebug.nativeElement.outerHTML);
    fixture.detectChanges();
    console.log('Changes Detected: ', elementToDebug.nativeElement.outerHTML);

    const cards = elementToDebug.queryAll(By.css('.course-card'));

    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(12, 'Unexpected number of courses');

  });


  it('should display the first course', () => {

    component.courses = setupCourses();

    fixture.detectChanges();

    const course = component.courses[0];
    const cards = elementToDebug.query(By.css('.course-card:first-child')),
      title = cards.query(By.css('mat-card-title')),
      image = cards.query(By.css('img'));

    expect(cards).toBeTruthy('Could not find course card');

    expect(title.nativeElement.textContent).toBe(course.titles.description);

    expect(image.nativeElement.src).toBe(course.iconUrl);

  });


});


