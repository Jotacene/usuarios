import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: any[] = [
    {
      "name" : "Juan Rodriguez" ,
      "email" : " juan@rodriguez.org " ,
      "password" : "hunter2" ,
      "phone" : 
        {
          "number" : "1234567" ,
          "citycode" : "1" ,
          "contrycode" : "57"
        }
    }
  ]
  showModal = false
  tipo = ''
  usuarioEditar = {}
  indexEdit!:number
  constructor() { }

  ngOnInit(): void {
  }
  openAddUser() {
    this.showModal = true
    this.tipo = 'Agregar'
  }
  close(value:boolean): void {
    this.showModal = value
  }
  addUser(value:object): void {
    this.showModal = false
    this.listUsers.push(value)
  }
  eliminarUsuario(index:number): void {
    this.listUsers.splice(index, 1)
  }
  editarUsuario(user:object, index:number): void {
    this.indexEdit = index
    this.showModal = true
    this.usuarioEditar = user
    this.tipo = 'Editar'
  }
  editUser(user:object) {
    console.log(this.listUsers[this.indexEdit])
    this.listUsers[this.indexEdit] = user
    this.showModal = false
  }

}
