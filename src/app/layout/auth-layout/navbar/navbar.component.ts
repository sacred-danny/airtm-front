import { Component, HostListener, OnInit } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';
import { Option } from '../../../core/models/option';
import { headerHeight } from '../../../core/constants/base';
import { languageList } from '../../../core/constants/language';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  headerHeight = headerHeight;
  isSticky = false;
  languageList = languageList;
  language$ = this.languageService.language$;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isSticky = window.scrollY > headerHeight;
  }

  switchLanguage(language: Option<string>): void {
    this.languageService.switchLanguage(language);
  }

}
