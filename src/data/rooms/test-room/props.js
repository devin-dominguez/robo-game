export default {
  phone: {
    hotSpot: {
      x: 90,
      y: 84,
      width: 8,
      height: 12
    },

    verbs: {
      look: "A phone",
      use: "I am using this phone",
      take: "I don't really want to take this phone with me",
      speak: "Who should I call?"
    }
  },

  lightSwitch: {
    hotSpot: {
      x: 227,
      y: 105,
      width: 5,
      height: 5,
    },

    verbs: {
      look: "It's a lightSwitch",
      use() {
        this.room.lightOn = !this.room.lightOn
      }
    }
  }
}
