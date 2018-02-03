import { Injectable } from '@angular/core';

@Injectable()
export class RepoService {
getRepos() {
 let repos = [

{id:'1', full_name:'test 1'}
{id:'2', full_name:'test 1'}
{id:'3', full_name:'test 1'}
{id:'4', full_name:'test 1'}
{id:'5', full_name:'test 1'}
]
return repos;
}



  
}
