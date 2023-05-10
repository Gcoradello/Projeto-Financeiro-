const spaceDestino = document.querySelector("[data-destino]"); 
const spaceData = document.querySelector("[data-range]"); 
const spaceAmount = document.querySelector("[data-amont]"); 

const containerCards = document.querySelector("[data-containerCard]"); 

const inputRageDate = document.querySelector("[data-rangeDate]")
const btnSend = document.querySelector("[data-send]")




btnSend.addEventListener("click",realizarBusca)


function realizarBusca (event) {
  event.preventDefault();
  const dataBuscada = inputRageDate.value;

  clearContainer();
  GetAllData(dataBuscada);
}


function clearContainer(){
  containerCards.innerHTML = "";
}


 function GetAllData (rangeData){

    const url = `http://ec2-3-83-114-176.compute-1.amazonaws.com:8080/Financas/?data=${rangeData}`;
     
    fetch(url , {method: "GET"})
    .then((response)=>{return response.json()})
    .then((object) => {
   
      for(let i = 0 ; i < object.length ; i++){
        
        containerCards.innerHTML += `
          <div class="card" data-card>
                <span class="card-content" data-destino >${object[i].destino}</span>
                <span class="card-content" data-range > ${object[i].data_uso}</span>
                <span class="card-content" data-amount > R$ ${object[i].valor}</span>
            </div>`
          }
          
    })
 }
 
