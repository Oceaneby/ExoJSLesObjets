// ***********SERIE 1 EXERCICE 1 *******************************



// let voiture = {
//     marque : "Tesla",
//     modele : "Model 3",
//      afficherDetails: function(){
//         console.log(`marque: ${this.marque}`);
//         console.log(`modele: ${this.modele}`);
        
        
//      }
//  };
//  voiture.afficherDetails();
 
// console.log(voiture.marque, voiture.modele);

// ************SERIE 1 EXERCICE 2 ***************************

// function Voiture(marque, modele){
//     this.marque = marque;
//     this.modele = modele;
//     this.afficherDetails =function(){
//          console.log(`marque: ${this.marque}`);
//          console.log(`modele: ${this.modele}`);
                
                
//             }
// };

// let voiture1 = new Voiture("Telsa", "Modele 3");
// let voiture2 = new Voiture("BMW", "X5");

// voiture1.afficherDetails();
// voiture2.afficherDetails();

// ************SERIE 1 EXERCICE 3 ************************


// function Voiture(marque, modele){
//     this.marque = marque;
//     this.modele = modele;

// }

// Voiture.prototype.demarrer = function(){
//     console.log(`${this.marque} démarre !`);
    
//   } 
//  let voiture = new Voiture("Mercedes", "SUV");
// voiture.demarrer();

// ********SERIE 1 EXERCICE 4 / EXERCICE 5************************
//  function Vehicule(type, marque, model){
//     this.type = type;
//     this.marque = marque;
//     this.model = model;
//  }

//  Vehicule.prototype.rouler = function(){
//     console.log("le vehicuke roule !");
    
//  }
//  function Camion(type, marque, model, poidsMax){
//     Vehicule.call(this, type, marque, model);
//     this.poidsMax = poidsMax;
//  }

//  Camion.prototype = Object.create(Vehicule.prototype);
//  Camion.prototype.constructor = Camion;

//  Camion.prototype.afficherPoidsMax = function(){
//     console.log(`Le poids maximum est ${this.poidsMax}`);
    
//  }

//  let camion = new Camion("Camion","Audi", "Modèle Y", "5 tonnes");
//  camion.rouler();
//  camion.afficherPoidsMax();

//  ************** SERIE 1 EXERCICE 6 *********************

// function camion(type, marque, model, poidsMax){
//       this.type = type;
//       this.marque = marque;
//       this.model = model;
//       this.poidsMax = poidsMax;
//       this.afficherDetails =function(){
//                   console.log(`marque: ${this.marque}`);
//                   console.log(`modele: ${this.model}`);
//                   console.log(`Poids autorisé maximum : ${this.poidsMax}`);
                  
//           }
//     }

//     camion.prototype.transportMarchandise = function(){
//     console.log("roule ma poule  !");
//    }   

//    let Camion = new camion("Camion","Audi", "Modèle Y", "5 tonnes");

//    Camion.afficherDetails();
//    Camion.transportMarchandise();

   // ************ SERIE 1 EXERCICE 7 *************************

//  function Voiture(marque, modele){
//     this.marque = marque;
//      this.modele = modele;

// }

//  Voiture.prototype.demarrer = function(){
//     console.log(`${this.marque} démarre !`);
    
//    } 
//    function camion(type, marque, model, poidsMax){
//       this.type = type;
//       this.marque = marque;
//       this.model = model;
//       this.poidsMax = poidsMax;
//       this.afficherDetails =function(){
//                   console.log(`marque: ${this.marque}`);
//                   console.log(`modele: ${this.model}`);
//                   console.log(`Poids autorisé maximum : ${this.poidsMax}`);
                  
//           }
//     }
//     camion.prototype.demarrer = function(){
//       console.log(`${this.marque} Le camion démarre`);
      
//     }
//     let Camion = new camion("Camion","Audi", "Modèle Y", "5 tonnes");
//    let voiture = new Voiture("Mercedes", "SUV");
//    voiture.demarrer();
//    Camion.demarrer();

   // *********** SERIE 1 EXERCICE 8 /9 ************************

   function animal (nom){
      this.nom = nom;
   }
   animal.prototype.parler = function(){
      console.log(`${this.nom} bruit d'animaux`);
      
   }
   function chien (nom, race){
      animal.call(this, nom);
      this.race = race;
   }
    chien.prototype = Object.create(animal.prototype);
    chien.prototype.constructor = chien;

   chien.prototype.parler = function(){
      console.log(`${this.nom} ${this.race} WoufWouf`);
      
   }

   let chien1 = new chien("Miska", "Malinois");
   // chien1.parler();

   function chat(nom){
      animal.call(this, nom);
   }

   chat.prototype = Object.create(animal.prototype);
   chat.prototype.constructor = chat;

   chat.prototype.parler = function(){
      console.log(`${this.nom} MiaouMiaou`);
   }
   let chat1 = new chat("Smock");
   // chat1.parler();

   let MesAnimaux = [chien1, chat1]
   MesAnimaux.forEach(MesAnimaux => MesAnimaux.parler());