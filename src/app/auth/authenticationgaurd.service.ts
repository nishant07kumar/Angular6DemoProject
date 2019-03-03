import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentiction.service";


@Injectable()

export class AuthenticatonGaurdService implements CanActivate {

  constructor(private authenticatonService: AuthenticationService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticatonService.isAuthenticated();
  }
}
