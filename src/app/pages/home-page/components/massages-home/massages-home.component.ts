import { Component } from '@angular/core';
import { MassageHomeService } from '../../../../services/massages-home.service';
import { MassageHomeContent } from '../../../../models/massages.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-massages-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './massages-home.component.html',
  styleUrl: './massages-home.component.scss',
  providers: [MassageHomeService],
})
export class MassagesHomeComponent {
  massages: MassageHomeContent[] = [];

  constructor(private massageService: MassageHomeService) {}

  ngOnInit(): void {
    this.massageService.getMassageHomeContent().subscribe((data) => {
      this.massages = data;
    });
  }
}
