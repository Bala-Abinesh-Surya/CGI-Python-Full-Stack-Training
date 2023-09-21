import { Provider } from "react-redux";

// component
import Books from "./Books";

// store
import store from "./store";

export default function StoreBooks(){
    return (
        <Provider store={store}>
            <Books />
        </Provider>
    )
}