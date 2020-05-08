/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
// Данный компонент реализован на классе для тренировки
import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
