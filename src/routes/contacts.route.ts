import {CONTACTS_SCREEN} from '../constants/screens';
import PhotosScreen from '../screens/Photos';
import Icon from '../assets/icons/Contact.svg';
import IconActive from '../assets/icons/Contact-filled.svg';

const contactsRouter = {
  Icon,
  IconActive,
  name: CONTACTS_SCREEN,
  component: PhotosScreen,
  options: {
    title: CONTACTS_SCREEN,
    headerShown: false,
  },
};

export default contactsRouter;
