import { render, screen, fireEvent } from '@testing-library/react';
import axios from "axios"
import Users from "./Users";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import React from "react";
import {act} from "react-dom/test-utils";
import AppRouter from "../AppRouter";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios')

console.log('')

describe('USERS TEST', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response)
        render(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })
    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        renderWithRouter(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        act(() => {
            userEvent.click(users[0])
        })
        expect(screen.getByTestId('user-page'))
    })
})
