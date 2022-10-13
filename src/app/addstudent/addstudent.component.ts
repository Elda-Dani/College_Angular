import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

name=""
rollNo=""
college=""
admissionNo=""
parentName=""
dob=""
address=""
mobile=""
parentMobile=""
emailId=""
bloodGroup=""

readValue=()=>{
  let data={
    "name":this.name,
    "rollNo":this.rollNo,
    "college":this.college,
    "admissionNo":this.admissionNo,
    "parentName":this.parentName,
    "dob":this.dob,
    "address":this.address,
    "mobile":this.mobile,
    "parentMobile":this.parentMobile,
    "emailId":this.emailId,
    "bloodGroup":this.bloodGroup
  }
  console.log(data)
}



  ngOnInit(): void {
  }

}
