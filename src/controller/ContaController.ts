import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    //Coleção array para armazenar os objetos Conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // Controlar os números das Contas
    public numero: number = 0;

    procurarPorTitular(titular: string): void {
        let buscaPorTitular = this.listaContas.filter(c => 
            c.titular.includes(titular)
        );

        buscaPorTitular.forEach(conta =>conta.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.visualizar();
        } else {
            console.log(`A conta ${numero} não foi encontrada!`);
            
        }
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;

            console.log("\nA conta foi atualizada!");
            
        } else {
            console.log(`A conta ${conta.numero} não foi encontrada!`);  
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nConta Excluída!");
            
        } else {
            console.log(`A conta ${numero} não foi encontrada!`);
            
        }
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true){
                console.log("\nSaque efetuado com sucesso!");
            }
        } else {
            console.log(`A conta ${numero} não foi encontrada!`);
            
        }
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor);
            console.log("\nDepósito efetuado com sucesso!");

        } else {
            console.log(`A conta ${numero} não foi encontrada!`);
            
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if(buscaContaOrigem !== null && buscaContaDestino !== null){
            if(buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);

                console.log("\nTransferência efetuada com sucesso!");
            }
            
        } else {
            console.log(`A conta não foi encontrada!`);
            
        }
    }
    
    //Métodos auxiliares
    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if (conta.numero === numero){
                return conta;
            }
        }
        return null;
    }  
}
