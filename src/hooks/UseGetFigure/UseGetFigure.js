import axios from "axios";

export const UseGetFigure = async () => {
   try {
      const responce = await axios.get('http://localhost:4000/FigureList');
      return responce.data;
   } catch(e) {
      console.log(e)
   }
}


