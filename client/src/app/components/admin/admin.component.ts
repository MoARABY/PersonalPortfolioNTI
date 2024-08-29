import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  password: string = '';



  constructor(private _ServicesService: ServicesService) { }

  login: FormGroup = new FormGroup({
    password: new FormControl(Validators.required)
  })

  onSubmit() {
    const data = new FormData();
    data.append('password', this.password);
    console.log(data);

    this._ServicesService.loginAdmin(data).subscribe({
      next: (res) => {
        console.log("done" + res);

      }
    })

  }









  // handelLogin(data: any) {
  //   console.log(data);

  //   this._ServicesService.loginAdmin(data).subscribe({
  //     next: (res) => {
  //       console.log("done" + res);

  //     },
  //     error: (err) => {
  //       console.log("error" + err);

  //     }
  //   })
  // }
}
