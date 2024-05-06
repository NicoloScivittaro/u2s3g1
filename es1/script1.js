class Utente {
    constructor(nome, cognome, età, luogo) {
      this.nome = nome;
      this.cognome = cognome;
      this.età = età;
      this.luogo = luogo;
    }
  
    confrontaEtà(altroUtente) {
      if (this.età < altroUtente.età) {
        return altroUtente.nome + " è più anziano di " + this.nome + ".";
      } else if (this.età > altroUtente.età) {
        return altroUtente.nome + " è più giovane di " + this.nome + ".";
      } else {
        return altroUtente.nome + " ha la stessa età di " + this.nome + ".";
      }
    }
  }
  
  let utente1 = new Utente('Cristiano', 'Ronaldo', 39, 'Madeira');
  let utente2 = new Utente('Daniele', ' De Rossi', 43, 'Ostia');
  let utente3 = new Utente('lionel', 'Messi', 36, 'Nettuno');
  
  console.log(utente1.confrontaEtà(utente2));
  console.log(utente2.confrontaEtà(utente3));
  console.log(utente3.confrontaEtà(utente1));