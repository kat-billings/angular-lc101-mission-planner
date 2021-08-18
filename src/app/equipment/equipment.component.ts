import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  inventory: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  itemBeingEdited: string = '';
  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    let err = '';
    let match = false;
    if(this.inventory.includes(equipmentName)){
      err = `${equipmentName} is already in the inventory.`
    } else if(equipmentName === ''){
      err = `Please enter an object.`
    } else {
      this.inventory.push(equipmentName.value);
    }
    return err;
  }
  
  remove(item: string) {
    let index = this.inventory.indexOf(item);
    this.inventory.splice(index, 1);
  }  

  edit(item: string) {
    this.itemBeingEdited = item;
 }

 save(name: string, item: string) {
  item = name;
  this.itemBeingEdited = '';
  }  


}
