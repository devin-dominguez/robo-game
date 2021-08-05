import props from './props';
const ROOM_LIGHT = 'images.backgrounds.room_light';
const ROOM_DARK = 'images.backgrounds.room_dark';

export default {
  name: 'TestRoom',
  background: 'images.backgrounds.room_light',

  // FUNCTION OVERRIDES
  update() {
    this.background = this.lightOn ? ROOM_LIGHT : ROOM_DARK;
  },

  // EXTRA STATE STUFF
  lightOn: true,

  // PROPS (don't change this)
  props
};
