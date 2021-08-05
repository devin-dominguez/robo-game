import { loadData } from '../../utils';
import Sprite from '../../sprite';

import CursorData from './cursors';

export default {
  cursors: loadData(CursorData, Sprite)
};
