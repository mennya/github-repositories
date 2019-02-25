import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {AppIconService} from 'app/blocks/icon';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html'
})
export class ReposComponent {
  public repos;
  public searchModel;

  constructor(private readonly http: HttpClient, private readonly icon: AppIconService) {
    icon.addShapes({
      close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
    });
  }

  public search(e) {
    if (e.key === 'Enter') {
      this.http.get(`https://api.github.com/search/repositories?q=${this.searchModel}`)
        .subscribe((data) => this.repos = data);
    }
  }

  public clear() {
    this.searchModel = '';
    this.repos = [];
  }
}
