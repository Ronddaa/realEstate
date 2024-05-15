import './Modals.css'
import Modal from 'react-modal';
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