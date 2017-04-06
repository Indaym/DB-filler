/**
 * Created by djavrell on 06/04/2017.
 */

function storesModels(models) {
  return function getModels(lists) {
    let arr = {};

    if (Array.isArray(lists)) {
        for (let k in models) {
          if (models.hasOwnProperty(k) && lists.indexOf(k) != -1)
            arr[k] = models[k];
        }
      return arr;  
    }

    if (typeof lists !== 'string')
      return arr;

    if (models.hasOwnProperty(lists)) {
      arr[lists] = models[lists];
      return arr;
    }
  }; 
}


module.exports = {
  storesModels,
};