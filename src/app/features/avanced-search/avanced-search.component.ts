import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avanced-search',
  templateUrl: './avanced-search.component.html',
  styleUrls: ['./avanced-search.component.css']
})
export class AvancedSearchComponent implements OnInit {

  public formGroupSpoty;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroupSpoty = this.formBuilder.group({
      artist: ['', [Validators.required, Validators.minLength(4)]],
      album: ['', [Validators.required, Validators.maxLength(8)]]
    });

    console.log('ngOnInit() FormGroup', this.formGroupSpoty);
  }

  public search() {
    console.log('search() values: ',
      this.formGroupSpoty.value.artist,
      this.formGroupSpoty.value.album);
  }

}
