import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { updateCharacter } from "../../store/actions/charactersAction";

import { Form, Input, Button, Row, Col } from "antd";
import Character from "../../model/Character";
import styles from "./styles";
const { TextArea } = Input;

const EditCharacter = props => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const { id, name, description, thumbnail, isFavorite, onClickCancel } = props;
  const [charName, setCharName] = useState(name);
  const [charDescription, setCharDescription] = useState(description);

  const dispatch = useDispatch();

  const onChangeName = e => {
    setCharName(e.target.value);
  };

  const onChangeDescription = e => {
    setCharDescription(e.target.value);
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = () => {
    dispatch(
      updateCharacter(
        new Character(
          id,
          charName,
          charDescription,
          thumbnail,
          isFavorite,
          true
        )
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>Edit Character</h1>

      <Row justify="center" align="middle">
        <Col span={18}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ name: charName }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required", whitespace: true, min: 3 }]}
            >
              <Input
                name="name"
                autoComplete="off"
                value={charName}
                onChange={onChangeName}
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                name="description"
                onChange={onChangeDescription}
                rows={5}
                value={charDescription}
                rules={[{ required: true, message: "Name is required" }]}
              />
              <pre style={{ display: "none" }}>{charDescription}</pre>
            </Form.Item>

            <Row justify="end">
              <Form.Item>
                <Button htmlType="submit" onClick={onClickCancel}>
                  Close
                </Button>
              </Form.Item>

              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button
                    ghost
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: 8 }}
                    disabled={
                      form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Save
                  </Button>
                )}
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

EditCharacter.propTypes = {
  onClickCancel: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string
};

export default EditCharacter;
