export const HelperFigurePath = (currentFigure) => {
   let path = '';
   switch(currentFigure?.title) {
      case 'Квадрат':
      path = '/square';
      return path;
      case 'Треугольник':
      path = '/triangle';
      return path;
      case 'Прямоугольный треугольник':
      path = '/rec-triangle';
      return path;
      case 'Круг':
      path = '/circle';
      return path;
      case 'Прямоугольник':
      path = '/rectangle';
      return path;
      case 'Ромб':
      path = '/rhombus';
      return path;
      case 'Параллелограмм':
      path = '/parallelogram';
      return path;
      case 'Трапеция':
      path = '/trapezoid';
      return path;
      case 'Тест':
      path = '/test';
      return path
      default: 
      console.log('test')
   }
}