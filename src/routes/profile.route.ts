import {PROFILE_SCREEN} from '../constants/screens';
import PhotosScreen from '../screens/Photos';
import Icon from '../assets/icons/Profile.svg';
import IconActive from '../assets/icons/Profile-filled.svg';

const profileRouter = {
  Icon,
  IconActive,
  name: PROFILE_SCREEN,
  component: PhotosScreen,
  options: {
    title: PROFILE_SCREEN,
    headerShown: false,
  },
};

export default profileRouter;
