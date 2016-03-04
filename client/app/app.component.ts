import {Component} from 'angular2/core';
import {NavBarComponent} from 'components/navbar/NavbarComponent';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [NavBarComponent]
})
export class AppComponent { }
