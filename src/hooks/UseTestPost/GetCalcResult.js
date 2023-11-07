import axios from "axios";

export async function calc(values, fetchPath) {
  
   const {a, b, c, d} = values;
      
   if(Number(a) < 0 || Number(b) < 0 || Number(c) < 0 || Number(d) < 0) return;
   if(a === '0' || b === '0' || c === '0' || d === '0') return; 

  const result = await axios.get(`http://localhost:8080/${fetchPath}`, {
      params: { a, b, c, d }
   }).then(responce => {
      if(responce.data.length) return responce.data.map((i) => Number(i).toFixed(2));
      if(Number(responce.data) === 0) return "Результат не может быть = 0";
    return Number(responce.data).toFixed(2);
   }).catch(error => {
      console.log(error);
   });
   return result;
}

   