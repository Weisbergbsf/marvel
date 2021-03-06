import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  fetchCharactersSeries,
  fetchCharacterById,
} from "../../store/actions/charactersAction";
import { useParams, useHistory } from "react-router-dom";
import CustomCard from "../../components/Card/CustomCard";
import { Row, Col, Pagination } from "antd";
import Characters from "../../containers/Characters/Characters";
import Backdrop from "../../components/Backdrop/Backdrop";
import EditCharacter from "../EditCharacter/EditCharacter";

import styles from "./styles";

const CharacterDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [serieList, setSerieList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCharacterById(id));
    dispatch(fetchCharactersSeries(id, limit, offset));
  }, [dispatch, id, limit, offset]);
  const { characters, character, series, loadingSeries } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    if (characters.length === 0) {
      return history.push("/");
    }
    if (series.results) {
      setSerieList(series.results);
    }
  }, [characters.length, characters.results, history, series.results]);

  const onChangePage = (value) => {
    setCurrentPage(value);
    setOffset(limit * (value - 1));
  };
  let contentCard = null;
  let contentSeries = null;
  if (character) {
    contentCard = (
      <CustomCard
        name={character.name}
        description={character.description}
        imageUrl={character.thumbnail}
        isFavorite={character.isFavorite}
        onClickFavorite={() =>
          dispatch(toggleFavorite(character.id, character))
        }
        onClickEdit={() => setShowForm(!showForm)}
      />
    );
  }
  if (serieList.length > 0) {
    contentSeries = (
      <div>
        <h1 style={styles.text}>SERIES</h1>
        <Characters data={series.results || []} showIsFavorite={false} />
        <Row justify="center">
          <Pagination
            pageSize={limit}
            showTotal={(total) => (
              <span style={styles.text}>Total {total}</span>
            )}
            total={series.total}
            current={currentPage}
            onChange={onChangePage}
          />
        </Row>
      </div>
    );
  } else {
    contentSeries = <h1 style={styles.text}>No Series</h1>;
  }

  return (
    <div>
      <Backdrop show={loadingSeries} />
      <Row style={styles.container}>
        <Col span={8}>
          <div style={styles.containerCard}>{contentCard}</div>
        </Col>
        <Col style={styles.containeSeries} span={16}>
          {showForm ? (
            <EditCharacter
              id={character.id}
              name={character.name}
              description={character.description}
              thumbnail={character.thumbnail}
              isFavorite={character.isFavorite}
              onClickCancel={() => setShowForm(false)}
            />
          ) : (
            contentSeries
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CharacterDetails;
