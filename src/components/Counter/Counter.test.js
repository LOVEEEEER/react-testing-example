import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe("Counter test", () => {
  test("Test router", async () => {
    const { getByTestId } = renderTestApp(null, {
        route: "/",
        initialState: {
            counter: {value: 10}
        }
    })
    const incrementButton = getByTestId("increment-button");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    act(() => {
      userEvent.click(incrementButton)
    })
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
