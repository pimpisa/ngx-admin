import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-admin-site',
  styleUrls: ['./admin-site.component.scss'],
  templateUrl: './admin-site.component.html',
})
export class AdminSiteComponent {
  selectedFile: File

  constructor(private http: HttpClient) {

  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

}

