# week-three-project
https://awik.io/rotate-element-indefinitely-css-animation/#:~:text=You%20can%20rotate%20an%20element,give%20the%20element%20an%20ID.&text=Then%20set%20the%20animation%20property,taking%203%20seconds%20to%20complete.

^^ 
I used this code to make my cookie rotate.


https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3

^^
I used this code to achieve button click effect on shop and cookie


Reflection:

🎯 What requirements did you achieve?
I have achieved all requirements for this task. 

My functions are organised and reusable, I have event listeners to handle user interactions, have stored the cookie count and cps in local storage, have used a setInterval to manage the games state and my store upgrades are provided by the API which gives them all functionality.

I also achieved several stretch goals:
-I added background music to the game with a custom control bar
-I have used a single function to manage all shop upgrades
-I've added a sound effect for clicking the cookie and a rotation animation on the cookie
-I've added a title content change that occurs on the inital click of the cookie
-I've added a media query for a mobile accessible version of the game.


🎯 Were there any requirements or goals that you were unable to achieve?

I have achieved all goals I set out to achieve and am very happy with my project.

I had originally hoped to have the background music play automatically when the page was loaded, however I realised that browsers do not allow music to play unless the page is interacted with, so I changed the music to play once the play button has been pressed.

I had also aimed to add a display that showed all upgrades that had been bought by the player, but due to time constraints during my weekend I didn't achieve this.


🎯 What errors or bugs did you encounter while completing your assignment? How did you solve them?

There were several bugs and errors that occured throughout the project.

I encountered a bug where my cps element content would only update once the page had been refreshed, this was a syntax error which was easily fixed.

I also encountered a bug where my mute button would only mute, it wouldn't unmute. This took me a while to correct, but I realised that in my muting function I was resetting the value rather than comparing it in my if statement. This was a simple fix of changing = to ==.