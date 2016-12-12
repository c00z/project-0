# BombSquad - [Live Link](https://c00z.github.io/project-0/)

<img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="100">

## BombSquad

<i> Game built for WDI's Project 0 </i>

Check out the game I created for WDI's project zero. The object is to find all the hidden bombs before the timer expires. Goodluck! 

Feel free to fork / star / watch for your own personal use.

See the published project at [github.com/c00z/project-0](https://github.com/c00z/project-0)!

## Technologies Used

<li> JavaScript </li>
<li> jQuery </li>
<li> HTML </li>
<li> CSS </li>

## Code I'm Proud Of

```javascript
function createBoard () {
for (var i = 0; i < 6; i++) {
  bombArray.forEach(function(element) {
    $('#' + element).click(function() {
    $(this).addClass("bombbox");
    })
})
  bombArray.push(gameBoard[(Math.floor(Math.random()*(30-1)+1))])
  console.log(bombArray)
  }
  return bombArray;
};

createBoard();
```

### Screen Shots


Take screen shots using `control` `command` `shift` `4`. The image will be on your clipboard and you can paste it where you like with `command` `v`. If you paste it anywhere within a github text editing window, it will give you a markdown version.
