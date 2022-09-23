import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Table } from 'src/app/tableInterface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private table : Table[] = [];
  private updatedTable = new Subject<{ table: Table[], tableCount: number }>();



  slNo = 0;

  constructor(private http: HttpClient, private router: Router) { }
  studentData: Table[] = [
    { slNo: 1, id: 'jhgydwhc851', name: 'Levi', regno: '1BM20CS099', age: 19, bdate: '24-08-2002', marks: 91 },
    { slNo: 2, id: 'jhgydwhc852', name: 'Mikasa', regno: '1BM20CS101', age: 20, bdate: '01-01-2002', marks: 98 },
    { slNo: 3, id: 'jhgydwhc853', name: 'Eren', regno: '1BM20CS011', age: 15, bdate: '15-07-2002', marks: 93 },
    { slNo: 4, id: 'jhgydwhc854', name: 'Hanji', regno: '1BM20CS125', age: 22, bdate: '10-03-2002', marks: 85 },
    { slNo: 5, id: 'jhgydwhc855', name: 'Edward', regno: '1BM20CS066', age: 12, bdate: '21-12-2002', marks: 100 }
  ];

  onPagination(pageSize: number, pageIndex: number){
    let page;
    let no = (pageSize * (pageIndex+1)) -1;
  }

  onSortAge(order: string) {
    let sortedAge;
    let ta = [...this.table];
    if(order==="asc" || order==="None"){
      sortedAge = ta.sort((a, b) => (a.age < b.age) ? -1 : 1);
    } else {
      sortedAge = ta.sort((a, b) => (a.age > b.age) ? -1 : 1);
    }
    return sortedAge;
  }
  onSortMarks(order: string){
    let sortedMarks;
    let ta = [...this.table];
    if(order==="asc" || order==="None"){
      sortedMarks = ta.sort((a, b) => (a.marks < b.marks) ? -1 : 1);
    } else {
      sortedMarks = ta.sort((a, b) => (a.marks > b.marks) ? -1 : 1);
    }
    return sortedMarks;
  }

  onDelete(tableId: string){
    console.log(tableId);
    return this.http.delete("http://localhost:3000/api/tables/" + tableId)
  }

  onGetTable(postsPerPage: number, currentPage: number, searchKey: string, onSort: string, onOrder: number, standard: number, section: string){
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}&search=${searchKey}&sort=${onSort}&order=${onOrder}&class=${standard}&section=${section}`;
    this.http.get<{ message: string, table: any, maxTable: number }>("http://localhost:3000/api/tables" + queryParams)
      .pipe(map(tableData => {
        return {
          tables: tableData.table.map((item: any) => {
            this.slNo++;
            return{
              slNo: this.slNo,
              id: item._id,
              name: item.name,
              regno: item.regno,
              age: item.age,
              bdate: item.bdate,
              marks: item.marks
            }
          }), maxTable: tableData.maxTable
        }
      }))
      .subscribe(transformedData => {
        this.table = transformedData.tables;
        this.updatedTable.next({
          table: [...this.table],
          tableCount: transformedData.maxTable
        });
      });
      this.slNo = 0;

  }

  getUpdatedTableListner(){
    return this.updatedTable.asObservable();
  }
}
