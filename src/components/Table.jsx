import React, { useEffect, useState } from "react";

function Table() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await response.json();

        // Transform data to match our transaction table structure
        const transformedData = data.users.slice(0, 200).map((user, index) => ({
          dateTime: `20:${10 + index} - 30 June 2022`,
          type: index % 2 === 0 ? "DEBIT" : "CREDIT",
          fromTo: index % 2 === 0 ? `31000100${index + 1}` : `100${index + 1}`,
          description: index % 2 === 0 ? "Fore Coffe" : "Topup From Bank Transfer",
          amount:
            index % 2 === 0
              ? `- ${75_000 * (index + 1)},00`
              : `+ ${1_000_000 * (index + 1)},00`,
          amountColor: index % 2 === 0 ? "text-red-500" : "text-green-500",
        }));

        setTransactions(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) {
    return <p className="text-center">Loading transactions...</p>;
  }

  return (
    <div className="px-16">
      <table className="mt-4 w-full text-black text-left border-collapse border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2">Date & Time</th>
            <th className="border border-gray-200 px-4 py-2">Type</th>
            <th className="border border-gray-200 px-4 py-2">From / To</th>
            <th className="border border-gray-200 px-4 py-2">Description</th>
            <th className="border border-gray-200 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-200 px-4 py-2">
                {transaction.dateTime}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {transaction.type}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {transaction.fromTo}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {transaction.description}
              </td>
              <td
                className={`border border-gray-200 px-4 py-2 font-bold ${transaction.amountColor}`}
              >
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
