import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import {
	decrement,
	increment,
	incrementByValue,
} from "./redux/features/counter/counterSlice";

function App() {
	const count = useSelector((state: RootState) => state.counter.count);

	const dispatch = useDispatch();

	return (
		<div className="flex justify-center items-center h-screen">
			<div>
				<p>{count}</p>
				<button
					onClick={() => dispatch(increment())}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Increment
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Decrement
				</button>
				<button
					onClick={() => dispatch(incrementByValue(5))}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Increment by value
				</button>
			</div>
		</div>
	);
}

export default App;
