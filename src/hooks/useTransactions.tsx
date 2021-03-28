import { createContext, ReactNode, useEffect, useState, useContext } from 'react'
import { api } from '../services/api';

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
  createNewTransaction: (transaction: newTransactionProps) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextDataProps>(
  {} as TransactionContextDataProps
);

export function TransactionContextProvider({ children }: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createNewTransaction(transactionInput: newTransactionProps) {
    const response = await api.post("/transactions", { ...transactionInput, createdAt: new Date() });
    const {transaction } = response.data
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context
}