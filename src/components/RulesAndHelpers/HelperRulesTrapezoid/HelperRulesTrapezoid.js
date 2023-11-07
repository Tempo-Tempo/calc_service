export const HandlerRulesTrapezoid = (numbers) => {
   const {a, b, c, d} = numbers
   let resultText = '';
   console.log(numbers);
   if(a === '' || a === '0' || Number(a) < 0 ||
      b === '' || b === '0' || Number(b) < 0 || 
      c === '' || c === '0' || Number(c) < 0 ||
      d === '' || d === '0' || Number(d) < 0) return;
   switch(false) {
      case ((Number(a) + Number(b) + Number(c)) > Number(d) 
      && (Number(b) + Number(c) + Number(d)) > Number(a) 
      && (Number(a) + Number(d)  + Number(b) ) > Number(c) 
      && (Number(a) + Number(c) + Number(d)) > Number(b)):
      resultText = "Сумма трех сторон трапеции не должна быть больше четвертой"
      return resultText;
      default:
      break;
   }
}