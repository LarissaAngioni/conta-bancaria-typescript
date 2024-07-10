import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupança"];

    const contas: ContaController = new ContaController();


    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, "Larissa", 1000.00, 300.00));

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 4321, 2, "Lari", 1000.00, 29));


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

        console.log(colors.bg.black, colors.fg.redstrong
            , "Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Povo - A revolução começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("Digite o Número da Agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da Conta: ");
                titular = readlinesync.question("");

                console.log("Digite o Tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta: ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;
                    case 2:
                        console.log("Digite a Data de Aniversário da Conta: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        );
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar Todas as Contas\n\n");
                contas.listarTodas();

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {
                    console.log("Digite o Número da Agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da Conta: ");
                    titular = readlinesync.question("");

                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            );
                            break;
                        case 2:
                            console.log("Digite a Data de Aniversário da Conta: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            );
                            break;
                    }
                } else {
                    console.log(`A conta ${numero} não foi encontrada!`);

                }

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress();
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                keyPress();
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
                break;
        }
    }

}

export function sobre(): void {
    console.log(colors.bg.whitebright, colors.fg.blackstrong
        , "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Larissa ✨");
    console.log("Larissa Angioni - larissaangioni@gmail.com");
    console.log("github.com/larissaangioni");
    console.log("*****************************************************", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
