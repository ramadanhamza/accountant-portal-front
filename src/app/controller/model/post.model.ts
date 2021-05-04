export class Post {
private _code: string;
public content: string;
private _dateStatus: string;


get code(): string {
  return this._code;
}
set code(value: string) {
  this._code = value;
}

get dateStatus(): string {
  return this._dateStatus;
}
set dateStatus(value: string) {
  this._dateStatus = value;
}


}
