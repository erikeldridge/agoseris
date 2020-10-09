export class AuthModel extends EventTarget {
  _token = null;
  set token(token){
    this._token = token;
    this.dispatchEvent(new Event('change'));
  }
  get token(){
    return this._token;
  }
}

export const authModel = new AuthModel();
