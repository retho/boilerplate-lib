import React, {FC} from 'react';

import styles from './styles.css';

export type ExampleComponentProps = {text: string};
const ExampleComponent: FC<ExampleComponentProps> = props => {
  return <div className={styles.test}>Example Component: {props.text}</div>;
};

export default ExampleComponent;
