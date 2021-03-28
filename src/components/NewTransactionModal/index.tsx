import React, { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { ReactComponent as CloseImg } from '../../assets/close.svg'
import { ReactComponent as IncomeImg } from '../../assets/income.svg'
import { ReactComponent as OutcomeImg } from "../../assets/outcome.svg";
import { TransactionContext } from '../../TransactionContext';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [value, setValue] = useState(0)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const {createNewTransaction} = useContext(TransactionContext)

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      type,value,title,category,
    }

    createNewTransaction(data)
    
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <CloseImg className="react-modal-close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>
        <input placeholder="Title" value={ title } onChange={(event)=>setTitle(event.target.value)} />
        <input type="number" placeholder="Value" value={ value} onChange={(event) => setValue(Number(event.target.value))} />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <IncomeImg />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <OutcomeImg />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Category" value={category} onChange={ event => setCategory(event.target.value)}/>
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
