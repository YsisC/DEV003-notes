import { fireEvent, screen, render, renderHook, waitFor } from '@testing-library/react'
import { CreateNote } from '../components';
// import { useFirebaseData } from '../lib/useFirebaseData';


// jest.mock('../lib/useFirebaseData');
import * as note from './_mock_/addNewPost';

describe('Pruebas en <CreateNote />', () => {

    test('debe de cambiar el valor de la nota ', () => {

        render(<CreateNote />)
        const contentTextarea = screen.getByRole('textbox');
        fireEvent.input(contentTextarea, { target: { value: 'Compras' } })
        expect(contentTextarea.value).toBe('Compras');
      
        
    })

    it('should expand the note input on click', () => {
    render(<CreateNote />);
      const contentTextarea = screen.getByRole('textbox');
  
      // Comprueba que el textarea se expanda después de hacer clic
      fireEvent.input(contentTextarea, { target: { value: 'Compras' } })
      fireEvent.click(contentTextarea);
      expect(contentTextarea.rows).toBe(3);
    });
  
 
    test('debe enviar el formulario al hacer clic en el botón de envío', () => {
      const addANewPostMock = jest.fn();
      useFirebaseData.mockReturnValue({ addANewPost: addANewPostMock });
      render(<CreateNote />);
      const titleInput = screen.getByPlaceholderText('Title');
      const contentTextarea = screen.getByRole('textbox');
      const submitButton = screen.getByRole('button', { name: /add/i });

      fireEvent.click(contentTextarea);
      fireEvent.change(titleInput, { target: { value: 'Nota de prueba' } });
      fireEvent.change(contentTextarea, { target: { value: 'Contenido de prueba' } });
      fireEvent.click(submitButton);
  
      expect(addANewPostMock).toHaveBeenCalledWith('Nota de prueba', 'Contenido de prueba');
    });



})