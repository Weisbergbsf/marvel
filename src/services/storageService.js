const CHARACTERS = "characters";
export const UPDATE = "update";
export const FAVORITE = "favorite";

export const loadStorageCharacters = () => {
  createStorageDataIfNotExists();
  let charactersStorage = JSON.parse(localStorage.getItem(CHARACTERS));
  return charactersStorage.filter(obj => obj.isFavorite === true);
};

export const storageToFavorites = (value, action) => {
  createStorageDataIfNotExists();
  let charactersStorage = JSON.parse(localStorage.getItem(CHARACTERS));
  let characters = [...charactersStorage];
  const index = characters.findIndex(ch => ch.id === value.id);

  //Quando existe o objeto no localStorage
  if (index >= 0) {
    characters.map(obj => {
      if (value.id === obj.id) {
        //Atualizar o objeto porque o nome/descrição do personagem foi alterado
        //Então, apenas atualiza a variável isFavorite
        if (obj.isUpdate === true) {
          obj.name = value.name;
          obj.description = value.description;
          obj.isFavorite = value.isFavorite;
        }
        if (obj.isUpdate === false && action === UPDATE) {
          obj.name = value.name;
          obj.description = value.description;
          obj.isUpdate = true;
        }
        if (obj.isUpdate === false && action === FAVORITE) {
          //Se não houve atualização do objeto(personagem), então remove
          characters.splice(index, 1);
        }
      }
      return obj;
    });
  } else {
    characters.push(value);
  }
  localStorage.setItem(CHARACTERS, JSON.stringify(characters));
};

const createStorageDataIfNotExists = () => {
  const hasStorage = localStorage.getItem(CHARACTERS);
  if (!hasStorage) {
    localStorage.setItem(CHARACTERS, JSON.stringify([]));
  }
};
