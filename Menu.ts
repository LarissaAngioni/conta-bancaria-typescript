import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // const c1: Conta = new Conta(1, 1234, 1, "Larissa", 80000.00);

    // c1.visualizar();
    // console.log(`O saldo da conta é: ${c1.saldo}`);
    
    // c1.saldo = 900.00
    // console.log(`O saldo da conta é: ${c1.saldo}`);

    // c1.sacar(1000.00);
    // console.log(`O saldo da conta é: ${c1.saldo}`);

    // c1.depositar(1000);
    // console.log(`O saldo da conta é: ${c1.saldo}`);

    // const cc1: ContaCorrente = new ContaCorrente(1, 1234, 1, "Larissa", 1000.00, 300.00);

    // cc1.visualizar();

    // cc1.sacar(1200);
    // // cc1.visualizar();
    // cc1.depositar(700);
    // cc1.visualizar();

    const cp1: ContaPoupanca = new ContaPoupanca(1, 1234, 2, "Larissa", 1000.00, 29);

    cp1.visualizar();

    while (true) {

        console.log(colors.bg.red, colors.fg.green,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                    BANCO DO POVO                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log(colors.reset, 
            "                                                     ");

        console.log(colors.bg.black,colors.fg.redstrong
            ,"Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Povo - A revolução começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log(colors.bg.whitebright,colors.fg.blackstrong
        ,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: Larissa");
    console.log("Larissa Angioni - larissaangioni@gmail.com");
    console.log("github.com/larissaangioni");
    console.log("*****************************************************", colors.reset);
}

main();
