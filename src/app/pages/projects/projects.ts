import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from "../../service/projects";
@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects:any;
constructor(private servicio: ProjectService, private cdr: ChangeDetectorRef){
  this.servicio.obtenerProyectos().subscribe({
    next: (data) =>{
      this.projects=data;
      console.log(data)
    },
    error: (error) => console.error(error),
    complete: ()=>{
      this.cdr.detectChanges()
    }
  }
  )
}

eliminar(id:string){
  const confirmar = confirm('¿Seguro que queres eliminar este proyecto?');
  if(!confirmar){
    return;
  }
  this.servicio.eliminarProyecto(id).subscribe({
    next: ()=>{
      window.location.reload();
    },
    error: (error) => console.error(error),
  });
}
}