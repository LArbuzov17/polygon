/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
// Данный компонент реализован на классе для тренировки

import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert('Необходимо указать название поста');
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);

    return this.setState({ title: '' });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({ ...prev, ...{ [event.target.name]: event.target.value } }));
  };

  render() {
    const { title } = this.state;

    const style = {
      marginCol: {
        marginRight: '20px',
      },
    };

    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert message={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <div className="row">
            <input
              type="text"
              style={style.marginCol}
              className="form-control col col-8"
              id="title"
              name="title"
              value={title}
              onChange={this.changeInputHandler}
            />
            <button className="btn btn-success col col-3" type="submit">
              Создать
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
