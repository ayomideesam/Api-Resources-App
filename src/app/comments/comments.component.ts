import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '200ms',
              animate(
                '900ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class CommentsComponent implements OnInit {

  comments: any = [];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getComments().subscribe(
      data => this.comments = data
    );
  }

  deleteItem(index) {
    this.comments.splice(index, 1);
  }

}
