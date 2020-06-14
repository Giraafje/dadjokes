"use strict";

new Vue({
  el: "#app",
  data: {
    userImage: "assets/img/user01.png",
    joke: "The secret service isn't allowed to yell 'Get down!' anymore when the president is about to be attacked. Now they have to yell 'Donald, duck!'",
    upLikes: 0,
    downLikes: 0,
  },
  methods: {
    increaseLikes() {
      this.upLikes += 1;
    },
    increaseDislikes() {
      this.downLikes += 1;
    },
  },
});



