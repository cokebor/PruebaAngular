import { Component, OnInit, Renderer2  } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private renderer: Renderer2, private formBuilder: FormBuilder,private service: UsuarioService) { 
    renderer.setStyle(
      document.body,
      "background-image",
      'url(../assets/img/running-girl.png)'
    );
    this.form=formBuilder.group({
      email: ['', Validators.required],
      pass: [''],
    }
    );
  }
  
  agregar() {

      this.service.agregar(this.form.value).subscribe(() => {
        this.form.reset();
        alert('Usuario registrado satisfactoriamente');
        //Para utilizar el sisguiente mensaje tenemos que instalat antes
        //npm install sweetalert2
        //Swal.fire('Exito', 'La Cerveza se ha registrado', 'success');
      });
  }

  


  login(){
    
      this.service.Login(this.form.value).subscribe(dato=>{
          dato.forEach(element => {
            if(element.email==this.form.controls['email'].value && element.pass==this.form.controls['pass'].value){
              alert("Existe")
            }
          });
      });

  }


  ngOnInit(
    
  ) {
  }
  

}
