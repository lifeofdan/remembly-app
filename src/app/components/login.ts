import { Component, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  standalone: true,
  template: `
    <form #loginForm class="min-w-80 mx-4">
      <label class="form-control w-full max-w-xs mb-8">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input
          type="email"
          name="email"
          class="input input-bordered w-full max-w-xs"
          [(ngModel)]="email"
        />
      </label>

      <label class="form-control w-full max-w-xs mb-4">
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input
          type="password"
          name="password"
          class="input input-bordered w-full max-w-xs"
          [(ngModel)]="password"
        />
      </label>

      <!-- Not sure this is better than [class="isValid ? 'invisible' ''"] but it is more "the angular way"-->
      @if (!isValid) {
        <div class="mb-4">
          <p class="text-error">Invalid Email Or Password</p>
        </div>
      } @else {
        <div class="mb-4">
          <p>&nbsp;</p>
        </div>
      }

      <button
        (click)="onSubmit(); $event.preventDefault()"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  `,
  imports: [FormsModule],
})
export class LoginForm {
  email = model('');
  password = model('');

  isValid = true;

  constructor(private router: Router) {
    effect(() => {
      this.email();
      this.password();

      // We could do real-time validation for valid email/password if we wanted to give feedback on whether it was a valid formatted email/password
      this.isValid = true;
    });
  }

  onSubmit() {
    // TODO put real validation stuff here eg: Valid email, valid password character length, special char blah blah
    if (
      this.email() === 'test@email.com' &&
      this.password() === 'password123'
    ) {
      // TODO Store JWT from successful handshake with server

      this.router.navigate(['/dashboard/messages']);
      return;
    }

    this.isValid = false;
  }
}
