import {VIDEOS_SCREEN} from '../constants/screens';
import PhotosScreen from '../screens/Photos';
import Icon from '../assets/icons/Video.svg';
import IconActive from '../assets/icons/Video-filled.svg';

const videosRouter = {
  Icon,
  IconActive,
  name: VIDEOS_SCREEN,
  component: PhotosScreen,
  options: {
    title: VIDEOS_SCREEN,
    headerShown: false,
  },
};

export default videosRouter;
