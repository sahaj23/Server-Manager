export class AuthService {
  isLoggedIn = false;
  logOut() {
    this.isLoggedIn = false;
  }
  logIn() {
    this.isLoggedIn = true;
  }
  isActivated() {
    return this.isLoggedIn;
  }
}
