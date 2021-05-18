import { Component, OnInit } from '@angular/core';
import { GetApiSwService } from '../get-api-sw.service';
import { ICard } from '../models/ICard';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

// @ts-ignore
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  entities: ICard[] = [];

  constructor(
    private getApiSwService: GetApiSwService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getEntities(): void{
    const path = String(this.route.snapshot.paramMap.get('path'));
    this.getApiSwService.getEntities(path)
      .subscribe(entitites => this.entities = entitites);
  }


  ngOnInit(): void {
    this.getEntities();
  }

}
