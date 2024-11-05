import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { AllProjects } from '../../models/allprojects.interface';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projectService= inject(ProjectsService);
  router = inject(Router);
  allProjects: AllProjects[] = [];
  filteredProjects: AllProjects[] = [];
  selectedTag: string = '';

  ngOnInit():void {
    this.getProjects();

  }

  getProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.allProjects = data;
      this.filterProjects();
    });
  }

  filterProjects() {
    if (this.selectedTag) {
      this.filteredProjects = this.allProjects.filter(project => project.tags.includes(this.selectedTag));
    } else {
      this.filteredProjects = this.allProjects;
    }
  }



}
