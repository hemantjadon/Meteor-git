import {Component} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
  selector: 'app',
  template: "<p>Hello World!</p>"
})
class Socially {
  
}

bootstrap(Socially);