import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import {screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('USERS TEST', () => {
    test('test about link', () => {
        renderWithRouter(<Navbar/>)
        const aboutLink = screen.getByTestId('about-link')
        act(() => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId("about-page")).toBeInTheDocument()
    })
    test('test main link', () => {
        renderWithRouter(<Navbar/>)
        const mainLink = screen.getByTestId('main-link')
        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId("main-page")).toBeInTheDocument()
    })
    test('test users link', () => {
        renderWithRouter(<Navbar/>)
        const usersLink = screen.getByTestId('users-link')
        act(() => {
            userEvent.click(usersLink)
        })
        expect(screen.getByTestId("users-page")).toBeInTheDocument()
    })
})