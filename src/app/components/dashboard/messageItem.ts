import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-item',
  standalone: true,
  template: `
    <div class="flex gap-4">
      <div class="flex pl-2 pt-4">
        <div
          class="bg-neutral text-neutral-content rounded-full w-12 h-12 flex flex-col justify-center items-center font-bold mb-4"
        >
          <div>{{ initials }}</div>
        </div>
      </div>
      <div class="w-full pr-2 pt-4">
        <div class="text-xs">
          {{ date }}
        </div>
        <div>{{ message }}</div>

        <div class="flex justify-end gap-2">
          <div class="text-sm rounded-lg bg-accent text-accent-content px-2">
            <span class="font-semibold">#tech</span>
          </div>
          <div class="text-sm rounded-lg bg-primary text-accent-content px-2">
            <span class="font-semibold">#funny</span>
          </div>
          <div class="text-sm rounded-lg bg-error text-accent-content px-2">
            <span class="font-semibold">#work</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MessageItem {
  @Input() message!: string;
  @Input() initials!: string;
  @Input() date!: string;
}
