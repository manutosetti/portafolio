import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { AgregarProyecto } from './pages/agregar-proyecto/agregar-proyecto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre-mi', component: About },
  { path: 'skills', component: Skills },
  { path: 'proyectos', component: Projects },
  { path: 'agregar-proyecto', component: AgregarProyecto },
  { path: 'editar-proyecto/:id', component: AgregarProyecto },
];
