import React from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from "./styles";
import { ReactComponent as CloseImg } from '../../assets/close.svg'
import { ReactComponent as IncomeImg } from '../../assets/income.svg'
import { ReactComponent as OutcomeImg } from "../../assets/outcome.svg";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <CloseImg className="react-modal-close"/>
      </button>
        <Container>
          <h2>Register transaction</h2>
          <input placeholder="Title" />
          <input type="number" placeholder="Value" />
          <TransactionTypeContainer>
            <button type="button">
              <IncomeImg />
              <span>Income</span>
            </button>
            <button>
              <OutcomeImg />
              <span>Outcome</span>
            </button>
          </TransactionTypeContainer>
          <input placeholder="Category" />
          <button type="submit">Register</button>
      </Container>
      
      </Modal>
  );
}
