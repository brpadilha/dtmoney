import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContextProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionContextProvider>
      <GlobalStyle />
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionContextProvider>
  );
}

