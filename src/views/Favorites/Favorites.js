import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchStorageCharacters } from "../../store/actions/charactersAction";
import Characters from "../../containers/Characters/Characters";
import styles from "./styles";

const Favorites = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchStorageCharacters());
  }, [dispatch]);

  const charactersFavorites = useSelector(
    state => state.characters.charactersFavorites
  );
  const characters = useSelector(state => state.characters.characters);

  useEffect(() => {
    if (characters.length === 0) {
      return history.push("/");
    }
  }, [characters, history]);

  let content = <p style={styles.placeholder}>Got no favorites yet!</p>;
  if (charactersFavorites.length > 0) {
    content = <Characters hasLink={true} data={charactersFavorites} />;
  }
  return <div style={styles.content}>{content}</div>;
};

export default Favorites;
