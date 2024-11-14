import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    this.scriptLoader.loadScript('https://apps.elfsight.com/p/platform.js');
  }
}
