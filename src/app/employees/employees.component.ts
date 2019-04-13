import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],

    animations: [
    trigger('listStagger', [
            transition('* <=> *', [
              query(
                ':enter',
                [
                  style({ opacity: 0, transform: 'translateY(-15px)' }),
                  stagger(
                    '50ms',
                    animate(
                      '550ms ease-out',
                      style({ opacity: 1, transform: 'translateY(0px)' })
    )
    )
    ],
    { optional: true }
    ),
    query(':leave', animate('50ms', style({ opacity: 0 })), {
                optional: true
              })
            ])
          ])
        ]
})
export class EmployeesComponent implements OnInit {

  employees$: Object;

  constructor(private data: DataService) { }

    ngOnInit() {
    this.data.getEmployees().subscribe(
        data => this.employees$ = data
      );
     /*this.data.getEmployees.subscribe(
        data => this.employees$ = data
      );*/
    }

}
