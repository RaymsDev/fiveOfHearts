import { Component, Input, OnInit } from '@angular/core';
import { MassageService } from '../../services/massage.service';
import { MassageContent } from '../../models/massages.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MassageComponent implements OnInit {
  content!: MassageContent;

  constructor(private massageService: MassageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.loadContent(type);
      }
    });
  }

  loadContent(type: string): void {
    this.massageService.getMassageContent(type).subscribe(content => {
      this.content = content;
    });
  }
}
