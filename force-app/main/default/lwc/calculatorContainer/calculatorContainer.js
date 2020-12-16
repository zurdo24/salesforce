import { LightningElement } from 'lwc';

export default class CalculatorContainer extends LightningElement {
    result = 'Coolest Calculator';
    show = true;
    
    handleChange(event){
        this.result = event.detail;
    }
}