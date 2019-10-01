import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment1angular";
  // data = sessionStorage.getItem("sessionUser");

  constructor(private router: Router, private location: Location) {}

  ngOnInIt() {
    // if (typeof Storage !== "undefined" || typeof Storage != null) {
    //   this.data = JSON.parse(sessionStorage.getItem("sessionUser"));
    // }
    // if (this.data != null || this.data !== undefined) {
    //   this.router.navigateByUrl("/account");
    // } else {
    //   // this.router.navigateByUrl("/login");
    // }
  }

  // Check before click on profile page
  checkProfile() {
    // console.log("app component" + this.data);
    if (
      sessionStorage.getItem("sessionUser") === undefined ||
      sessionStorage.getItem("sessionUser") == null
    ) {
      this.router.navigateByUrl("/login");
      alert("Please sign in");
    } else {
      this.router.navigateByUrl("/account");
    }
  }

  // redirect back to log in page
  logOut() {
    if (typeof Storage !== "undefined") {
      sessionStorage.clear();
      localStorage.clear();
      // this.data = "";
      this.router.navigateByUrl("/login");
    }
  }

  // check before log in
  checkLogIn() {
    if (
      sessionStorage.getItem("sessionUser") === undefined ||
      sessionStorage.getItem("sessionUser") == null
    ) {
      this.router.navigateByUrl("/login");
    } else {
      alert("You are already logged in!!");
      this.router.navigateByUrl("/account");
    }
  }
}
