import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name;
  @Input() bindLabel;
  @Input() bindValue;
  @Input() items: Observable<any>;
  @Input() selectedValue;
  @Output() itemChanged = new EventEmitter();
  itemSelected: any;
  searchInput: any;
  itemsLoading: any;
  constructor() { }

  ngOnInit() {
  }

  onItemChanged(e) {
    this.itemChanged.emit(e.target.value);
  }

}
