import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: './upload.component.html',
  imports: [CommonModule],
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  @Output() predictionResult = new EventEmitter<any>();
  @Output() resetPrediction = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.selectedFile = input.files[0];

    this.resetPrediction.emit();

    const reader = new FileReader();
    reader.onload = () => (this.previewUrl = reader.result);
    reader.readAsDataURL(this.selectedFile);
  }

  onAnalyze(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    console.log('Sending image for prediction...');

    this.http
      .post('https://8b49-35-198-208-62.ngrok-free.app/predict', formData) // Replace URL with your server link here
      .subscribe({
        next: (response) => {
          console.log('Prediction Result:', response);
          this.predictionResult.emit({
            ...response,
            file: this.selectedFile,
            previewUrl: this.previewUrl,
          });
        },
        error: (err) => console.error('API error:', err),
      });
  }
}
