import './Modals.css'
import Modal from 'react-modal';
import sprite from '../assets/icons.svg'


export const ModalJoinUs = ({ isOpen, onClose, children }) => {
    console.log('sadad');

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={'modalWindowJoinUs'}
            className={'modalContentJoinUs'}
            closeTimeoutMS={300}
            onRequestClose={() => onClose()}
            ariaHideApp={false}
        >
            {children}
        <button className='mainContactBtn mainContactBtnModalJoinUs' onClick={onClose}>request callback</button>
        </Modal>
    )
}

export const ModalSubmitAnInquiry = ({ isOpen, onClose, children }) => {
    console.log('qweq');

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={'modalWindowSubmitAnInquiry'}
            className={'modalContentSubmitAnInquiry'}
            closeTimeoutMS={300}
            onRequestClose={() => onClose()}
            ariaHideApp={false}
        >
            {children}
        </Modal>
    )
}

export const BurgerMenuSlide = ({ isOpen, onClose, children }) => {
    console.log('burger');

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={'modalBurgerMenuSlide'}
            className={'modalContentBurgerMenuSlide'}
            closeTimeoutMS={400}
            onRequestClose={() => onClose()}
            ariaHideApp={false}
        >
            <svg className="closeBurgerMenuBtn" width={32} height={32} onClick={onClose}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
            {children}
        </Modal>
    )
}