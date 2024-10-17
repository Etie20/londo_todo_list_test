import { Component } from '@angular/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '../../../ui-icon-helm/src';

@Component({
	selector: 'hlm-select-scroll-down',
	standalone: true,
	imports: [HlmIconComponent],
	providers: [provideIcons({ lucideChevronDown })],
	host: {
		class: 'flex cursor-default items-center justify-center py-1',
	},
	template: `
		<hlm-icon class="w-4 h-4 ml-2" name="lucideChevronDown" />
	`,
})
export class HlmSelectScrollDownComponent {}
