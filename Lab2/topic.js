let topic = [
    "課程介紹",
    "環境安裝&Lab1",
    "國定假日",
    "Lab2 & Lab3",
    "Lab4",
    "Lab5",
    "Lab6",
    "放假",
    "期中輔導",
    "期中查核"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,14);