import {atom} from 'recoil';

const testState = atom({
  key: 'testState',
  default: 'hello',
});

export default testState;
