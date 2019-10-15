import { Component, OnInit } from '@angular/core';

import { ThiefService } from '../shared/thief.service';
import { NgForm } from '@angular/forms';
import { Thief } from '../shared/thief.model';

@Component({
  selector: 'app-thief-details',
  templateUrl: './thief-details.component.html',
  styleUrls: ['./thief-details.component.css'],
  providers : [ThiefService]
  
})
export class ThiefDetailsComponent implements OnInit {

  
  constructor(private thiefService : ThiefService) 
  {

   }

  ngOnInit() 
  {
      this.refreshThievesList();
  }

  onSubmit(form : NgForm)
  {
    console.log('In onsubmit:' + form.value._id + ' ' + form.value.id);
    if(form.value._id=="")
    {
    this.thiefService.postThief(form.value).subscribe(
      res => {
        this.refreshThievesList();
        this.resetForm(form);
      },
      err => {}
    );
    }
    else
    {
        this.thiefService.putThief(form.value).subscribe(
          res=>{
                this.refreshThievesList();
                this.resetForm(form);
          },
          err=>
          {

          }
          
        );
    }
    
  }


  resetForm(form :NgForm)
  {
    this.thiefService.selectedThief={
    _id : '',
    fullName : '',
    email : '',
    password: ''
  }
    form.resetForm();
  }
  onEdit(thief: Thief)
  {
    console.log(' IN EDIT:' + thief + ' ' + thief._id);
    this.thiefService.selectedThief = thief;
    
    
  }

  onDelete(_id : String ,form:NgForm)
  {
    console.log(' IN DELETE:' + _id + ' ')
    if(confirm("Are you want to delete?")==true)
    {
      
    this.thiefService.deleteThief(_id).subscribe(
      res=>{
        this.refreshThievesList();
        this.resetForm(form);
      },

      err=>{}
    );
    }

  }

  refreshThievesList()
  {
    this.thiefService.getThieves().subscribe(
      (res)=>
      {
        this.thiefService.thievesDetails = res as Thief[];          
        console.log('within refreshThievesList');
        for(var i=0;i<this.thiefService.thievesDetails.length;i++)
        {
          console.log('Thief Details:' + this.thiefService.thievesDetails[i].fullName + ' '+ this.thiefService.thievesDetails[i].email);
        }
      },
      (err)=>
      {

      });
  }

}
