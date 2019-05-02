import { Observable } from 'rxjs';

export interface UserGroup {
  name: string;
  id: string;
}
export abstract class UserGroupData {
  abstract getUserGroup(): Observable<UserGroup[]>;
}