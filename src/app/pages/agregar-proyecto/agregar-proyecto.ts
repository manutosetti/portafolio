import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/projects';

@Component({
  selector: 'app-agregar-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-proyecto.html',
  styleUrl: './agregar-proyecto.css',
})
export class AgregarProyecto {

  enviado = false;
  form;

  // si hay id en la ruta, estamos editando un proyecto que ya existe
  idProyecto: string | null = null;

  constructor(
    private fb: FormBuilder,
    private servicio: ProjectService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      tecnologias: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.idProyecto = this.route.snapshot.paramMap.get('id');

    if (this.idProyecto) {
      // modo edicion: traemos el proyecto y llenamos el formulario
      this.servicio.obtenerProyectoPorId(this.idProyecto).subscribe({
        next: (data) => {
          this.form.patchValue(data);
        },
        error: (error) => console.error(error),
      });
    }
  }

  guardar() {
    this.enviado = true;

    if (this.form.invalid) {
      return;
    }

    if (this.idProyecto) {
      // editar
      this.servicio.actualizarProyecto(this.idProyecto, this.form.value).subscribe({
        next: () => {
          window.location.href = '/proyectos';
        },
        error: (error) => console.error(error),
      });
    } else {
      // crear
      this.servicio.crearProyecto(this.form.value).subscribe({
        next: () => {
          // recargamos toda la app asi la vista de proyectos vuelve a pedir los datos a la api
          window.location.href = '/proyectos';
        },
        error: (error) => console.error(error),
      });
    }
  }
}
