import {
    Component,
    OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector   : 'app-login',
    templateUrl: './choose-certifier.component.html',
    styleUrls  : [ './choose-certifier.component.scss' ]
})
export class ChooseCertifierComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        //this.router.navigate([ '/dashboards/dashboard1' ]);
    }
}
