import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';
import classNames from 'classnames';

function Lists(props) {
  return (
    <React.Fragment>
      <ul>
        {props.todos.map((todo, i) => {
          return (
            <li key={`${todo.text}-${i}`}>
              <span
                className="w__text"
                onClick={() => {
                  const todos = props.todos.map((todo, index) => {
                    if (i === index) {
                      return {
                        done: !todo.done,
                        text: todo.text,
                      };
                    }
                    return todo;
                  });
                  props.updateTodos(todos);
                }}>
                <Checkbox checked={todo.done} />
                <span
                  className={classNames({
                    text: true,
                    done: todo.done,
                  })}>
                  {todo.text}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Lists;
