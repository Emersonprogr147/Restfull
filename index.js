const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');




let app = express(); 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express());


consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');

});
/* 1-) Qual o resultado desta expressão? 

 Nesse código primeiro executara divisao e multiplicaçao
 Depois soma e subtraçao !! */

 let equacao = 10 * 4 - 8 + 24 / 8 ; 

 console.log(equacao) ; 
 
 /* 2-) operador == && === 
    ===  compara o valor e o tipo de dados ,quando voce usa operador ,você força a
  comparar o tipo também !
  == compara o valor de duas expressões , usado para comparar duas variaveis , 
  independente do tipo de dados da variavél ! */
 
 /* 3-) 
 resposta: letra b loop infinito ; */
 /*let num = -1 ; 
 
 while (num <= 10 ){
     console.log(num); 
     num += 0 ; 
 }
 if(num > 10 ) { 
     console.log(num) ; 
 } */
 
 /* 4-)  Analise o código e escreva qual o resultado será exibido ao lado da
  expressão "console.": 

 
 /*resposta: console.log('novoNumero =' + novoNumero ); result: novoNumero = 9 ;
  console.log('a = ' + a);  result: a = 3 ; */
 
  
  /* 5-) Analise o código e escreva qual o resultado será exibido ao lado da 
  expressão "console." : 
 
 resposta: 
  
 false 
 true
 {nome: 'maria '}
 {nome: 'pedro '}
 false
 
 
 /* 6-) Analise o trecho de código a seguir, e 
 escreva qual o resultado das variáveis "x" e "y" ao final da execução: */
 
 /* 7-)código no git hub 
 
 /*8-) Faça uma função que calcule a média simples (aritmética) de 3 valores quaisquer.
 Além dessa, faça uma outra função que receba nenhum
 ou vários valores e calcule a média aritmética simples desses valores. 
 
     
 /* 9-)  Dada duas variáveis A e B, sendo A = 3 e B = 5, escreva um código, SEM utilizar uma terceira variável, capaz de trocar o valor entre elas. Ao fim deste exemplo, 
 as variáveis deverão ser iguais a: A = 5 e B = 3 */
 
 let a = 3,  b = 5 , attemp = a ; 
 console.log(`a=${a} , b=${b}`);
 a= b;
 b= attemp 
 console.log(`a =${a} , b= ${b}`);
 
 
 /* 10-)Faça um programa que identifique se em 
 um determinado vetor, existem ou não valores repetidos.*/
 
 const array1 = [2 ,3 ,5 ]; 
 const array2 = [2 ,3 ,5 ]; 
 
 const compare = (array1 , array2 ) => {
     return array1.length === array2.length &&
     array1.every((item,index ) => item === array2 [index])
 
     }
 
 
 console.log( compare(array1,array2)) 
 
 

 /* 11-) github caixa eletronico */
 



