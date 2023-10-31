import { Component } from '@angular/core';
import { LeadCaptureDTO } from 'src/app/model/LeadCaptureDTO';
import { LeadFormService } from 'src/app/services/LeadFormService';

@Component({
  selector: 'app-captureform',
  templateUrl: './captureform.component.html',
  styleUrls: ['./captureform.component.css']
})
export class CaptureformComponent {

  leadCaptureDTO: LeadCaptureDTO = new LeadCaptureDTO();
  successMessage: string = '';
  constructor(private leadFormService: LeadFormService) { }

  onCaptureLead(leadCaptureDTO: LeadCaptureDTO): void {
    this.leadFormService.captureLead(leadCaptureDTO).subscribe({
      next: (response) => {
        console.log('Lead Data has been captured:', response);
        this.successMessage = 'Form submitted successfully';
        leadCaptureDTO.resetFields();
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Can not capture Lead Data:', error);
      }
    });
  }

}
