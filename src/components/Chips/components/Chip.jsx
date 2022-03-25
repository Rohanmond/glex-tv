import './Chip.css';
const Chip = ({ element }) => {
  const { categoryName } = element;
  return (
    <div className='chip'>
      <p className='font-wt-semibold'>{categoryName}</p>
    </div>
  );
};
export default Chip;
