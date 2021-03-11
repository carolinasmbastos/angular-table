import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  lastName: string;
  actions: string;
  selected: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    lastName: "Smith",
    position: 1111111,
    name: "Hydrogen",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 2222222,
    name: "Helium",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: true
  },
  {
    lastName: "Smith",
    position: 3333333,
    name: "Lithium",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Jones",
    position: 4444444,
    name: "Beryllium",
    weight: "2021-04-25",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: true
  },
  {
    lastName: "Smith",
    position: 5555555,
    name: "Boron",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 666666,
    name: "Carbon",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 777777,
    name: "Nitrogen",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 8888888,
    name: "Oxygen",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 999999,
    name: "Fluorine",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  },
  {
    lastName: "Smith",
    position: 1010101,
    name: "Neon",
    weight: "2021-03-05",
    symbol: "8:00 - 8:50",
    actions: "",
    selected: false
  }
];

/**
 * @title Table with sorting
 */
@Component({
  selector: "table-sorting-example",
  styleUrls: ["table-sorting-example.css"],
  templateUrl: "table-sorting-example.html"
})
export class TableSortingExample implements AfterViewInit {
  displayedColumns: string[] = [
    "selected",
    "position",
    "lastName",
    "name",
    "weight",
    "symbol",
    "actions"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
