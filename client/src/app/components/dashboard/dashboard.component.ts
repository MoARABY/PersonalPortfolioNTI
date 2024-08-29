import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title: string = '';
  description: string = '';
  selectedFile: File | null = null;

  constructor(private _ServicesService: ServicesService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.selectedFile) {
      alert('Please select a project image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('projectImage', this.selectedFile, this.selectedFile.name);

    this._ServicesService.addProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (error: any) => {
        console.error('Error submitting project:', error);
      }
    });
  }
}
