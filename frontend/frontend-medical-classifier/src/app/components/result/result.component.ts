import { Component, Input, AfterViewInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements AfterViewInit, OnChanges {
  @Input() prediction: any;
  @Input() clear: boolean = false;

  @ViewChild('resultCard') resultCardRef!: ElementRef;

  ngAfterViewInit(): void {
    this.scrollToResult();
  }

  ngOnChanges(): void {
    if (this.clear) {
      this.prediction = null;
    } else if (this.prediction) {
      setTimeout(() => this.scrollToResult(), 100);
    }
  }

  scrollToResult(): void {
    if (this.resultCardRef && this.prediction) {
      this.resultCardRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getLabels(): string[] {
    return this.prediction ? Object.keys(this.prediction.class_probabilities || {}) : [];
  }

  getPercentage(label: string): number {
    if (!this.prediction?.class_probabilities) return 0;
  
    let value = this.prediction.class_probabilities[label];
  
    if (typeof value === 'string') {
      value = parseFloat(value.replace('%', '')) / 100;
    }
    return parseFloat((value * 100).toFixed(2));
  }
  
}
