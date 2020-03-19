import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Card } from "antd";
import { HeartOutlined, HeartFilled, EditOutlined } from "@ant-design/icons";
import styles from "./styles";

const { Meta } = Card;

const CustomCard = props => {
  const {
    id,
    name,
    description,
    imageUrl,
    isFavorite,
    showIsFavorite,
    hasLink,
    onClickFavorite,
    onClickEdit
  } = props;

  const image = <img style={styles.image} alt={name} src={imageUrl} />;

  return (
    <Card
      style={{ height: "100%" }}
      hoverable
      cover={hasLink ? <Link to={`/details/${id}`}>{image}</Link> : image}
    >
      <Row style={styles.containerIcons}>
        {showIsFavorite &&
          (isFavorite ? (
            <HeartFilled style={styles.heartFilled} onClick={onClickFavorite} />
          ) : (
            <HeartOutlined
              style={styles.heartOutlined}
              onClick={onClickFavorite}
            />
          ))}

        {onClickEdit && (
          <EditOutlined style={styles.editOutlined} onClick={onClickEdit} />
        )}
      </Row>
      <Meta
        style={styles.characterName}
        title={name}
        description={description}
      />
    </Card>
  );
};

CustomCard.defaultProps = {
  isFavorite: false,
  showIsFavorite: true,
  hasLink: false
};

CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  onClickFavorite: PropTypes.func,
  isFavorite: PropTypes.bool,
  showIsFavorite: PropTypes.bool,
  hasLink: PropTypes.bool
};

export default CustomCard;
