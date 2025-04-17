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
    'Full Stack Developer'
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
      // Typing
      this.currentRole = currentRoleText.substring(0, this.currentRole.length + 1);
      
      if (this.currentRole === currentRoleText) {
        // Finished typing, pause before deleting
        this.isTyping = false;
        setTimeout(() => {
          this.isDeleting = true;
          this.typeText();
        }, this.pauseTime);
      } else {
        // Continue typing
        setTimeout(() => this.typeText(), this.typingSpeed);
      }
    } else if (this.isDeleting) {
      // Deleting
      this.currentRole = currentRoleText.substring(0, this.currentRole.length - 1);
      
      if (this.currentRole === '') {
        // Finished deleting, move to next role
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => {
          this.isTyping = true;
          this.typeText();
        }, 500);
      } else {
        // Continue deleting
        setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    }
  }
  
  // Method to handle CV download
  downloadCV(): void {
    // Replace with your actual CV file path
    const cvPath = 'assets/Shubham_Resume_New_InAdd_New (1).pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Shubham_Pawar_CV.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
} 