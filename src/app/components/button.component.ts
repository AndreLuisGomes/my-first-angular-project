import { Component, Input} from "@angular/core";


@Component({
    selector: "my-button",
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.css",
})

export class Button{
    buttonText:string = 'ACESSAR';
    buttonNumber:number = 1;
    @Input() label:string = '';

    getAlert(){
        alert("Olá");
    }
}