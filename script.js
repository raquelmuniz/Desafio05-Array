let itens = ["Leandro", "Stefany", "Maria", "João"]
console.log(itens);

itens.unshift("Raquel")
console.log(itens);

itens.pop()
console.log(itens);

itens.push("Joventino", "Juma")
console.log(itens);

itens.shift()
console.log(itens);

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return (a - b)
})
console.log(numbers);