export class Conta{

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

//ctrl + shift + p > typescript > generate constructor

	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //ctrl + shift + p > typescript > generate all getter setter
    
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    public sacar(valor: number): boolean{
        if(this._saldo < valor){
            console.log("Saldo insuficiente!");
            return false;       
        } 
        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void{
        this._saldo += valor;
    }

    public visualizar(): void{
        let tipo: string = ""
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança"
                break;
        }
        console.log("Dados da conta");
        console.log(`Número da conta: ${this._numero}`);
        console.log(`Número da agência: ${this._agencia}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Titular da conta: ${this._titular}`);
        console.log(`Saldo da conta: ${this._saldo}`);        
    }

}
