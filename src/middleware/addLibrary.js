import axios from 'axios';
import { FETCH_ADD, saveAdd } from 'src/actions/add';
import AuthService from 'src/components/ModalLogin/Auth/AuthService';

const Auth = new AuthService();
const add = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADD: {
      axios.defaults.headers = { Authorization: `Bearer ${Auth.getToken()}`, 'Content-Type': 'application/json' };
      axios.get('http://3.91.26.197/projet-book-back/API/public/api/library/list')
        .then((response) => {
          const AddToDispatch = saveAdd(response.data);
          store.dispatch(AddToDispatch);
          console.log(response);
        })
        .catch((error) => console.log(error));
      break;
    }

    default:
      next(action);
  }
};

// countItems

export default add;
