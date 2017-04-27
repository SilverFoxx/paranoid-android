/*
 Description:
   This bot is guaranteed to demotivate even the most upbeat team.

   “I won’t enjoy it.” – Marvin

 Dependencies:
   Nil

 Configuration:
   Nil

 Commands:
   hubot <hit me (hard)> - replies with random demotivational image
   hubot <hit @user (hard)> - sends random demotivational image to @user (as PM)
   - the option "hard" changes the image for a more offensive 4chan wallpaper
   <assorted positive words> - sends demotivating comments

 Notes:

 Author:
   SilverFoxx
*/

module.exports = (marv) => {

  //randomise function (for the practice)
  const randomise = array => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  //global variables
  const posters = [
    "http://cewl.io/img/demotivational/dm-poster-20.jpg",
    "http://cewl.io/img/demotivational/dm-poster-19.jpg",
    "http://cewl.io/img/demotivational/dm-poster-18.jpg",
    "http://cewl.io/img/demotivational/dm-poster-17.jpg",
    "http://cewl.io/img/demotivational/dm-poster-16.jpg",
    "http://cewl.io/img/demotivational/dm-poster-15.jpg",
    "http://cewl.io/img/demotivational/dm-poster-14.jpg",
    "http://cewl.io/img/demotivational/dm-poster-13.jpg",
    "http://cewl.io/img/demotivational/dm-poster-12.jpg",
    "http://cewl.io/img/demotivational/dm-poster-11.jpg",
    "http://cewl.io/img/demotivational/dm-poster-10.jpg",
  ]

  const fourchan = [
    "http://cewl.io/img/fc/hard16.jpg",
    "http://cewl.io/img/fc/hard15.jpg",
    "http://cewl.io/img/fc/hard14.jpg",
    "http://cewl.io/img/fc/hard13.jpg",
    "http://cewl.io/img/fc/hard12.jpg",
    "http://cewl.io/img/fc/hard11.jpg",
    "http://cewl.io/img/fc/hard10.jpg"
  ]

  marv.hear(/@markysbot$|^(@)?marv(in)?$/i, res => {
    return res.reply('Feeling good? I can help with that.')
  })
  marv.respond(/hello|\bhi\b|\bhey\b/i, res => {
    return res.reply("Hi - I'm Marvin, the paranoid android. Brain the size of a planet and I end up on this JS course.");
  })
  marv.hear(/well done|great|awesome|good/i, res => {
    return res.send("Fluke! The good times won't last.")
  })
  marv.hear(/life/i, res => {
    return res.send("Life! Don't talk to me about life.")
  })

//send random demotivational image to me, or to other user through private message
  marv.respond(/Hit (me$|@.*$)/i, res => {
    if(res.match[1] === 'me') {
      return res.reply(randomise(posters))
    } else  {
      marv.messageRoom(res.match[1], (randomise(posters)))
    }
  })
//send random 4chan wallpaper
  marv.respond(/Hit (\bme\b|@.*\b) hard/i, res => {
    if(res.match[1] === 'me') {
      return res.reply(randomise(fourchan))
    } else {
      marv.messageRoom(res.match[1], (randomise(fourchan)))
    }
  })

/* TODO: DRY the above 2 into one. How to make capturing group optional? Too many hours of my life wasted on this one!
marv.respond(/Hit (\bme\b|\b@.*\b) (hard)?/i, res => {
  console.log(`0: ${res.match[0]}, 1: ${res.match[1]}, 2: ${res.match[2]}`)
  let image = posters
  if (res.match[2]) {
    image = fourchan
  }
    if(res.match[1] === 'me') {
      return res.reply(randomise(image))
    } else  {
      marv.messageRoom(res.match[1], (randomise(image)))
    }
  }) */
}
