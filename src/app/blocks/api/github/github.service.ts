import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GithubService {
  private baseUrl = 'https://api.github.com/';
  constructor(private readonly http: HttpClient) {
  }

  public getRepositories(search: string) {
    return this.http.get(`${this.baseUrl}search/repositories`, {params: new HttpParams().set('q', search)});
  }

  public getBranches(login: string, repo: string) {
    return this.http.get(`${this.baseUrl}repos/${login}/${repo}/branches`);
  }
}
