import {
    Component,
    OnInit
} from '@angular/core';
import { ApiService } from '../../../services/core/api.service';

@Component({
    selector   : 'app-enrolments-list',
    templateUrl: './list.component.html',
    styleUrls  : [ './list.component.scss' ]
})

export class ListComponent implements OnInit {

    courses = [];

    constructor(private apiService: ApiService) {}

    exemploRequisicao() {
        this.apiService
            .getBuilder({
                api : 'portal',
                path: 'courses'
            })
            .get()
            .then(courses => this.courses = courses.data)
            .catch(err => console.log('erro: ', err));
    }

    ngOnInit(): void {
        this.exemploRequisicao();
    }
}
