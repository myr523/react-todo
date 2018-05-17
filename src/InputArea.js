import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';

function InputArea(props) {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="todoを入力"
        className="add-input"
        Value={props.inputText}
        onChange={event => {
          const value = event.target.value;
          props.updateInputText(value);
        }}
        action={{
          color: 'pink',
          content: '追加',
          onClick: () => {
            const todo = {
              done: false,
              text: props.inputText,
            };
            const todos = [...props.todos, todo];
            props.updateTodos(todos);
            props.updateInputText('');
          },
        }}
        size="large"
      />
      <Button size="small" className="delete-all" color="green">
        完了を一括で削除
      </Button>
    </React.Fragment>
  );
}

export default InputArea;
