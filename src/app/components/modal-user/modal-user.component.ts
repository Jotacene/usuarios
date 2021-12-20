import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  @Input() showModal!: boolean;
  @Input() tipo!: string;
  @Input() usuarioEditar!: any;
  @Output() close = new EventEmitter<boolean>();
  @Output() addUser = new EventEmitter<object>();
  @Output() editUser = new EventEmitter<object>();

  userName = '';
  userEmail = '';
  userPassword = '';
  userPhone = '';
  userCityCode = '';
  userContry = '';
  displayStyle = "none";
  alert= false;
  constructor() { }

  ngOnInit(): void {
    if (this.tipo === 'Editar') {
      this.userName = this.usuarioEditar.name;
      this.userEmail = this.usuarioEditar.email;
      this.userPassword = this.usuarioEditar.password;
      this.userPhone = this.usuarioEditar.phone.number;
      this.userCityCode = this.usuarioEditar.phone.citycode;
      this.userContry = this.usuarioEditar.phone.contrycode;
    }
  }
  closeModal() {
    //this.showModal = false
    this.close.emit(false)
  }
  agregarUsuario() {
    if (this.userName === '' || this.userEmail === '' || 
        this.userPassword === '' || this.userPhone === ''||
        this.userCityCode === ''||
        this.userContry === '') {
          this.alert = true
          let interval = setInterval(() => {
            this.alert = false
            clearInterval(interval)
          }, 3000)
          
    }
    else {
      if (this.tipo === 'Editar') {
        this.alert = false
        let user = {
          "name" : this.userName ,
          "email" : this.userEmail ,
          "password" : this.userPassword ,
          "phone" : 
            {
              "number" : this.userPhone ,
              "citycode" : this.userCityCode ,
              "contrycode" : this.userContry
            }
        }
        this.editUser.emit(user)
      }
      else {
        let user = {
          "name" : this.userName ,
          "email" : this.userEmail ,
          "password" : this.userPassword ,
          "phone" : 
            {
              "number" : this.userPhone ,
              "citycode" : this.userCityCode ,
              "contrycode" : this.userContry
            }
        }
        this.userName = '';
        this.userEmail = '';
        this.userPassword = '';
        this.userPhone = '';
        this.userCityCode = '';
        this.userContry = '';
        this.alert = false
        this.addUser.emit(user)
      } 
    }
  }
}
