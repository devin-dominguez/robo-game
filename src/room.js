import Prop from './prop';
import { loadData } from './utils';
import { getAsset } from './data/assets';
import Screen from './screen';

export default class Room {
  constructor(params) {
    Object.assign(this, {
      props: {},
      ...params
    });

    this.props = loadData(this.props, Prop, { room: this });
  }

  update() {}

  draw() {
    Screen.ctx.drawImage(getAsset(this.background), 0, 0);
  }
};
