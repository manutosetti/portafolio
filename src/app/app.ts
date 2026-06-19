import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio');
}