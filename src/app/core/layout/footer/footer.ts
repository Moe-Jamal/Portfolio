import { Component } from '@angular/core';
import { MainButton } from '@shared/components/main-button/main-button';
import { GitHubFooterIcon } from '@shared/components/svgs/github-footer-icon';
import { InstagramIcon } from '@shared/components/svgs/instagram-icon';
import { LinkedInIcon } from '@shared/components/svgs/linkedIn-icon';
import { WhatsappIcon } from '@shared/components/svgs/whatsapp-icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [MainButton, WhatsappIcon, InstagramIcon, LinkedInIcon, GitHubFooterIcon],
})
export class FooterComponent {}
