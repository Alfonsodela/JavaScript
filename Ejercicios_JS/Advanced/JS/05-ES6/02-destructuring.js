window.onload = () => {

    // let marvelCharacter = {
    // name: 'Alfonso',
    // surname: 'López de la Manzanara',
    // }

    // let { name, surname } = marvelCharacter;
    // console.log(`Hola ${name, surname}, has iniciado sesión`);
    // let name = marvelCharacter.name;
    // let team = marvelCharacter.team;



    // 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
    // del objeto usando object destructuring e imprimelas por consola. Cuidado, 
    // no hace falta hacer destructuring del array, solo del objeto.

    const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival']}

    const { title, gender } = game;
    console.log(`The film ${title} is the gender ${gender[1]}`)

   

    // 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
    // llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
    // imprimelo por consola.

    //    const fruits = ['Banana', 'Strawberry', 'Orange'];

    //    const [fruit1, fruit2, fruit3] = fruits

    //    console.log(fruit1, fruit2, fruit3)



    // 2.3 En base al siguiente javascript, usa destructuring para crear 2 
    // variables igualandolo a la función e imprimiendolo por consola.

    const animalFunction = () => {
        return { name: 'Bengal Tiger', race: 'Tiger' }
    };

       // const { name, race } = animalFunction()
    // console.log(name, race)



    // 2.4 En base al siguiente javascript, usa destructuring para crear las 
    // variables name y itv con sus respectivos valores. Posteriormente crea 
    // 3 variables usando igualmente el destructuring para cada uno de los años 
    // y comprueba que todo esta bien imprimiendolo.
    // 
    // const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

    // const {name, itv} = car
    // const [year1, year2, year3] = itv;

    // console.log(`El coche ${name} pasó la itv en el año ${itv[0]}`)
    // console.log(year1, year2, year3);

   

};