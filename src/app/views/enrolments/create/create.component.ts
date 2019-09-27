import {
  Component,
  OnInit
} from '@angular/core';
import { ApiService } from '../../../services/core/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-enrolments-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  secondFormGroup: FormGroup;
  chooseCourse: FormGroup;
  personalData: FormGroup;

  enrollments = [];
  courses = [];

  course: any = {};
  student: any = {};

  minDateForm = moment().add(1, 'days').toDate();
  limitDateForm = moment().add(3, 'months').toDate();

  isSending: boolean = false;

  constructor(
    private apiService: ApiService,
    private _formBuilder: FormBuilder,
    private adapter: DateAdapter<any>
  ) { }

  getCoursesByTypeAndArea(type, area) {
    this.apiService
      .getBuilder({
        api: 'portal',
        path: `courses/type/${type}/area/${area}`
      })
      .get()
      .then(courses => this.courses = courses.data)
      .catch(err => console.log('erro: ', err));
  }

  ngOnInit(): void {
    this.adapter.setLocale('pt');

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.chooseCourse = this._formBuilder.group({
      type:   ['', Validators.required],
      area:   ['', Validators.required],
      course: ['', Validators.required]
    });

    this.personalData = this._formBuilder.group({
      cpf:              ['', Validators.required],
      name:             ['', Validators.required],
      email:            ['', [Validators.required, Validators.email]],
      cellphone:        ['', Validators.required],
      graduationDate:   ['', Validators.required],
      address:          this._formBuilder.group({
        zip:              ['', Validators.required],
        state:            ['', Validators.required],
        city:             ['', Validators.required],
        neighborhood:     ['', Validators.required],
        street:           ['', Validators.required],
        number:           ['', Validators.required],
        complement:       ['']
      })
    });
  }

  onTypeOrAreaChange(event) {
    const type = this.chooseCourse.controls.type.value;
    const area = this.chooseCourse.controls.area.value;

    if (type && area)
      this.getCoursesByTypeAndArea(type, area);
    
  }

  onCourseChange(event) {
    const courseId = this.chooseCourse.controls.course.value;
    this.course = this.courses.find(c => c._id === courseId);
  }

  getCourseType(type) {
    if (type === 'POS') return "Pós-Graduação";
  }

  calcCourseWorkload(course) {
    return course.disciplines.reduce((total, d) => total += +d.workload, 0);
  }

  extractStudent() {
    this.student = this.personalData.value;
  }

  async finish() {
    this.isSending = true;

    try {
      const studentSaved = await this.apiService
        .getBuilder({
          api: 'portal',
          path: `students`
        })
        .post(this.student);
      
      await this.apiService
        .getBuilder({
          api: 'portal',
          path: `enrollments`
        })
        .post({ cpf: studentSaved.cpf, _courseId: this.course._id, contract: "http://www.google.com" });

    } catch (err) {
      console.error(err);
    } finally {
      this.isSending = false;
    }
  }

}
