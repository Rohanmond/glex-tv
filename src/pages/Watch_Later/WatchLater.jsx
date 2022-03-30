import { useData } from '../../contexts';
import './WatchLater.css';
export const WatchLater = () => {
  const { state } = useData();
  console.log(state);
  return <div>Watch Later</div>;
};
