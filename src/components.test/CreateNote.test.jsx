import { fireEvent, screen, render } from '@testing-library/react'
import { CreateNote } from '../components'
import { useAuth } from '../context/AuthUserContext';

// jest.mock('../context/AuthUserContext');


describe('Pruebas en <CreateNote />', () => {

    test('debe de cambiar el valor de la nota ', () => {

        render(<CreateNote />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Compras' } })
        expect(input.value).toBe('Compras');
    })


    // test('debe de guardar el valor de la nota y quedar reseteado el input ', () => {

    //     const Mock_idNote = {
    //         id: "wUifLoxXEfZaeai62P4i",
    //         title: inputValue
    //     }
    //     // useAuth.Mock_idNote

    //     const inputValue = 'Compras';

    //     // useAuth.mockClear();
    //     useAuth.mockReturnValue({
    //         addANewPost: async () => { id }
    //     })

    //     render(<CreateNote />)
    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form');

    //     fireEvent.input(input, { target: { value: inputValue } });
    //     // fireEvent.input(input, { target: { value: inputValue } });
    //     fireEvent.submit(form)
    //     screen.debug()

    //     expect(input.value).toBe('');
    //     // expect( ).toHaveBeenCalledTimes(1);
    //     expect(useAuth).toHaveBeenCalledTimes(1);

    // })



})