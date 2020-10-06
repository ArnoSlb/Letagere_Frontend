import axios from 'axios';
import { FETCH_ADD_WISH, saveAddWish } from 'src/actions/addWish';
import AuthService from 'src/components/ModalLogin/Auth/AuthService';

const Auth = new AuthService();
const addWish = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADD_WISH: {
      axios.defaults.headers = { Authorization: `Bearer ${Auth.getToken()}`, 'Content-Type': 'application/json' };
      axios.get('http://3.91.26.197/projet-book-back/API/public/api/library/list/wishes')
        .then((response) => {
          const AddToDispatch = saveAddWish(response.data);
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

export default addWish;
