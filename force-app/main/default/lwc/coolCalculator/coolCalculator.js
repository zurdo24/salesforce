import { LightningElement } from 'lwc';

export default class CoolCalculator extends LightningElement {
    firstOperand;
    secondOperand;
    _result;

    handleFirstOperand(event) {
        this.firstOperand = event.detail.value;
        this.emitEvent();
    }
    handleSecondOperand(event) {
        this.secondOperand = event.detail.value;
        this.emitEvent();
    }

    get isValid(){
        return this.firstOperand && this.secondOperand;
    }

    get result() {
        if (this.isValid) {
            return +this.firstOperand + +this.secondOperand;
        }
        return 'Llena los campos';
    }

    emitEvent() {
        if (this.isValid) {
            this.dispatchEvent(
                new CustomEvent('notify', {
                    detail: this.result
                })
            );
        }
    }
}
