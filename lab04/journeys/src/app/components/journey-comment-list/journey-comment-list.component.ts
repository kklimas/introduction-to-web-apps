import { Component } from '@angular/core';
import { JourneyComment } from 'src/app/models/Journey';
import { JourneyCommentService } from 'src/app/services/journey-comment.service';
import { JourneyDataService } from 'src/app/services/journey-data.service';
import { ToastService } from 'src/app/services/toast.service';
import { zip } from 'rxjs'

@Component({
  selector: 'app-journey-comment-list',
  templateUrl: './journey-comment-list.component.html',
  styleUrls: ['./journey-comment-list.component.css']
})
export class JourneyCommentListComponent {

  comments: JourneyComment[] = [];

  constructor (
    private journeyCommentService: JourneyCommentService,
    private journeyDataService: JourneyDataService,
    private toastService: ToastService
  ) {
    this.getComments();
    this.journeyCommentService.commentEvent.subscribe(() => this.getComments());
  }
  private getComments() {
    zip(this.journeyCommentService.getAllComments(), this.journeyDataService.getJourneys())
      .subscribe({
        next: data => {
          let comments = data[0];
          let journeys = data[1];
          comments.forEach(comment => {
            let journey = journeys.find(j => j.id == comment.journeyId);
            if (journey !== undefined) {
              comment.journeyImgPath = journey.img;
              comment.journeyName = journey.name;
            }
          })
          this.comments = comments;
          
        },
        error: () => this.toastService.showError()
      })
  }

}
