import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";


export const passwordMatchValidator:Validator=(control:AbstractControl):ValidationErrors|null=>{

    const password=control.get('password');
    const confirmpassword=control.get('confirmpassword');
    //const fullname=control.get('fullname');
    if(!password||!confirmpassword){
        return null;
    }


}