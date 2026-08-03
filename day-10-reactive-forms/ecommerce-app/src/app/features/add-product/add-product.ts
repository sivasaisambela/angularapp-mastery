import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {

   showSuccess = signal(false);
  // Step 1: the whole form's shape and rules, defined in TypeScript
  productForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0,[Validators.required,Validators.min(1)]),
      image: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
    category:new FormControl('',Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  onSubmit(){
    // Step 5: block submission if the form isn't valid
    if(this.productForm.invalid){
      this.productForm.markAllAsTouched();// forces error messages to show
      return;
    }

    console.log('New product submitted:',this.productForm.value);

    this.showSuccess.set(true);
    setTimeout(()=> this.showSuccess.set(false),3000); //// hide after 3 seconds
    this.productForm.reset({name:'',price:0,image: '',category:'',description:''});
  }

}
