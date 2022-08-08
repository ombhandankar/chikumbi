import { Component, OnInit, ViewChild, Input, NgZone } from '@angular/core';
import { Table } from 'src/app/tableInterface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { PageEvent } from '@angular/material/paginator';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() public sortBy!: string;
  @Input() public orderBy!: string;

  private items!: Subscription;

  totalLength = 0;
  postSize = 2;
  currentPage = 1;
  pageOption = [1, 2, 5, 10];

  order:number = 1;
  sorts = "None";
  search = "";

  class = 1;
  section =  "A";

  faEdit = faPen;
  faDelete = faTrash;

  @ViewChild(MatSort) sort!: MatSort;

  pageEvent!: PageEvent;


  displayedColumns: string[] = ['slNo', 'name', 'regno', 'age', 'bdate', 'marks', 'actions'];
  duplicate: Table[] = [];
  dataSource: Table[] = []

  constructor(private dialog: MatDialog, private table: TableService) { }

  ngOnInit(): void {
    this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
    this.items = this.table.getUpdatedTableListner().subscribe((data: { table: Table[], tableCount: number }) => {
      this.dataSource = data.table;
      this.totalLength = data.tableCount;
    })
  }

  handleClickSort(event: Array<any>) {
    this.sorts = event[0];
    this.order = event[1];
    this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
    this.items = this.table.getUpdatedTableListner().subscribe((data: { table: Table[], tableCount: number }) => {
      this.dataSource = data.table;
      this.totalLength = data.tableCount;
    })
  }
  hanndleClassClick(event: Array<any>){
    this.class = event[0];
    this.section = event[1];
    this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
    this.items = this.table.getUpdatedTableListner().subscribe((data: { table: Table[], tableCount: number }) => {
      this.dataSource = data.table;
      this.totalLength = data.tableCount;
    })
  }

  handleSearch(event: string) {
    this.search = event;
    this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
      this.items = this.table.getUpdatedTableListner().subscribe((data: { table: Table[], tableCount: number }) => {
        this.dataSource = data.table;
        this.totalLength = data.tableCount;
      })
  }

  openDialog(id: string) {
    let dialogRef = this.dialog.open(DialogBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.table.onDelete(id).subscribe(() => {
          this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
        });
      }
    })
  }
  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.postSize = event.pageSize;
    console.log(event)
    console.log(this.search)
    this.table.onGetTable(this.postSize, this.currentPage, this.search, this.sorts, this.order, this.class, this.section);
      this.items = this.table.getUpdatedTableListner().subscribe((data: { table: Table[], tableCount: number }) => {
        this.dataSource = data.table;
        this.totalLength = data.tableCount;
      })
  }


}
