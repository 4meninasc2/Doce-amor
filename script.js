const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hilary Bittencout é uma linda moça de 22 anos, estava em busca de um emprego, mas não imaginaria ela que no meio desta busca encontraria o grande amor da sua vida. A história irá começar em:",
        alternativas: [
            "Um dia chuvoso",
            "Um dia de sol"
        ]
    },
    {
        enunciado: "Em uma manhã fria de New York Hilary continua em busca do seu novo emprego, camiinhando pelas ruas que estava presente as melhores e maiores empresas do país, a moça vizualizou a Jones Diamonsds que sempre foi seu sonhos de um dia trabalhar. Ao passar em frente dela acabou notando um anúcio de vaga de emprego  e logo se empolgou, apressou-se a entrar na empresa para entregar o curriculo. Ao entrar na empresa a recpcionista vai ser:", 
        alternativas: [
            "Má"
            "Gentil"
        ]
    },
    {
        enunciado: "A recepisionista notou que HIlary tinha uma capacidade enorme para entrar lá, mas ficou com inveja por ela ser tão linda e disse (infelismente vocẽ não se encaixa no perfil da empresa ). O presidente da empresa empresa, o senhor Oliver, estava saindo para p seu almoço e assim avi su recepcionista atendendo uma mocça educada e gentil, porém sua recepcionista estava tratando a moça com um rigidez desnecessaria. O presidenta se sentiu atraido pela beleza de Hilary, então quando se deu conta ja etava ao lado dela perguntando o que estava acontecendo ali. A recepcionista tenta desconversar, mas Oliver ja tinha escutado tudo e ficou muito nervoso ppela ação de sua funcionaria, sem pensar dua vezes, ele pegou o curriculo de Hilary e notou o quão boa ela seria para o cargo de sua secretaria. Oliver vai contratar Hilary:"
        alternativas:[
            "Sim, você começa a trabalhar amanhã",
            "Sim, você está contratada, gostaria de ir almoçar comigo para você já se familiarizar"
        ]
    },
    {
        enunciado:"bom, eu analisei o seu curriculo e você é bem capacitada e está contratada, a senhorita começa amanhã, mas você gostaria de ir em um almoço para se familiarizae com o trabalho. Passou semanas, meses e em 2 dias Hilary iria fazer 2 anos que estava trabalhando para Oliver nesse tempo juntos, oliver se apaixou por sua secretaria, mas não tinha certeza se ela sentia o mesmo, então resolvel expor seus sentimentos por ela. Oliver marcou um jantar com Hilary, foi busca-la em sua casa com flores e chocolates. Hilary que já havia se apaixonado por seu chefe, quando viu tudo o que estava acontecendo se emocionou, enquanto seu amor declarava palavras maravilhosas direcionadas a ela, ficou radiante até que ele fala: Hilary você aceita ser minha namorada",
        alternativas:[
            
        ]
    }
]; 

