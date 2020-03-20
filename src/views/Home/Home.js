import React, { useState, useEffect, useCallback } from "react";
import {
  AutoComplete,
  Input,
  Divider,
  Row,
  Col,
  Select,
  Typography,
  Pagination
} from "antd";
import { SyncOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  fetchCharactersByName
} from "../../store/actions/charactersAction";

import Backdrop from "../../components/Backdrop/Backdrop";
import Characters from "../../containers/Characters/Characters";

const { Option } = Select;
const { Text } = Typography;

const Home = props => {
  const [orderBy, setOrderBy] = useState("name");
  const [offset, setOffset] = useState(0);
  const [limit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameToSearch, setNameToSearch] = useState();
  const [nameCharacter, setNameCharacter] = useState();
  const [optionsCharacters, setOptionsCharacters] = useState([]);
  const [optionsValue, setOptionsValue] = useState("");

  const dispatch = useDispatch();

  const loadCharacters = useCallback(() => {
    dispatch(fetchCharacters(null, nameCharacter, orderBy, limit, offset));
  }, [dispatch, nameCharacter, orderBy, limit, offset]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  useEffect(() => {
    if (nameToSearch) {
      dispatch(fetchCharactersByName(nameToSearch));
    }
  }, [dispatch, nameToSearch]);

  const { characters } = useSelector(state => state);
  useEffect(() => {
    if (characters.charactersForSelect.length > 0) {
      setOptionsCharacters(characters.charactersForSelect);
    }
  }, [characters.charactersForSelect]);

  const handleOrderBy = value => {
    setOrderBy(value);
  };

  const onChangePage = value => {
    setCurrentPage(value);
    setOffset(limit * (value - 1));
  };

  let pagination = null;
  if (characters.characters) {
    pagination = (
      <Pagination
        pageSize={limit}
        total={characters.characters.total}
        current={currentPage}
        onChange={onChangePage}
      />
    );
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Backdrop show={characters.loading} />
      <AutoComplete
        options={optionsCharacters}
        value={optionsValue}
        style={{
          width: "40%"
        }}
        onChange={value => {
          if (!value) {
            setNameToSearch();
            setNameCharacter();
          }
        }}
        onSearch={value => {
          setOptionsValue(value);
          const timer = setTimeout(() => {
            if (value.length >= 2) {
              setNameToSearch(value);
            }
          }, 1000);
          return () => clearTimeout(timer);
        }}
        onSelect={(value, option) => {
          setOptionsValue(option.label);
          setNameCharacter(option.label);
          setOffset(0);
        }}
      >
        <Input.Search
          size="middle"
          allowClear
          loading={characters.loadingForSelect}
          placeholder="Search..."
        />
      </AutoComplete>
      <Divider />
      <Row justify="space-between" align="bottom">
        <Col span={8} style={{ textAlign: "left" }}>
          <Text type="secondary" strong>
            {characters.characters ? (
              characters.characters.total
            ) : (
              <SyncOutlined />
            )}{" "}
            RESULTS
          </Text>
        </Col>
        <Col span={8} style={{ textAlign: "right" }}>
          <Text type="secondary" strong style={{ marginRight: 10 }}>
            SORT BY
          </Text>
          <Select defaultValue={orderBy} onChange={handleOrderBy}>
            <Option value="name">A-Z</Option>
            <Option value="-name">Z-A</Option>
          </Select>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        {characters.characters && (
          <Characters
            hasLink={true}
            data={characters.characters.results || []}
          />
        )}
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        {pagination}
      </Row>
    </div>
  );
};

export default Home;
