/**
 * Created by djavrell on 17/04/2017.
 */

function fill(content, collections) {

  for (let item of content) {
    let model = collections[item.model.toLowerCase()];

    model
      .create(item.data)
      .then((elem) => console.log(`adding ${elem.length} elements to ${item.model.toLowerCase()} table`))
      .catch((err) => console.log(err));
  }
}

module.exports = fill;