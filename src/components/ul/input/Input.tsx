import { FC } from 'react';
import scss from './Input.module.scss';

const Input: FC<{
  type: string;
  value: string;
  setData: (value: string) => void;
}> = ({type, value, setData}) => {
  return <input className={scss.inputs} type={type} value={value} onChange={(e) => setData(e.target.value)} />
}

export default Input