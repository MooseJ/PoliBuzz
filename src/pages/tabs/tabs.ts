import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TopicsPage } from '../topics/topics';
import { PeoplesPage } from '../peoples/peoples';
import { SettingsPage } from '../settings/settings';   

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TopicsPage;
  tab3Root = PeoplesPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
