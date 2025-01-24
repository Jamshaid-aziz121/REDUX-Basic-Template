import React from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../store/index";

export default function Bank() {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h2>Deposit / withdraw Money</h2>
      <button
        className="btn btn-primary mx-4"
        onClick={() => dispatch(actionCreator.depositMoney(100))}
      >
        +
      </button>
      <bold> Updated balance: </bold>
      <button
        className="btn btn-primary mx-4"
        onClick={() => dispatch(actionCreator.withdrawMoney(100))}
      >
        -
      </button>
    </div>
  );
}
