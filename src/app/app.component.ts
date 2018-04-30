import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
  searchForm : NgForm;
  oldSearchForm : NgForm;
  tempForm : NgForm;

  transferFormData(searchForm) {
    this.searchForm = searchForm;
  }
}
