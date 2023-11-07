export const HandlerTypeTriangle = (number) => {
   let result = '';
   switch(Number(number)) {
      case 1: 
      result = "Треугольника не существует";
      return result;
      case 2: 
      result = "Равносторонний";
      return result;
      case 3: 
      result = "Равнобедренный, прямоугольный";
      return result;
      case 4: 
      result = "Равнобедренный, остроугольный";
      return result;
      case 5: 
      result = "Равнобедренный, тупоугольный";
      return result;
      case 6: 
      result = "Равнобедренный";
      return result;
      case 7: 
      result = "Прямоугольный, разносторонний";
      return result;
      case 8: 
      result = "Тупоугольный, разносторонний";
      return result;
      case 9: 
      result = "Остроугольный, разносторонний";
      return result;
      case 10: 
      result = "Разносторониий";
      return result;
      default:
      break
   }
}