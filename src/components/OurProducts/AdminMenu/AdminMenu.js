import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/products/operations";
import { useState } from 'react';
import svgIcons from '../../../images/icons.svg';
import Modal from 'react-modal';
import css from './AdminMenu.module.css';

export const AdminMenu = (id) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(id));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove('modal-open');
    };

    const customStyles = {
        overlay: { 
            backgroundColor: 'rgba(9, 9, 9, 0.75)',
            position: 'fixed',
        },
        content: {
          top: '60px',
          left: 'auto',
          right: '-135px',
          bottom: 'auto',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '90%',
          padding: '24px',
          borderRadius: '12px',
          border: '2px solid black',
          backgroundColor: 'FFF',
          transition: 'top 0.3s ease-in-out',
          position: 'absolute',
        },
      };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
            <button className={css.menuButton} onClick={openModal}>Edit</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <button className={css.modalCloseButton} type="button" onClick={closeModal}>
                    <svg className={css.menuIcon}>
                        <use href={`${svgIcons}#icon-close-circle`}></use>
                    </svg>
                </button>
            </Modal>
        </div>
    )
}