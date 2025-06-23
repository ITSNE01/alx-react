import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// Configure Enzyme
configure({ adapter: new Adapter() });
