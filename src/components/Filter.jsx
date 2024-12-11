import { useState } from "react";
import Search from "../assets/KacaPembesar.png";

function Filter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionFilter, setTransactionFilter] = useState(
    "Last 10 transactions"
  );
  const [sortBy, setSortBy] = useState("Date");
  const [sortOrder, setSortOrder] = useState("Descending");

  return (
    <div className="mt-2 mr-14 ml-14 justify-between flex text-gray-400 items-center border-gray-300 gap-4 p-4 bg-white rounded-lg">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 bg-white text-black rounded-lg py-2 px-4 pl-10 w-64"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <img src={Search} alt="search" />
        </span>
      </div>

      <div className="flex items-center">
        <label className="mr-2">Show</label>
        <select
          value={transactionFilter}
          onChange={(e) => setTransactionFilter(e.target.value)}
          className="border border-gray-300 bg-white text-gray-600 rounded-lg py-2 px-4"
        >
          <option>Last 10 transactions</option>
          <option>Last 20 transactions</option>
          <option>All transactions</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label>Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border bg-white border-gray-300 rounded-lg py-2 px-4"
        >
          <option>Date</option>
          <option>Amount</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border bg-white border-gray-300 rounded-lg py-2 px-4"
        >
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
