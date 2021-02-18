const app = {
    // Tableau contenant le nom des 4 animaux totems
    animals: [
        'éléphant',
        'écureuil',
        'renard',
        'tigre', 
        'perroquet',
        'chat',
        'chien',
        'licorne',
        'gorille'

    ],

    // Méthode appelée au chargement de la page
    init: function() {
        let form = document.querySelector('form').addEventListener('submit', app.handleTotem);
    },

    handleTotem : function(evt)
    {
        //Récupération de la valeur de l'input (le nom du user)
        evt.preventDefault();
        let input = document.querySelector('.name');
        let name = input.value;

        //Mise en place d'une condition entre la valeur de l'input et les animaux du tableau animals
       if (name == '')
       {
        //Message d'erreur si l'input est vide
         let div = document.querySelector('.speech');
         div.textContent = "Veuillez entrer votre prénom pour connaitre votre animal totem";
       }

       else if ((name.length) === 6 ) 
       {
           let nameAnimal = app.animals[3];
           app.post(nameAnimal);
       }

       else if (name.startsWith('s') || (name.startsWith('s') || name.endsWith('e')))
       {
            let nameAnimal = app.animals[2];
            console.log(nameAnimal);
            app.post(nameAnimal);
       }

       else if((name.length)%5 == 0 || (name.length%3) == 0)
       {
            let nameAnimal = app.animals[0];
            console.log(nameAnimal);
            app.post(nameAnimal);
       }

       else if ((name.length<7 && (name.startsWith('N') || name.startsWith('n') )))
       {
            let nameAnimal = app.animals[1];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }

       else if (name.startsWith('T') || (name.startsWith('t') || name.endsWith('n')))
       {
            let nameAnimal = app.animals[4];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }

       else if ((name.length > 5 && (name.startsWith('L') || name.startsWith('l'))))
       {
            let nameAnimal = app.animals[5];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }

       else if ( name.startsWith('R') || name.startsWith('P') || name.startsWith('r') || name.startsWith('p') )
       {
            let nameAnimal = app.animals[6];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }

       else if ((name.length<=7))
       {
            let nameAnimal = app.animals[7];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }

       else if ((name.length>7))
       {
            let nameAnimal = app.animals[8];
            console.log(nameAnimal);
            app.post (nameAnimal);
       }
    },

    // Méthode qui affiche l'image de l'animal totem en fonctin du résultat de la condition
    post : function(nameAnimal) 
    {
        let div = document.querySelector('.speech');
        div.innerHTML = '<img src ="images/' +nameAnimal+ '.png" alt = "animal picture">';
    }
}

// Quand la page est entièrement chargée, on exécute la méthode app.init
document.addEventListener('DOMContentLoaded', app.init);
