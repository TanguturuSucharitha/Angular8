import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private jobTitle:string=null;
      private salary:number=null;
      private annualsalary:number=null;
      private logo:string=null;
      private userName:string=null;

      public constructor(){
        this.userName="suchi";
        this.jobTitle="Trainee";
        this.salary=50000;
        this.logo="assets/address-book.jpg";
      }
      public getAnnualSalary():number{
        this.annualsalary=this.salary*12;
        return this.annualsalary;
      }
        public greetUser(): void{
          this.userName="Ms." +this.userName;
          alert('Welcome' + this.userName);

        }
}

