import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = {
    languages: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'C++', icon: 'fas fa-code' }
    ],
    databases: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'PostgreSQL', icon: 'fas fa-database' }
    ],
    frameworks: [
      { name: 'Spring Boot', icon: 'fas fa-leaf' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Hibernate', icon: 'fas fa-database' }
    ],
    tools: [
      { name: 'Eclipse', icon: 'fas fa-eclipse' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Postman', icon: 'fas fa-paper-plane' },
      { name: 'VS Code', icon: 'fas fa-code' }
    ]
  };
} 