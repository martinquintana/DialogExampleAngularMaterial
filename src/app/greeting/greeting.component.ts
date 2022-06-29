import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  newBlock: FormGroup;
  submitted = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private fb: FormBuilder,
  ) {
    //capta los inputs del formulario
    this.newBlock = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    
  }

  addBlock() {
    this.submitted = true;

    //si el form es invalido termina la ejecucion del modulo
    //y no se ejecuta el console.log, ni el servicio
    //es una validacion
    if (this.newBlock.invalid) {
      return;
    }
    console.log(this.newBlock)
  }
}
