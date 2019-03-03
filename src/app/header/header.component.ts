import { Component, Output } from "@angular/core";
import { HttpDataService } from "../shared/httpdata-service";
import { Response } from "@angular/http";
import { AuthenticationService } from "../auth/authentiction.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {
  constructor(private httpDataService: HttpDataService, private authenticationService: AuthenticationService) { }


  onSaveData() {
    this.httpDataService.SaveRecipeData().subscribe(
      (response: Response) => {
        console.log('Data Saved' + response);

      }
    );
  }

  onFetchData() {
    this.httpDataService.GetRecipeData();
  }
  onlogOut() {
    this.authenticationService.logOut();
  }
}
