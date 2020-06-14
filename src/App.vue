<template>
  <div class="container">
    <myJoke
      v-for="(joke, index) in myJokes"
      v-bind:userImage="joke.userImage"
      v-bind:jokeText="joke.jokeText"
      v-bind:upLikes="joke.upLikes"
      v-bind:downLikes="joke.downLikes"
      v-bind:idx="index"
      v-on:increaseL="increaseLikesByOne"
      v-on:increaseD="increaseDislikesByOne"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import Joke from "./components/Joke.vue";
export default {
  name: "App",
  data() {
    return {
      myJokes: [
        {
          userImage: "assets/img/user01.png",
          jokeText:
            "The secret service isn't allowed to yell 'Get down!' anymore when the president is about to be attacked. Now they have to yell 'Donald, duck!'",
          upLikes: 13,
          downLikes: 24
        },
        {
          userImage: "assets/img/user02.png",
          jokeText:
            "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
          upLikes: 50,
          downLikes: 10
        },
        {
          userImage: "assets/img/user03.png",
          jokeText:
            "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
          upLikes: 30,
          downLikes: 2
        },
        {
          userImage: "assets/img/user04.png",
          jokeText:
            "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
          upLikes: 15,
          downLikes: 8
        },
        {
          userImage: "assets/img/user05.png",
          jokeText:
            "My daughter screeched, 'Daaaaaad, you haven't listened to one word I've said, have you!?' What a strange way to start a conversation with me....",
          upLikes: 90,
          downLikes: 44
        },
        {
          userImage: "assets/img/user06.png",
          jokeText:
            "My wife tried to unlatch our daughter's car seat with one hand and said, 'How do one armed mothers do it?' Without missing a beat I replied, 'Single handedly.",
          upLikes: 38,
          downLikes: 1
        },
        {
          userImage: "assets/img/user07.png",
          jokeText:
            "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
          upLikes: 66,
          downLikes: 35
        },
        {
          userImage: "assets/img/user08.png",
          jokeText:
            "My friend keeps saying 'cheer up man it could be worse, you could be stuck underground in a hole full of water.' I know he means well.",
          upLikes: 28,
          downLikes: 17
        },
        {
          userImage: "assets/img/user09.png",
          jokeText:
            "The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
          upLikes: 42,
          downLikes: 9
        }
      ]
    };
  },
  methods: {
    increaseLikesByOne(index) {
      this.myJokes[index].upLikes++;
    },
    increaseDislikesByOne(index) {
      this.myJokes[index].downLikes++;
    }
  },
  components: {
    myJoke: Joke
  }
};
</script>

<style lang="css">
.container {
  max-width: 30rem;
  margin: 5rem auto;
}
</style>