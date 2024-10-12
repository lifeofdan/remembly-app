import { Component, effect, input, signal } from '@angular/core';
import { MainNav } from '../components/manNav';
import { LoginForm } from '../components/login';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="container mx-auto">
      <main-nav />

      <div class="flex justify-center mt-16">
        <login-form></login-form>
      </div>
    </div>
  `,
  imports: [MainNav, LoginForm],
})
export default class LoginComponent {}
