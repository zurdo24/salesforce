import { LightningElement } from 'lwc';

export default class CoolCalculator extends LightningElement {
    firstOperand = '';
    dataEntered = [];
    dataEntereds = '';
    equalpressed = false;
    error = false;
    result;
    handleClickClear() {
        this.dataEntereds = '';
        this.dataEntered = [];
    }
    handleClickOperand(event) {
        if (this.equalpressed) {
            this.handleClickClear();
            this.equalpressed = false;
        }
        if (this.error) {
            this.handleClickClear();
            this.error = false;
        }

        this.firstOperand += event.target.label;
        this.dataEntereds += event.target.label;
    }
    handleClickOperator(event) {
        if (this.error) {
            this.handleClickClear();
            this.error = false;
        }
        if (this.equalpressed) {
            this.handleClickClear();
            this.equalpressed = false;
        }
        if (this.firstOperand != '') {
            this.dataEntered.push(this.firstOperand);
            this.firstOperand = '';
        }
        this.dataEntered.push(event.target.label);
        this.dataEntereds += event.target.label;
    }

    resultado() {
        this.dataEntered.push(this.firstOperand);
        this.firstOperand = '';
        this.dataEntereds = '';
        let result = '';

        for (let index = 0; index < this.dataEntered.length; index++) {
            if (this.dataEntered[this.dataEntered.length - 1] === '') {
                this.dataEntereds = 'Sintax Error';
                this.error = true;
                return;
            }
            if (this.dataEntered[0] == '-' || this.dataEntered[0] == '+') {
                result += this.dataEntered[0];
                result += this.dataEntered[1];
                this.dataEntered.splice(0, 1, result);
                this.dataEntered.splice(1, 1);
                result = '';
            }
            //
            switch (this.dataEntered[index]) {
                case '/':
                    if (
                        this.dataEntered[index - 1] == '-' ||
                        this.dataEntered[index - 1] == '+'
                    ) {
                        this.dataEntereds = 'Sintax Error';
                        this.error = true;
                        return;
                    }
                    if (
                        this.dataEntered[index + 1] == '-' ||
                        this.dataEntered[index + 1] == '+'
                    ) {
                        result += this.dataEntered[index + 1];
                        result += this.dataEntered[index + 2];
                        this.dataEntered.splice(index + 1, 1, result);
                        this.dataEntered.splice(index + 2, 1);
                        result = '';

                        result =
                            +this.dataEntered[index - 1] /
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    } else {
                        result =
                            +this.dataEntered[index - 1] /
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    }

                    break;
                case 'x':
                    if (
                        this.dataEntered[index - 1] == '-' ||
                        this.dataEntered[index - 1] == '+'
                    ) {
                        this.dataEntereds = 'Sintax Error';
                        this.error = true;
                        return;
                    }
                    if (
                        this.dataEntered[index + 1] == '-' ||
                        this.dataEntered[index + 1] == '+'
                    ) {
                        result += this.dataEntered[index + 1];
                        result += this.dataEntered[index + 2];
                        this.dataEntered.splice(index + 1, 1, result);
                        this.dataEntered.splice(index + 2, 1);
                        result = '';

                        result =
                            +this.dataEntered[index - 1] *
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    } else {
                        result =
                            +this.dataEntered[index - 1] *
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    }

                    break;
                default:
                    break;
            }
        }

        for (let index = 0; index < this.dataEntered.length; index++) {
            switch (this.dataEntered[index]) {
                case '+':
                    if (
                        this.dataEntered[index + 1] == '-' ||
                        this.dataEntered[index + 1] == '+'
                    ) {
                        result += this.dataEntered[index + 1];
                        result += this.dataEntered[index + 2];
                        this.dataEntered.splice(index + 1, 1, result);
                        this.dataEntered.splice(index + 2, 1);
                        result = '';

                        result =
                            +this.dataEntered[index - 1] +
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    } else {
                        result =
                            +this.dataEntered[index - 1] +
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    }
                    break;
                case '-':
                    if (
                        this.dataEntered[index + 1] == '-' ||
                        this.dataEntered[index + 1] == '+'
                    ) {
                        result += this.dataEntered[index + 1];
                        result += this.dataEntered[index + 2];
                        this.dataEntered.splice(index + 1, 1, result);
                        this.dataEntered.splice(index + 2, 1);
                        result = '';

                        result =
                            +this.dataEntered[index - 1] -
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    } else {
                        result =
                            +this.dataEntered[index - 1] -
                            +this.dataEntered[index + 1];
                        this.dataEntered.splice(index, 1, result);
                        this.dataEntered.splice(index - 1, 1);
                        this.dataEntered.splice(index, 1);
                        index = index - 2;
                        result = '';
                    }

                    break;
                default:
                    break;
            }
        }
        if (isNaN(this.dataEntered[0])) {
            this.dataEntereds = 'Sintax Error';
            this.error = true;
        } else {
            this.dataEntereds = this.dataEntered[0].toString();
        }
        this.equalpressed = true;
    }
}
