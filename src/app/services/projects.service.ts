import { inject, Injectable } from '@angular/core'
import { AllProjects } from './../models/allprojects.interface';
import { Highlights } from '../models/highlights.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private http = inject(HttpClient);
  private allUrl = '/assets/db/all-projects.json';
  private highlightsUrl = '/assets/db/highlight-projects.json';

  getHighlights(): Observable<Highlights[]> {
    return this.http.get<Highlights[]>(this.highlightsUrl);
  }

  getProjects(): Observable<AllProjects[]> {
    return this.http.get<AllProjects[]>(this.allUrl);
  }
}
