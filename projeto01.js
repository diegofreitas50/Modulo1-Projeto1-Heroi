var prompt = require("prompt-sync")();

let respostasSim = 0;
let respostaHero = 'nao';
let playAgain = 'nao';


do{
    console.clear();
    console.log('Cleitinho: O motorista Uber guerreiro.\n\n     Essa é uma história de um motorista Uber guerreiro, mais conhecido como Cleitinho, que enfrenta batalhas diárias para conseguir executar\n suas viagens e garantir a paz e a salvação de seu povo - a sua família - contra seus inimigos mais perigosos da atualidade: os boletos.\n\n     Há muito tempo os boletos vêm assombrando à vida de muitos povos, impedindo-os de levarem uma vida sossegada e até mesmo de realizarem\n seus sonhos. Alguns boletos são mais fortes e perigosos que outros, mas todos são difíceis de serem derrotados. Você pode até tentar fugir\n de alguns, mas depois terá que enfrentá-los novamente em suas versões ainda maiores e mais fortes: os boletos atrasados, como são conhecidos,\n contam agora com a ajuda das multas e juros e podem te derrotar mais facilmente.\n\n     Para conseguir completar a sua missão e ganhar a guerra contra os boletos, o nosso guerreiro precisa de uma boa estratégia e organização,\n sendo necessário cumprir alguns requisitos antes e durante a sua jornada fazendo viagens como motorista Uber.\n\n     Para ajudar ao nosso guerreiro Cleitinho à compreender se ele será capaz de êxito nas batalhas, será necessário responder as seguintes\n perguntas:\n\n ');

    console.log("1 - Cleitinho possui um kit GNV em seu carro, para poder obter lucro em suas viagens?\n");
    respostaHero = prompt('Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== 'nao' && respostaHero !== 'sim') {
            respostaHero = prompt('Desculpe, mas não podemos ajudar Cleitinho com essa resposta! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== 'nao' && respostaHero !== 'sim');

    if(respostaHero === 'sim') {
        respostasSim++
    }

    console.log('2 - Cleitinho possui um smartphone atualizado que permita rodar o pesado app da Uber com fluidez sulficiente para não \nperder viagens devido à travamentos, e que os sistemas de GPS e internet 4G também fuincionem adequadamente para não ficar perdido \nna selva de pedras?\n');
    respostaHero = prompt('Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== 'nao' && respostaHero !== 'sim') {
            respostaHero = prompt('Desculpe, mas não podemos ajudar Cleitinho com essa resposta! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== 'nao' && respostaHero !== 'sim');

    if(respostaHero === 'sim') {
        respostasSim++
    }

    console.log('3 - O jovem Cleitinho consegue fazer manuntenção mecânica em seu carro periodicamente para não ficar no prego \ndentro de uma favela perigosa?\n');
    respostaHero = prompt('Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== 'nao' && respostaHero !== 'sim') {
            respostaHero = prompt('Desculpe, mas não podemos ajudar Cleitinho com essa resposta! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== 'nao' && respostaHero !== 'sim');

    if(respostaHero === 'sim') {
        respostasSim++
    }

    console.log('4 - Nosso guerreiro conduz o seu veículo de forma ágil e eficaz possibilitando realizar um maior número de viagens \ndurante o dia, evitando ficar preso em engarafamentos?\n')
    respostaHero = prompt('Responta com "sim" ou "nao": ');
    console.clear(); 

    do{      
        if(respostaHero !== 'nao' && respostaHero !== 'sim') {
            respostaHero = prompt('Desculpe, mas não podemos ajudar Cleitinho com essa resposta! Responda com "sim" ou "nao": ');
            console.clear();     
        }
    }while(respostaHero !== 'nao' && respostaHero !== 'sim');

    if(respostaHero === 'sim'){
        respostasSim++
    }

    console.log('5 - Por fim, Cleitinho consegue manter o veículo limpo, ser educado e solícito para/com os passageiros \npossibilitando, ocasionalmente, garantir uma gorjetinha marota?\n')
    respostaHero = prompt('Responta com "sim" ou "nao": ');
    console.clear(); 

    do{      
        if(respostaHero !== 'nao' && respostaHero !== 'sim') {
            respostaHero = prompt('Desculpe, mas não podemos ajudar Cleitinho com essa resposta! Responda com "sim" ou "nao": ');
            console.clear();     
        }
    }while(respostaHero !== 'nao' && respostaHero !== 'sim');

    if(respostaHero === 'sim') {
        respostasSim++
    }

    console.clear(); 

    if(respostasSim == 5) {
        console.log('Impressionante! Cleitinho conseguiu sair vitorioso em todas as suas batalhas, assim sendo extremamente possível exterminar \ntodos os boletos que assolam a sua família, e quem sabe um dia (trabalhando umas 15 horas por dia), possa realizar seus sonhos.\n\n');
    }else if(respostasSim == 4) {
        console.log('Muito bom, foi por pouco! Cleitinho precisa melhorar. Conseguiu derrotar os boletos, mas não por muito tempo\n\n');
    }else if(respostasSim == 3) {
        console.log('Assim fica difícil! Cleitinho conseguiu fugir de alguns boletos, mas lembre-se: ele volta mais poderoso e pode ser fatal.\n\n');
    }else if(respostasSim == 0) {
        console.log('Assim não dá! Cleitinho foi parar no SPC e tá devendo à agiota. Coitado. O seu veículo foi apreendido pelo Pai de todos \nos boletos: O temível Banco.\n\n');
    }else 
        console.log('Decepcionante! Cleitinho está endividado mas ainda dá para reverter a situação, mas tem que fugir da polícia pois seu veículo \nestá com busca e apreensão por não ter vencido o boleto do financiamento e IPVA.\n\n');

    playAgain = prompt('Deseja jogar novamente? Responda "sim" ou "nao": ');
    console.clear(); 

}while(playAgain == "sim");

console.log('Obrigado, nos vemos em uma próxima aventura!\n\n');
