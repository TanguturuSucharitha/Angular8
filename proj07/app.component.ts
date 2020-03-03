import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private message: String=null;
 private version: number=null;
 private topics:String[]=null;
 private topicname: String=null;
 private inx: number=null;

 public constructor() {
   this.message="Welcome!";
   this.version=8;
   this.topics=["data binding","http","forms","routing"];
  
 }
 public addTopic(currentTopic: String): Boolean {
  if(currentTopic=="") {
  alert("Add topic");
  return false;
  }
  for(var topic of this.topics) {
    if(currentTopic==topic)
    alert("Topic already exists");
  }
  this.topics.push(currentTopic);

 }
 
 public searchTopic(currentTopic: String) :void {
   if(currentTopic=="" ) {
    alert("no such topic to display");
   }
   for(var topic of this.topics)
   if(currentTopic==topic)
   alert(currentTopic);
  
 }
 public delTopic(currentTopic: String): void{
  if(currentTopic==" ") {
    alert("no topics to delete");
    
  }
  for(var topic of this.topics) {
    if(currentTopic==topic){
      this.inx=this.topics.indexOf(currentTopic);
      this.topics.splice(this.inx,1);
    }
  }
 }
 public deleteTopic(idx:number): void {
  this.topics.splice(idx,1);
}
public editTopic(currentTopic: String): void {

}

}
