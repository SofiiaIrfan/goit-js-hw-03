const countProps = function(obj) {
    // const values = Object.values(obj);
    // let totalValues = 0;
  
    // // eslint-disable-next-line no-restricted-syntax
    // for (const value of values) {
    //   totalValues += 1;
    // }
    // return totalValues;
    return Object.values(obj).length;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3