import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import portImgBig from '../assets/images/portfolio-big.jpg';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <img src={portImgBig} alt='' />
        <button className='close-modal-btn' onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
