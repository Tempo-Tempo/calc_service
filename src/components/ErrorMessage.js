export const ErrorMessage = (value, start) => {
   if(value === '' && start) {
      return 1;
   }  
   if(Number(value) <= 0 && start) {
      return 2;
   }
};

