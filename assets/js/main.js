// alert('Практическая работа №2');

// console.log('123');

// let name = prompt ('Введите название города');
// let year = prompt ('Введите год образования города');
// let population = prompt ('Введите население города');
// year=Number(year);
// let year_1= 2023- year;
// alert ('Городу ' + name + ' исполнилось ' + year_1+ ' лет с момента его образования. Население - ' + population + ' человек');


// alert('Практическая работа №3');
let num1 = Number(prompt ('Введите стоимость товара'));
let num2 = Number(prompt ('Введите количество денег у клиента'));
let a = num1-num2;
let b = num2-num1;

if (num1==num2){
    console.log('Покупка совершена');
}else{
    if(num1>num2){
        console.log('Для покупки не хватает '+a+' руб.');
    }else{
        console.log('Покупка совершена. Сдача '+b+' руб.');
    }
}
