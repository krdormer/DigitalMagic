import woodBg from '../../assets/wood-texture.svg';

const tableStyles = {
  position: 'absolute',
  top: '10%',
  right: '10%',
  bottom: '5%',
  left: '10%',
  backgroundColor: 'green',
  backgroundImage: `url(${woodBg})`,
  border: '22px solid #3b280c',
  borderRadius: '10px',
  zIndex: '0',
};

const CardTable = ({ children }) => (
  <div style={tableStyles} className="card-table">
    {children}
  </div>
);

export default CardTable;
