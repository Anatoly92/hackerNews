import { Component, OnInit } from '@angular/core';
import { NewTopBestService } from '../new-top-best.service';

@Component({
  selector: 'app-new-top-best',
  templateUrl: './new-top-best.component.html',
  styleUrls: ['./new-top-best.component.css']
})
export class NewTopBestComponent implements OnInit {

public bestNumber;

  constructor(private _dataServise: NewTopBestService) { }

  ngOnInit() {
    this.getNewTopBest();
  }

  getNewTopBest(){
    return this._dataServise.getAll().subscribe(item => this.bestNumber = item);
  }
}
