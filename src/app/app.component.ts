import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly options = {headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})};
  public repos;
  public searchModel;

  constructor(private http: HttpClient) {

  }

  public search(e) {
    if (e.key === 'Enter') {
      this.http.get(`https://api.github.com/repositories?q=${this.searchModel}`, this.options)
        .subscribe((data) => this.repos = data);
    }
  }

  public selectRepo() {

  }
}
