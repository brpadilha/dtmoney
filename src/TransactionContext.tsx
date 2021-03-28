import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

type TransactionProps = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
};

type newTransactionProps = Omit<TransactionProps | 'id', 'createdAt'>

type TransactionContextProviderProps = {
  children: ReactNode;
}

type TransactionContextDataProps = {
  transactions: TransactionProps[]
  createNewTransaction: (transaction: newTransactionProps) => void;
}

export const TransactionContext = createContext<TransactionContextDataProps>(
  {} as TransactionContextDataProps
);

export function TransactionContextProvider({ children }: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createNewTransaction(transaction: newTransactionProps) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}