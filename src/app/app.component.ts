import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { DriverOverviewComponent } from "../master-data/components/driver-overview/driver-overview.component";
import { Interface } from 'readline';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzTabsModule, NzButtonModule, WelcomeComponent, DriverOverviewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  index = 0;
  tabs:ta[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  // Öffne einen neuen Tab oder wechsle zu einem existierenden Tab
  openTab(title: string, route: string) {
    const existingTab = this.tabs.find(tab => tab.route === route);

    if (!existingTab) {
      this.tabs.push({ title, route });
      this.index = this.tabs.length - 1;
    } else {
      this.index = this.tabs.indexOf(existingTab);
    }

    this.router.navigate([route]);
    this.cdr.detectChanges();
  }

  // Methode zum Hinzufügen eines neuen Tabs
  newTab() {
    const newTitle = `New Tab ${this.tabs.length + 1}`;
    const newRoute = `/new-tab-${this.tabs.length + 1}`;
    this.tabs.push({ title: newTitle, route: newRoute });
    this.index = this.tabs.length - 1;
    this.router.navigate([newRoute]);

  }

  // Methode zum Schließen eines Tabs
  closeTab(index: { index: number } ) {
  this.tabs.splice(index.index, 1);

  if (this.index >= this.tabs.length) {
    this.index = this.tabs.length - 1;
  }

  const nextTab = this.tabs[this.index];
  if (nextTab) {
    this.router.navigate([nextTab.route]);
  }
 
}
}

export  interface ta{
    title: string,
    route: string,
}
