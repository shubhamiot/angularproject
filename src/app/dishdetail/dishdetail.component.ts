import { Component, OnInit , Input} from '@angular/core';
import { Dish } from '../shared/dish';
import { Dish1 } from '../shared/dish1';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dishForm: FormGroup;
  d=Dish1;
  
    @Input()
    dish: Dish;
  

  constructor(private fb: FormBuilder) {
    this.createCommentForm();
   }

  ngOnInit() {
  }
  createCommentForm()
  {
    this.dishForm=this.fb.group({
      name:['', Validators.required],
      rating:['', Validators.required],
      current: ['', Validators.required],
      comment:['', Validators.required],

    });
  }

  onSubmit1()
  {
    this.d=this.dishForm.value;
    console.log(this.d);
    this.dishForm.reset();

  }

}
