import { getPeople } from "./StarWarsService.js";

async function main(){
  const starWarsPeople = await getPeople();
  /*
  //for
  console.log('Nome das pessoas: ')
  for(let i=0; i<starWarsPeople.length; i++){
    console.log(starWarsPeople[i].name)
  }
  //for-in
  console.log(`\nDados de ${starWarsPeople[0].name}:`)
  for(let propriety in starWarsPeople[0]){
    console.log(`${propriety}: ${starWarsPeople[0][propriety]}`)
  }
  
  //for-of
  console.log(`\nAno de nascimento:`)
  for(let person of starWarsPeople){
    console.log(`${person.name}: ${person.birth_year}`)
  }
  */
  
  //map
  const starWarsPeopleNames = starWarsPeople
    .map((person) => {
      const nome = person.name;
      const altura = person.height;
      const { name, height } = person;
      return { name, height }
    });
  //console.log(starWarsPeopleNames)

  //filter
  const starWarsPeopleFiltered = starWarsPeople
    .filter(person => person.gender === 'male')
    .map((person) => {
      return { name: person.name, gender: person.gender};
    });
  //console.log(starWarsPeopleFiltered)

  //reduce
  const totalHeight = starWarsPeople.reduce((total, person) => {
    total += Number(person.height);
    return total;
  }, 0)
  console.log('A média de altura é: ', totalHeight/starWarsPeople.length)
}  


main()