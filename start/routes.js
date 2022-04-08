'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(()=>{
  Route.post('usuarios/registro','UserController.store');
  Route.post('usuarios/login','UserController.login');
  Route.get('proyectos','ProyectoController.index').middleware('auth');
  Route.post('proyectos','ProyectoController.create').middleware('auth');
}).prefix('api/')


