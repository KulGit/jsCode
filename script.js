let money = prompt('Ваш бюджет на месяц!'),
    time = prompt('Enter time in format год месяц день');
appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let a1 = prompt('Введите обязательную статью расходов', "eaten"),
    a2 = prompt('Во сколько обойдется',"how much?"),
    a3 = prompt('Введите обязательную статью расходов', "eaten"),
    a4 = prompt('Во сколько обойдется',"how much?");

appData.expenses[a1]=a2;
appData.expenses[a3]=a4;

alert("Ваш бюджет"+ appData.budget/30);


