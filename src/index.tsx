import React, {FC} from 'react';
import './styles.scss';

export type ExampleComponentProps = {text: string};
const ExampleComponent: FC<ExampleComponentProps> = props => {
  return <div className="test">Example Component: {props.text}</div>;
};

export default ExampleComponent;
