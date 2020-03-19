import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/actions/charactersAction";
import { List } from "antd";
import CustomCard from "../../components/Card/CustomCard";

const Characters = props => {
  const dispatch = useDispatch();
  const { showIsFavorite } = props;
  const { data, hasLink } = props;
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <CustomCard
            id={item.id}
            name={item.name}
            hasLink={hasLink}
            imageUrl={item.thumbnail}
            isFavorite={item.isFavorite}
            showIsFavorite={showIsFavorite}
            onClickFavorite={() => dispatch(toggleFavorite(item.id, item))}
          />
        </List.Item>
      )}
    />
  );
};

Characters.defaultProps = {
  hasLink: false
};

Characters.propTypes = {
  data: PropTypes.array.isRequired,
  hasLink: PropTypes.bool
};

export default Characters;
