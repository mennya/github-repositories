import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  public readonly options = {headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})};
  public login;
  public repo;
  public branches;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.repo = params.repo;
      this.login = params.login;
      console.log(params);
      this.getBranches();
    });
  }

  public getBranches() {
    this.http.get(`https://api.github.com/repos/${this.login}/${this.repo}/branches`)
      .subscribe((data) => this.branches = data);
  }
}
