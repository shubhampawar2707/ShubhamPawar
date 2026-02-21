import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  roles: string[] = [
    'Software Engineer',
    'Java Developer',
    'FullStack Developer'
  ];

  currentRoleIndex: number = 0;
  currentRole: string = '';
  isTyping: boolean = true;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;
  pauseTime: number = 2000;

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation(): void {
    this.currentRole = '';
    this.isTyping = true;
    this.isDeleting = false;
    this.typeText();
  }

  typeText(): void {
    const currentRoleText = this.roles[this.currentRoleIndex];

    if (this.isTyping) {
      this.currentRole = currentRoleText.substring(0, this.currentRole.length + 1);

      if (this.currentRole === currentRoleText) {
        this.isTyping = false;
        setTimeout(() => {
          this.isDeleting = true;
          this.typeText();
        }, this.pauseTime);
      } else {
        setTimeout(() => this.typeText(), this.typingSpeed);
      }
    } else if (this.isDeleting) {
      this.currentRole = currentRoleText.substring(0, this.currentRole.length - 1);

      if (this.currentRole === '') {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => {
          this.isTyping = true;
          this.typeText();
        }, 500);
      } else {
        setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    }
  }

  downloadCV(): void {
    const cvPath = 'assets/Shubham_Pawar_Angular.pdf';


    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Shubham_Pawar_CV.pdf';


    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
