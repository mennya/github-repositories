import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

interface IOwner {
  login: string;
  avatar_url: string;
}

interface IRepository {
  id: number;
  name: string;
  owner: IOwner;
}

export interface IRepositories {
  total_count?: number;
  incomplete_results?: boolean;
  items?: [IRepository];
}

export interface IBranches {
  name: string;
  protected: boolean;
}

@Injectable()
export class GithubService {
  private baseUrl = 'https://api.github.com/';
  constructor(private readonly http: HttpClient) {
  }

  public getRepositories(search: string) {
    return this.http.get<IRepositories>(`${this.baseUrl}search/repositories`, {params: new HttpParams().set('q', search)});
  }

  public getBranches(login: string, repo: string) {
    return this.http.get<IBranches[]>(`${this.baseUrl}repos/${login}/${repo}/branches`);
  }
}
