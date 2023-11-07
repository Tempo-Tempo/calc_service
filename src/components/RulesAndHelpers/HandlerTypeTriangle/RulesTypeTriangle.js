export const RulesTypeTriangle = ({a, b, c}) => {
   let resultText = '';
   let errorInput = '';
  if(c === undefined || c === '') return;
   switch(true) {
      case (Number(a) + Number(b)) <= Number(c) || (Number(a) + Number(c)) <= Number(b) || (Number(b) + Number(c)) <= Number(a):
      resultText = 'Треугольника с такими сторонами не существует';
      errorInput = c;
      return {resultText, errorInput};
      default: 
      console.log('work');
   }
}