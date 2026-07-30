import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {

  @Input() placeholder:string='Search...';
  @Output() search= new EventEmitter<string>();

  searchTerm:string='';

  onSearch(){
    this.search.emit(this.searchTerm);
  }

  

}
