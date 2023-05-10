const destino = document.querySelector("#destino");
const data = document.querySelector("#date");
const amount = document.querySelector("#amount");
const buttonForm = document.querySelector("[data-button]");
const boxResponse = document.querySelector("[data-response]");


buttonForm.addEventListener("click", cadastrar);


const inputsForms = document.querySelectorAll("[data-form]")
    function verificaForms(){ 
      
        let conditionReturn = [];
        inputsForms.forEach((input) => {
            input.classList.remove("border")
            const valorNegativo = input.value <= 0;
            const inputSemConteudo = input.value.length == 0; 

            if(inputSemConteudo || valorNegativo){
            input.classList.add("border")
            boxResponse.style.color = "red";
            boxResponse.style.textAlign = "center"
            boxResponse.innerHTML = `Valide os campos a serem preenchidos`;

            conditionReturn.push(false);
            
            }
            else {
                conditionReturn.push(true);
            }
        });
        const inpusValidations = conditionReturn.includes(false) ? false : true ;

        return inpusValidations
    };


  function limparImputs() {
        inputsForms.forEach(input => { input.value = ""})
   };






function cadastrar(event){
    event.preventDefault();

    const despesaInfo = {
        destino:destino.value,
        data_uso:data.value,
        valor:amount.value
    }


    if(verificaForms()){
             fetch("http://ec2-3-83-114-176.compute-1.amazonaws.com:8080/Financas",
            {
                headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(despesaInfo)
        })
        .then((res)=>{ 
            boxResponse.style.color = "green"
            boxResponse.style.textAlign = "center"
            boxResponse.innerHTML = `Despesa Cadastrada com suscesso`
        })
        .catch((res)=>{ console.log(res)})
        limparImputs();
    };

}