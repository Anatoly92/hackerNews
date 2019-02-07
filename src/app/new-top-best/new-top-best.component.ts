import { Component, OnInit } from '@angular/core';
import { NewTopBestService } from '../new-top-best.service';
import {IStory} from '../new-top-best.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-top-best',
  templateUrl: './new-top-best.component.html',
  styleUrls: ['./new-top-best.component.css']
})
export class NewTopBestComponent implements OnInit {

public bestNumber: number[];
public currentCountStory: number = 20; 
public direction: string;
public currentNumberArray: number[] = [];
public currentStorys: IStory[] = [];
throttle = 20;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private _dataServise: NewTopBestService) { }

  ngOnInit() {
    this.getNewTopBest();
  }

  getNewTopBest(){
    return this._dataServise.getAll().subscribe(item =>{
      
      this.bestNumber = item;
      this.currentNumberArray = this.bestNumber.slice(0, 19);

      this.currentNumberArray.map(key => this._dataServise.getItem(key).subscribe(item => this.currentStorys.push(item)));
      
              });
  }

  onScroll(event){
    console.log('scrolled!!');
  }

  addItems(startIndex, endIndex, _method: string) {
    for (startIndex; startIndex < endIndex; ++startIndex) {
      this.currentNumberArray[_method](this.bestNumber.slice(startIndex, endIndex));
    }
  }
  
  appendItems(startIndex, endIndex) {
    this.currentNumberArray = this.bestNumber.slice(0, endIndex);
    // this.addItems(startIndex, endIndex, 'push');
  }
  
  prependItems(startIndex, endIndex) {
    this.currentNumberArray = this.bestNumber.slice(0, endIndex);
    // this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.currentCountStory;
    this.currentCountStory += 20;
    this.appendItems(start, this.currentCountStory);
    
    this.direction = 'down'
  }
  
  onUp(ev) {
    // console.log('scrolled up!', ev);
    // const start = this.currentCountStory;
    // this.currentCountStory -= 20;
    // this.prependItems(start, this.currentCountStory);
  
    // this.direction = 'up';
  }
}
