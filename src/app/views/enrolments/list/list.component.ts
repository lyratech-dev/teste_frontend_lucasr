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

    enrollments = [];

    constructor(private apiService: ApiService) {}

    getEnrollmentsByCpf(cpf) {
        this.apiService
            .getBuilder({
                api : 'portal',
                path: `enrollments/cpf/${cpf}`
            })
            .get()
            .then(enrollments => this.enrollments = enrollments.data)
            .catch(err => console.log('erro: ', err));
    }

    ngOnInit(): void {
        this.getEnrollmentsByCpf("123.456.789-10");
    }

    calcWorkload(course) {
        return course.disciplines.reduce((total, d) => total += +d.workload, 0);
    }

    getStatusMessage(status) {
        if (status === 'PENDING_PAYMENT')  return "Aguardando Pagamento da Taxa de Inscrição";
        if (status === 'CANCELED')  return "Cancelado";
        if (status === 'ENROLLED')  return "Matrículado";
    }

    getStatusColor(status) {
        if (status === 'PENDING_PAYMENT')  return "accent";
        if (status === 'CANCELED')  return "warn";
        if (status === 'ENROLLED')  return "primary";
    }

    getType(type) {
        if (type === 'POS') return "Pós-Graduação";
    }
}
