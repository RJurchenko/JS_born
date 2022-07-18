let grades = [91, 66, 77, 84, 66];
let search = 66;

function searchGrade (grades,search){
  for (var i=0; i < grades.length; i++){
    if (grades[i] == search){
      console.log(`The grade ${search} exists`);
      break;
    }
  }
}

searchGrade(grades,search);