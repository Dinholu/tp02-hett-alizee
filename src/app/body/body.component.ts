import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  name: string = ""
  firstname: string = ""
  address: string = ""
  city: string = ""
  postalCode: string = ""
  country: string = ""
  email: string = ""
  civilite: string = ""
  login: string = ""
  password: string = ""
  show: boolean = false
  polite: string = "Cliquez sur valider pour voir le récapitulatif des données"

  ShowData() {
    this.show = true
    this.polite = "Voici le récapitulatif des données"
  }



}
