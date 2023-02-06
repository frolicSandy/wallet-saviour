import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
  },[getTransactions]);
  const history = transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />));
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {history}
      </ul>
    </>
  )
}
