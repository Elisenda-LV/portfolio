import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Highlights } from '../../models/highlights.interface';
import { AllProjects } from '../../models/allprojects.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projectService= inject(ProjectsService);
  router = inject(Router);
  highlights: Highlights[] = [];
  allProjects: AllProjects[] = [];

  ngOnInit():void {
    this.getHighlights();
    this.getProjects();
  }

  getHighlights() {
    this.projectService.getHighlights().subscribe((response) => {
      this.highlights = response;
    });
  }

  getProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.allProjects = data;
    });
  }

  showDetails: boolean[] = [];

  toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];
  }

}
