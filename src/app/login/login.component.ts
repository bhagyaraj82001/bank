import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //property/variable

  header="Welcome to our Bank"
  accPlaceholder="Account please"

  //acno
  acno=""
  
  //password
  pswd=""


//database
database:any={
  1000:{acno:1000,username:"Near",password:1000,balance:5000},
  1001:{acno:1001,username:"Elizabeth",password:1001,balance:7000},
  1002:{acno:1002,username:"Shoji",password:1002,balance:6000}
}

  constructor() { }

  ngOnInit(): void {
  }


  //user defined function
  acnoChange(event:any){
    this.acno=event.target.value
     
  }
  pswdChange(event:any){
    this.pswd=event.target.value
     
     
  }

  // login(){

  //  //fetch acno
  //  var acno=this.acno
  //  console.log(acno);

  //  //fetch pswd
  //  var pswd=this.pswd
  //  console.log(pswd)
   
  //  let userDetails = this.database
  //  if(acno in userDetails){
  //    if(pswd==userDetails[acno]['password']){
  //       alert('login sucessful')
  //    }
  //    else{
  //     alert('incorrect')
  //    }
  //  }
  //  else{
  //   alert('no user')
  //  }

  // }
  
  login(a:any,p:any){

    console.log(a)

    //fetch acno
    var acno=this.acno
    console.log(acno);
 
    //fetch pswd
    var pswd=this.pswd
    console.log(pswd)
    
    let userDetails = this.database
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
         alert('login sucessful')
      }
      else{
       alert('incorrect')
      }
    }
    else{
     alert('no user')
    }
 
   }
   

}
