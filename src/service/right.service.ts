import {Injectable} from "@angular/core";

@Injectable({  providedIn: 'root'})
export class RightService {
  isAllowed(): boolean {
    return true;
  }
}
