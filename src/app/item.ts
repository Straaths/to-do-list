import { Status } from './status.enum';
export class Item {
  constructor(
    private _title: string,
    private _status: Status
  ) {
  }
  get title(): string{
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get status(): string{
    return this._status.value;
  }
  set status(status: string) {
    for (const s of Status.statuses) {
      if (status === s.value) {
        this._status = s;
        return;
      }
    }
  }
  get cssClass(){
    return this._status.cssClass;
  }
}
