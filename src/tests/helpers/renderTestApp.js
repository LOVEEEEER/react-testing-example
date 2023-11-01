import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppRouter from "../../AppRouter";
import {createReduxStore} from "../../store/store";

export const renderTestApp = (component, options) => {
    const store = createReduxStore(options.initialState)

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
  )
}