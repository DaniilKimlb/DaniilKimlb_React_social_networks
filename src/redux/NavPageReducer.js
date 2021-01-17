import forest from '../assets/images/forrest.png';
import bird from '../assets/images/bird.png';
import animals from '../assets/images/animals.png';
import Motorbike from '../assets/images/Motorbike.png';
const initialState = {
  InfoFavorite: [
    { id: 1, name: 'Forest', img: forest },
    { id: 2, name: 'Birds', img: bird },
    { id: 3, name: 'Animals', img: animals },
    { id: 4, name: 'Motorbike', img: Motorbike },
  ],
};
const NavPageReducer = (state = initialState, action) => {
  return state;
};
export default NavPageReducer;
