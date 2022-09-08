import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from 'react-router-dom';
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const match = useMatch('/transactionsList');

    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {
        let latestTransactions = [...transactions].sort((a,b) => a.id > b.id?-1:1);
        
        if(!match){
            latestTransactions.length = 5;
        }
        
        content = latestTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
            <div>
                {!match && <button onClick={() => navigate("/transactionsList")}>View More</button>}
            </div>
        </>
    );
}
