import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-listing-home",
  templateUrl: "./listing-home.component.html",
  styleUrls: ["./listing-home.component.css"],
})
export class ListingHomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public beerArray;
  public imageArray;
  public imageArray1 = [];
  p: number = 1;

  ngOnInit() {
    // The http call for getting the details
    this.http
      .get(
        " https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
      )
      .toPromise()
      .then((res) => {
        this.beerArray = res;

        // The http call for getting the Images
        this.http
          .get(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
          )
          .toPromise()
          .then((res) => {
            this.imageArray = res;
            this.imageArray1 = this.repeatFor(
              this.imageArray,
              this.beerArray.length
            );
            console.log(this.imageArray1.length);
          });
      });
  }

  //Funtion to repeat the same images again and again for 20 times.
  repeatFor(arr, size) {
    var newArr = new Array(size);
    for (var i = 0; i < size; i++) {
      newArr[i] = arr[i % arr.length];
    }
    return newArr;
  }
}
