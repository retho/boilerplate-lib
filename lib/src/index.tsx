import React, {FC, useState} from 'react';
import './styles.scss';

export type ExampleComponentProps = {
  text: string;
};
const ExampleComponent: FC<ExampleComponentProps> = props => {
  const [data1, setData1] = useState<null | number[]>(null);
  const [data2, setData2] = useState<null | number[]>(null);

  const handleLoad1 = () => import('./data/data1').then(m => m.default).then(dt => setData1(dt));
  const handleLoad2 = () => import('./data/data2').then(m => m.default).then(dt => setData2(dt));

  return (
    <div>
      <div className="test">Example Component: {props.text}</div>
      <div>
        dinamic import 1:&nbsp;
        {data1 ? JSON.stringify(data1) : <button onClick={handleLoad1}>load data</button>}
      </div>
      <br />
      <div>
        dinamic import 2:&nbsp;
        {data2 ? JSON.stringify(data2) : <button onClick={handleLoad2}>load data</button>}
      </div>
    </div>
  );
};

export default ExampleComponent;
