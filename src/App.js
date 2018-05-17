import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './Title';
import InputArea from './InputArea';
import Lists from './Lists';

// // TODO: redux, immutable, jest

class App extends Component {
  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: '',
    };
    this.updateTodos = this.updateTodos.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  updateTodos(newTodos) {
    this.setState({
      todos: newTodos,
    });
  }

  updateInputText(value) {
    this.setState({
      inputText: value,
    });
  }

  render() {
    return (
      <div className="a__todos">
        <div className="b__title">
          <Title />
        </div>
        <div className="b__add-input">
          <InputArea
            inputText={this.state.inputText}
            todos={this.state.todos}
            updateInputText={this.updateInputText}
            updateTodos={this.updateTodos}
          />
        </div>
        <div className="b__lists">
          <Lists todos={this.state.todos} updateTodos={this.updateTodos} />
        </div>
      </div>
    );
  }
}

export default App;
