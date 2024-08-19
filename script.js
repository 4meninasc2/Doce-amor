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
        enunciado: "A recepisionista notou que HIlary tinha uma capacidade enorme para entrar lá, mas ficou com inveja por ela ser tão linda e disse (infelismente vocẽ não)"
    }
]; 

