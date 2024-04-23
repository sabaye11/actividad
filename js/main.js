class loginForm extends HTMLElement{
    constructor() {
        super();
        let form = this.querySelector('#loginForm');
        this.formId = form.getAttribute('id');
        this.table = document.querySelector(`table[data-form="${this.formId}"]`).getElementsByTagName('tbody')[0];

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.user = form.querySelector('#username').value;
            this.pass = form.querySelector('#password').value;
            const row = this.addRow();
            this.addCells(row);
            this.clearForm();
        })
    }

    addRow() {
        return this.table.insertRow();
    }

    addCells(row){
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = this.user;
        cell2.textContent = this.pass;
    }

    clearForm(){
        this.user = '';
        this.password = '';
    }
}

customElements.define('login-form', loginForm);


