"use strict";

let pairwiseConcatination = {
   	firstArray: [],
  	secondArray: [],
   	[Symbol.iterator]() {

     	let arrSize = Math.min(this.firstArray.length, this.secondArray.length);
     	let current = 0;
      	
      	return {
        	next: () => {
            	if (current < arrSize) {
            		let arr = [];
            		arr.push(this.firstArray[current], this.secondArray[current++]);
               		return {
               			done: false,
                  		value: arr 
                  		
               		}
            	} else {
               		return {
                  	done: true
               		} 
           		} 
       	 	} 
      	} 
   	}

}
pairwiseConcatination.firstArray = ["Tom", "Sam", "Ray"];
pairwiseConcatination.secondArray = [22, 26, 24, 20];
for (let pair of pairwiseConcatination) {
   console.log(pair);
}
/*
Результат:
["Tom", 22]
["Sam", 26]
["Ray", 24]

/*
Задание №2. Итераторы
Напишите итератор для объекта pairwiseConcatination, у которого есть два свойства. Каждое свойство является массивом.
Итератор должен возвращать пары значений (массив из двух элементов). Пары формируются следующим образом, первая пара должна состоять из первых значений свойств объекта pairwiseConcatination, вторая пара из вторых значений и т.д.
Если в свойствах объекта pairwiseConcatination массивы разной длины, то количество пар должно быть равное длине меньшего массива.
let pairwiseConcatination = {
   firstArray: [],
   secondArray: [],
   [Symbol.iterator]() {
      // Ваш код
   }
}
pairwiseConcatination.firstArray = ["Tom", "Sam", "Ray"];
pairwiseConcatination.secondArray = [22, 26, 24, 20];
for (let pair of pairwiseConcatination) {
   console.log(pair);
}
Результат:
["Tom", 22]
["Sam", 26]
["Ray", 24]

*/