import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {GithubService} from '../../blocks/api/github/github.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html'
})
export class BranchesComponent implements OnInit {
  public login;
  public repo;
  public branches;

  constructor(private readonly http: HttpClient, private readonly route: ActivatedRoute, private github: GithubService) {

  }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.repo = params.repo;
      this.login = params.login;
      this.getBranches();
    });
  }

  public getBranches() {
    this.github.getBranches(this.login, this.repo)
      .subscribe((data) => this.branches = data);
  }
}
