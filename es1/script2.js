nomeAnimaleCampo = document.getElementById('nomeAnimale-campo')
let nomeProprietarioCampo = document.getElementById('nomeProprietario-campo')
let specieCampo = document.getElementById('specie-campo')
let razzaCampo = document.getElementById('razza-campo')

let elencoAnimali = document.getElementById('elencoAnimali')
let aggiungiButton = document.getElementById('aggiungi')

let animali = []

class Animale {
  constructor(nomeAnimale, nomeProprietario, specie, razza) {
    this.nomeAnimale = nomeAnimale
    this.nomeProprietario = nomeProprietario
    this.specie = specie
    this.razza = razza
  }

  verificaStessoProprietario(altroAnimale) {
    return this.nomeProprietario === altroAnimale.nomeProprietario
  }
}

const renderElenco = function () {
  elencoAnimali.innerHTML = '' // <-- svuoto l'elenco all'inizio
  animali.forEach((animale) => {
    const nuovoLi = document.createElement('li')
    nuovoLi.innerText =
      'Nome: ' + animale.nomeAnimale + ', proprietario: ' + animale.nomeProprietario
    elencoAnimali.appendChild(nuovoLi)
  })
}
aggiungiButton.onclick = function () {
    let nuovoAnimale = new Animale(
      nomeAnimaleCampo.value,
      nomeProprietarioCampo.value,
      specieCampo.value,
      razzaCampo.value
    )
  
    // Controllo se ci sono altri animali con lo stesso proprietario
    const animaliConLoStessoProprietario = animali.filter(animale =>
      animale.verificaStessoProprietario(nuovoAnimale)
    )
  
    if (animaliConLoStessoProprietario.length > 0) {
      console.log(true); // se ci sono animali con lo stesso proprietario
    }
  
  animali.push(nuovoAnimale)
  renderElenco()
  nomeAnimaleCampo.value = '' // <-- svuoto l'input field alla fine
  nomeProprietarioCampo.value = '' // <-- svuoto l'input field alla fine
  specieCampo.value = '' // <-- svuoto l'input field alla fine
  razzaCampo.value = '' // <-- svuoto l'input field alla fine
}