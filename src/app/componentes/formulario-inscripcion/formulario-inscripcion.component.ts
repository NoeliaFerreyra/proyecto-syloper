import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',

})
export class FormularioInscripcionComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      genero: ['', Validators.required],
      motivacion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {

      console.log(this.formulario.value);

    }
  }
}
