import { Component } from '@angular/core';

@Component({
  selector: 'app-registrant-list',
  templateUrl: './registrant-list.component.html',
  styleUrls: ['./registrant-list.component.css']
})
export class RegistrantListComponent {
  dataList: any[] = [];

  ngOnInit() {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('registration');
    if (storedData) {
      this.dataList = JSON.parse(storedData);
      console.log(this.dataList )
    }

 
  }
}
