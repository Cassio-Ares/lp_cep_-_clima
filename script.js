async function getAddress() {
  const cep = document.querySelector("#cep").value;
   
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();
    document.querySelector('#rua').value= data.logradouro;
    document.querySelector('#bairro').value= data.bairro;
    document.querySelector('#cidade').value= data.localidade;

  } catch (error) {
    alert(`Este cep ${cep} não existe por favor verifique o numero e digite novamente`)
    console.log(error.message)
  }

}


async function getPrevisao(){
  const lat = document.querySelector('#latitude').value
  const long = document.querySelector('#longitude').value


  try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)

      const data = await response.json();
      
    for(let i = 0; i < data.hourly.temperature_2m.length; i++){
       document.querySelector('#resposta').innerHTML += `<div>${data.hourly.time[i]} - ${data.hourly.temperature_2m[i]}</div>`;
    }


  } catch (error) {
      alert(`Verifique se todos os campos foram preenchidos com dados validos`)
      console.log(error.message)
  }
}



