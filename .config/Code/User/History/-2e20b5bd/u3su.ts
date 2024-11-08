import { AbstractControl, ValidationErrors, Validator,ValidatorFn } from "@angular/forms";



export const passwordMatchValidator:Validator=(control:AbstractControl):ValidationErrors|null=>{

    const password=control.get('password');
    const confirmpassword=control.get('confirmpassword');
    //const fullname=control.get('fullname');
    if(!password||!confirmpassword){
        return null;
    }
    return password.value=== confirmpassword.value? null:{ passwordmissmactch:true}


}