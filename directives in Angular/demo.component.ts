import { Component} from '@angular/core';
import { Employee } from '../employee/employee.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
    public mode:string="List";
    public employee:Employee[]=[
      {eid:1,ename:"Smith",job:"developer",salary:50000,country:"UK"},
      {eid:2,ename:"John",job:"tester",salary:40000,country:"US"},
      {eid:3,ename:"Deny",job:"manager",salary:80000,country:"India"},
      {eid:4,ename:"larry",job:"developer",salary:50000,country:"Canada"},
      {eid:5,ename:"Amit",job:"developer",salary:50000,country:"India"},
      {eid:6,ename:"Abhinay",job:"tester",salary:40000,country:"India"},
      {eid:7,ename:"Ankit",job:"manager",salary:80000,country:"India"},
    ]

}
