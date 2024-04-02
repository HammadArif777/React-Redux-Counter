import { useDispatch } from "react-redux";
import { incrementCreator } from "../store/actions";
import InnerChild from "./InnerChild";
function Increment() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-5 mx-auto p-5 bg-yellow-500 rounded shadow-lg text-white text-xl font-semibold">
        <button
          onClick={() => dispatch(incrementCreator())}
          className="bg-green-600 p-2 rounded"
        >
          Increment
        </button>
        <InnerChild/>
      </div>
    </>
  );
}

export default Increment;
