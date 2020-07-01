import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private route:Router,private http:HttpClient ) { }

  ngOnInit() {
   const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
    );
    signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
    );

    var nav = document.getElementById('main_nav'),
          body = document.body;

      signUpButton.addEventListener('click', function(e) {
      body.className = body.className? '' : 'with_nav';
          e.preventDefault();
      });




    }
    file: File
    signupFile: File
    username: string ="";
    emailAdr: string="";
    password: string="";
    loginResponse: string;


   onSelectFile(event) {
        console.log("login" + event.target.files[0]);
        this.file = event.target.files[0]
    }

    onSelectSignupFile(event) {

        console.log("signupfile" + event.target.files[0]);
        this.signupFile = event.target.files[0]
      }

    signup(){
    var fd = new FormData();
            fd.append('imageFile', this.signupFile);
            fd.append('userId', this.emailAdr);
            fd.append('password', this.password);
            this.http.post<any>('http://localhost:8080/ca/register', fd).subscribe(data => {
                    this.loginResponse = data.message;
                    alert(this.loginResponse);
                    window.location.reload();
                    })

    }

    login(){

     var fd = new FormData();
        fd.append('imageFile', this.file);
        fd.append('userId', this.username);
      this.http.post<any>('http://localhost:8080/ca/facialRecognition', fd).subscribe(data => {
        this.loginResponse = data.message;


       if(this.loginResponse == 'Facial Recognition Successful'){
       alert(this.loginResponse)
         this.route.navigate(['exammenu']);
       }else {

       alert(this.loginResponse)


       }
       })

  }

}
