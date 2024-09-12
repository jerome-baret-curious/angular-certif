import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn, Route,
  RouterStateSnapshot, UrlSegment
} from '@angular/router';

// return boolean | UrlTree | RedirectCommand
// | Observable<boolean | UrlTree | RedirectCommand>
// | Promise<boolean | UrlTree | RedirectCommand>

export const myrGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
};

export const myrDeGuard: CanDeactivateFn<unknown> = (component: unknown, currentRoute: ActivatedRouteSnapshot,
                                                     currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
  return true;
};

export const myrMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return true;
};

export const myrChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
};
