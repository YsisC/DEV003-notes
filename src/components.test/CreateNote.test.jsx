import { fireEvent, screen, render, renderHook, waitFor } from '@testing-library/react'
import { CreateNote } from '../components'
import { useAuth } from '../context/AuthUserContext';


jest.mock('../context/AuthUserContext');
import * as note from './_mock_/addNewPost';

describe('Pruebas en <CreateNote />', () => {

    test('debe de cambiar el valor de la nota ', () => {

        render(<CreateNote />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Compras' } })
        expect(input.value).toBe('Compras');
    })


    test('debe de guardar el valor de la nota y quedar reseteado el input ', async() => {
        // const { addANewPost,  authUser ,loading  } = useAuth();
        const inputTitle = 'Compras';
        const inputContet = 'Queso y jamon';
        const notes_Mock = { id:"wUifLoxXEfZaeai62P4i", title:'Compras', content: 'Queso y jamon' };
        // const { result } = renderHook(() => {useAuth()})
        // await waitFor(
        //     // () => expect(result.current.images.length).toBeGreaterThan(0),
        //     () => console.log("resultado del hook", result.current)      
        //     // () => expect(result.current).toBeGreaterThan(0),
        // )

        // const { authUser ,loading} = result.current;
  
            expect.assertions(1);
            return note.addANewPost(inputTitle, inputContet).then(data => expect(data).toBe(inputTitle));
       
        // expect(authUser).toBe(String);
        // expect(loading).toBeFalsy()
        // screen.debug()
        // expect(useAuth).toHaveBeenCalledTimes(1);

    })

    // test('debe de guardar el valor de la nota y quedar reseteado el input ', () => {

    //     const inputValue = 'Compras';
    //     const Mock_idNote = {
    //         id: "wUifLoxXEfZaeai62P4i",
    //         title: inputValue
    //     }
    //     // useAuth.Mock_idNote

      

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
      

    //     // expect(   addANewPost ).toHaveBeenCalledTimes(1);
    //     // expect(input.value).toBe('');
    //     screen.debug()
    //     // expect(useAuth).toHaveBeenCalledTimes(1);

    // })



})