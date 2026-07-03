import { ChangeDetectorRef, Component } from '@angular/core';
import { ProjectService } from "../../service/projects";
@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [],
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
}