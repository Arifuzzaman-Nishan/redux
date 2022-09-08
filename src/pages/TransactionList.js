import React from 'react'
import { useSelector } from 'react-redux'
import Balance from '../components/Balance'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Transactions from '../components/Transactions/Transactions'

export default function TransactionList() {
    const { editing } = useSelector((state) => state.transaction) || {};
  return (
    <Layout>
        {editing?.id && <Balance />}
        {editing?.id && <Form/>}
        <Transactions />
    </Layout>
  )
}
