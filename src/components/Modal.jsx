import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import portImgBig from '../assets/images/portfolio-big.jpg';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <img src={portImgBig} alt='' />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
