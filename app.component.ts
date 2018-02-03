import { Component, OnInit } from '@angular/core';
import  {RepoService} from './reposervice.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'app';
hero = {
id:5 name: 'Герой', 
id:6 name: 'Герой' 

}
repos: any[];
constructor(private repo:RepoService) {


}
ngOnInit() {
	this.repos = this.repo.getRepos();
}

}


