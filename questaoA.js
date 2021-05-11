/* a. Retorne a lista ordenada de forma crescente.
 b. Retorne a lista sem elementos repedidos.
 c. Retorne o maior e menor valor da lista.
 d. Retorne uma lista “B” no qual seus elementos serão, respectivamente, os valores
 de “A” * 2.*/

const array = [0, 2, 5, 4, 3, 2, 5]
const duplicar = i => i * 2
const listaB = array.map(duplicar)

const repetidos =[...new Set(array)]

const min = Math.min(...array);
const max = Math.max(...array);

array.sort(function (a,b){
      if( a > b){ 
      return 1
      }else{
      return -1
      }
      return 0
      
   })
   
console.log("Ordem ordenada:" + ' ' + array)
console.log("Sem numeros repetidos:" + ' ' + repetidos)
console.log("O maior numero no array é: "+ max + " e o menor é: " + min)
console.log("O dobro da lista A é: " + listaB)