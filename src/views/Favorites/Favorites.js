import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchStorageCharacters } from "../../store/actions/charactersAction";
import Characters from "../../containers/Characters/Characters";
import styles from "./styles";

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStorageCharacters());
  }, [dispatch]);

  const characters = useSelector(state => state.characters.charactersFavorites);

  let content = <p style={styles.placeholder}>Got no favorites yet!</p>;
  if (characters.length > 0) {
    content = <Characters hasLink={true} data={characters} />;
  }
  return <div style={styles.content}>{content}</div>;
};

export default Favorites;
