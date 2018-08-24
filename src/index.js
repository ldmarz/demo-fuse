import angular from 'angular';
import { testComponent } from './testComponent/testComponent';
import mainController from './main/mainController';
import ngMaterial from 'angular-material'
require('angular-material/angular-material.min.css')
require('./testComponent/styles.css')

const app = 'app';

angular
  .module(app, [ngMaterial])
  .controller('mainController', mainController)
  .component('testComponent', testComponent)
  .run();