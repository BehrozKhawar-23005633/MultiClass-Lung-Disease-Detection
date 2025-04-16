import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadComponent } from './components/upload/upload.component'; // Import your standalone component
import { ResultComponent } from './components/result/result.component';
@Component({
  selector: 'app-root',
  imports: [UploadComponent, ResultComponent], // Include the standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prediction: any;
  clear = false;

  @ViewChild('resultSection') resultSection!: ElementRef;

  handlePrediction(result: any) {
    this.prediction = result;
    this.clear = false;

    //Scroll to result section
    setTimeout(() => {
      if (this.resultSection) {
        this.resultSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  clearResult() {
    this.prediction = null;
    this.clear = true;
  }
}
