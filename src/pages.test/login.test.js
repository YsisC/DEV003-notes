import { render, screen, fireEvent, } from '@testing-library/react';
import "@testing-library/jest-dom";
import Login from "../pages/login";
import Home from '../pages';
import { useRouter } from 'next/router'
// import proxyquire from 'proxyquire';
import { db } from '../firebase.config';
import { TestEnvironment } from 'jest-environment-jsdom';

// mock useRouter
jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

// setup a new mocking function for push method
const pushMock = jest.fn()
// more tests
test('It calls router.push home', async () => {
    // const user = userEvent.setup()
    // mock a return value on useRouter
    useRouter.mockReturnValue({
        query: { Home: '/' },
        // return mock for push method
        push: pushMock,
    })
    render(<Login />);
    // ... add the props or methods you 
    // await user.click(radioDesc)
    expect(pushMock).toHaveBeenCalledWith(expect.objectContaining({
        query: { Home: '/' }
    }))
})

// expect(pushMock).toHaveBeenCalled()
// // The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// // The mock has been moved to `__mocks__` folder to avoid duplication


// const LoginBody = proxyquire('./login.js', {
//     firebase: mocksdk
//   })

//   jest.mock('../firebase.config', () => {
//     const firebasemock = require('firebase-mock')
//     const mockauth = new firebasemock.MockAuthentication()
//     const mockfirestore = new firebasemock.MockFirestore()
//     const mocksdk = new firebasemock.MockFirebaseSdk(null, () => mockauth, () => mockfirestore)
//     const firebase = mocksdk.app
//     const firestore = firebase.db
//     const firebaseAuth = firebase.auth
//     return firebase, {firebaseAuth, firestore}
//   })

// describe('Home', () => {
//     it('renders a heading', () => {
//       render(<Login />);

//       const title = screen.getByRole('title', {
//         name: "Login",
//       });

//       expect(title).toBeInTheDocument();
//     });
//   });

function setupRender() {
    render(<Login />);

    const buttonSigIn = screen.getByRole('name', { login: /login/i })

    return {
        buttonSigIn
    }
};


test('It renders with an empty query', () => {
    useRouter.mockReturnValue({
        query: {},
        push: () => { }
    })
    const { buttonSigIn } = setupRender()

    expect(buttonSigIn ).toBeInTheDocument()
    expect(buttonSigIn ).toBeChecked()
    expect(buttonSigIn ).toBeInTheDocument()
});
// describe('Blog page', () => {
//   describe('Render method', () => {
//     it('should display the last 10 posts', () => {
//       render(<Login />);

//       const link = screen.getAllByRole('link', {
//         name: /Blog -/,
//       });

//       expect(link).toHaveLength(1);
//     });
//   });
// });