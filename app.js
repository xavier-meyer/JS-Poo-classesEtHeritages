// class js

// class véhicule parent des class Voiture et Moto
// on ne repetes pas les propriétés si elles st identiques => héritage
// class parent
class Vehicule {
    constructor(marque, modele, annee, nbRoue, nbPorte){ 
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
// on rajoutes des propriétés ds la class parents qui st automatiquement rajoutés ds les class enfants    
        this.nbRoue = nbRoue;
        this.nbPorte = nbPorte;
    }    
    rouler(){
        console.log("je roule !!")
    }
}
// extends => j'étends toutes les propriétés
// 1ere class enfant
class Moto extends Vehicule {
    constructor(marque, modele, annee){
        // super: appel du constructor parent(vehicule)
        super(marque, modele, annee, 2, 0)
    }
    cabrer(){
        console.log("je cabre!!");
    }
}

class Voiture extends Vehicule{
    constructor(marque, modele, annee, nbPorte){
        super(marque, modele, annee, 4 , nbPorte)
    }    
}
// on définit des objets voiture et moto
let voiture = new Voiture("porsche", "Carrera", "2015");
let moto = new Moto("suzuky", "s", "2000");

// on affiche le nombres de roues de la voiture et de la moto
console.log(`voiture ${voiture.nbRoue}`);
console.log(`voiture ${moto.nbRoue}`);

// on définit 2 class portes enfants de la class voiture
// on étends les propriétés de class voiture aux class Voiture2Porte et Voiture4Porte

class Voiture2Porte extends Voiture {
    constructor(marque, modele, annee){
        super(marque, modele, annee, 2 , 2)
    }    
}
class Voiture4Porte extends Voiture {
    constructor(marque, modele, annee){
        super(marque, modele, annee, 4 , 2)
    }    
}

// on définit des objets avec les 2 nouvelles classes
let ferrari = new Voiture2Porte("ferrari", "calabria", "2019");
let renault = new Voiture4Porte("Renault", "Twingo", "2015");

console.log(`ferrari ${ferrari.modele} ${ferrari.nbPorte} ${ferrari.annee}`);
console.log(`twingo ${renault.nbPorte}`);
console.log(`moto ${moto.marque} ${moto.modele} ${moto.annee} ${moto.nbPorte} ${moto.nbRoue}`);

// afficher les fonctions rouler et cabrer
moto.rouler();
moto.cabrer();