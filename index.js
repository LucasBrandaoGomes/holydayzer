import express from "express";
import chalk from "chalk";

const app = express();


const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get('/holidays', (req, res)=> {
    res.send(holidays)
});

app.get('/is-today-holiday', (req,res)=> {
    
    const hoje = new Date();
    //const hojeStr = hoje.toLocaleDateString() 
    const hojeStr ="4/21/2022" //para fins de teste, pode mudar a data aqui
    let eFeriado;
    for (let i=0; i<holidays.length; i++){
        if (holidays[i].date.includes(hojeStr)){
            res.send(chalk.green(`HOJE É FERIADOOOOO! Dia de ${holidays[i].name}`));
        }
    }
    res.send(chalk.red("Hoje não é feriado, infelizmente"));
    }
)

app.listen(5000, () => console.log('server running - port 5000'));