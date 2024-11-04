import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedLanguage: string = 'es';

  @Output() languageChange = new EventEmitter<string>();

  onLanguageChange() {
    this.languageChange.emit(this.selectedLanguage);
  }


}
