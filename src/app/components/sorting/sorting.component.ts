import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  @Output() public sortClick = new EventEmitter();
  @Output() public classClick = new EventEmitter();
  @Output() public searchName = new EventEmitter();

  searchValue="";
  faSearch = faSearch;

  classess = [
    1, 2, 3, 4
  ]
  sectionss = [
    "A", "B", "C"
  ]

  sections = [
    1, "A"
  ]

  sorting = [
    "", 1
  ];
  selectedValue="";
  disableValue = true;
  defaultValue = "";
  defaultValues = "";
  defaultClass = 1;
  defaultSection = "A";

  constructor() { }

  ngOnInit(): void {
  }
  

  onClass(value: number){
    this.sections[0] = value;
    this.classClick.emit(this.sections);
  }
  onSection(value: string){
    this.sections[1] = value;
    this.classClick.emit(this.sections);
  }


  onSortBy(value: string){
    console.log(value)
    this.sorting[0] = value;
    if(this.sorting[0]==="marks" || this.sorting[0]==="age"){
      this.disableValue = false;
    } else {
      this.defaultValue="";
      this.defaultValues="";
      this.sorting[1] = 1;
      this.disableValue = true;
    }
    this.onFire();

  }

  onSearch(){
    this.searchName.emit(this.searchValue);
  }
  onClear(){
    this.searchValue="";
    this.searchName.emit(this.searchValue);
  }
  onOrderBy(value: string){
    this.sorting[1] = value;
    this.onFire();
  }
  onFire(){
    this.sortClick.emit(this.sorting);
  }

}
