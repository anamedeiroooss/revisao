function soma(num1,num2){
    return console.log(`O resultado da soma dos numeros é ${num1+num2}`)
}
soma (10,30)

function imprimeMensagem(mensagem){
    return console.log(mensagem)
}
imprimeMensagem(`olá usuário`)

function calculaMedia(nota1,nota2,nota3){
    return console.log(`a média é ${(nota1+nota2+nota3)/3}`)
}
calculaMedia(10,9,8)

const pessoa={
    nome: "Ana",
    idade:16,
    profissão: "Estudante"
}
 
const capturaPessoa=document.querySelector(`#pessoa`) 
capturaPessoa.innerHTML= `<p> Seu nome é:   ${pessoa.nome}</p>`
capturaPessoa.innerHTML+= `<p> Sua idade é:  ${pessoa.idade}</p>`
capturaPessoa.innerHTML+= `<p> Sua profissão é:   ${pessoa.profissão}</p>`

const usuario={
    nome: "Julia",
    idade:20,
    email: "julia567@gmail.com"
}
const capturaUsuario=document.querySelector(`.usuario`) 
capturaUsuario.innerHTML= `<p> Seu nome é:   ${usuario.nome}</p>`
capturaUsuario.innerHTML+= `<p> Sua idade é:  ${usuario.idade}</p>`
capturaUsuario.innerHTML+= `<p> Seu email é:   ${usuario.email}</p>`