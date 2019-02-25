import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html'
})
export class ReposComponent {
  public repos;
  public searchModel;

  constructor(private readonly http: HttpClient) {
  }

  public search(e) {
    if (e.key === 'Enter') {
      this.http.get(`https://api.github.com/search/repositories?q=${this.searchModel}`)
        .subscribe((data) => this.repos = data);
    }
  }
}
