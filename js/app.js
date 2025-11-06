class Calculator {
    a;
    b;
    oper;
    constructor(pA, pB, pOper) {
        this.a = pA*1
        this.b = pB*1
        this.oper = pOper
    }

    sum() {
        return this.a + this.b
    }

    minus() {
        return this.a - this.b
    }

    result() {
        switch(this.oper){
            case '+': return this.sum()
            break
            case '-': return this.minus()
            break
            default: return 'Непонятная операция'
        }
    }
}

let btn = document.querySelector('button')

btn.addEventListener('click', () => {

    const calc = new Calculator(document.querySelectorAll('input')[0].value, document.querySelectorAll('input')[1].value, document.querySelector('select').value)

    document.querySelector('span').innerHTML = calc.result()
})
