import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
  searchForm : FormGroup;
  viewMode : string;

  transferFormData(searchForm) {
    this.searchForm = searchForm;
  }
  test(viewMode) {
    this.viewMode = viewMode;
  }
}
