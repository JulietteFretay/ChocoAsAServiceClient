import { Component } from '@angular/core';

@Component({
  selector: 'ct-navbar',
  templateUrl: 'navbar.component.html',
  host: {
    '(document:click)': 'closeAll()'
  }
})
export class NavbarComponent {
  menuIsOpen = false;
  dropdownIsOpen = false;
  toggleMenu(e: Event) {
    let bool = this.menuIsOpen;
    this.menuIsOpen = bool === false ? true : false;
    e.stopPropagation();
  }
  toggleDropdown(e: Event) {
    let bool = this.dropdownIsOpen;
    this.dropdownIsOpen = bool === false ? true : false;
    e.stopPropagation();
  }
  closeAll() {
    setTimeout(() => {
      this.dropdownIsOpen = false;
      this.menuIsOpen = false;
    }, 200);
  }
}
