import { TablesService } from './api/tables.service';
import { Injectable } from '@angular/core';
import {  CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TableGuardService implements CanActivate {

constructor(private competitionService:TablesService) { }

canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
   const id=+route.params['id'];
   let foundTable=!!this.competitionService.get(id);
   let check=true;
   if(foundTable){
       check=true;
   } else {
       check=false;
   }
   return check;

}

}