msgDoFinalizar = document.querySelector("#texto")
num = document.querySelector("#txt1")
let arrey = []

   function adicionar(){ 
      numeroAdicionado = Number(num.value)

         if(numeroAdicionado > 100 || numeroAdicionado < 1){
            alert("[ERROR] => Número Inválido")
         }
         else if(arrey.indexOf(numeroAdicionado) != -1){
            alert("[ERROR] => Número já Adicionado")
         }
         else{
            arrey.push(numeroAdicionado)
      
            let Msg = document.createElement("option")
            valor.appendChild(Msg)
            Msg.innerHTML = `numero ${numeroAdicionado} adicionado`
            msgDoFinalizar.innerHTML = ''                 
         }
         num.value = ""
         num.focus()  
   }

   function final(){
      numeroAdicionado = Number(num.value)
      
         if(!arrey.indexOf(numeroAdicionado) == -1){
            alert("[ERROR] => Operação Inválida")
         }
         else{
            let totalNum = arrey.length
            let maior = arrey[0]
            let menor = arrey[0]
            let soma = 0
            let media = 0

            for(let pos = 0; pos < arrey.length; pos++){
                  soma += arrey[pos]
               if(arrey[pos] > maior){
                  maior = arrey[pos]
               }else if(arrey[pos] < menor){
                  menor = arrey[pos]
               }
            }
               media = soma / totalNum
            msgDoFinalizar.innerHTML += `Existem ${totalNum} números adicionados na lista <p>
                                          Todos os somados é igual à ${soma} <p>
                                          O maior número é ${maior} <p>
                                          O menor número é ${menor} <p>
                                          A media dos números somados é ${media} <p>`
         }
   }