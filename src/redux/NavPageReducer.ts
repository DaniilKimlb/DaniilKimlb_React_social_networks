import forest from '../assets/images/forrest.png';
import bird from '../assets/images/bird.png';
import animals from '../assets/images/animals.png';
import Motorbike from '../assets/images/Motorbike.png';
type InfoFavoriteType = {
  id: number;
  name: string;
  img: string;
};

const initialState = {
  InfoFavorite: [
    { id: 1, name: 'Forest', img: forest },
    { id: 2, name: 'Birds', img: bird },
    { id: 3, name: 'Animals', img: animals },
    { id: 4, name: 'Motorbike', img: Motorbike },
  ] as Array<InfoFavoriteType>,
};
export type initialStateType = typeof initialState;
const NavPageReducer = (
  state = initialState,
  action: any
): initialStateType => {
  return state;
};
export default NavPageReducer;
