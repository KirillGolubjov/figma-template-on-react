import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
// import { useGlobalContext } from '../context';
import portImgBig from '../assets/images/portfolio-big.jpg';
import { toggleModal } from '../features/modal/modalSlice';

const Modal = () => {
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  // const { isModalOpen, toggleModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <img src={portImgBig} alt='' />
        <button
          className='close-modal-btn'
          onClick={() => dispatch(toggleModal())}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
