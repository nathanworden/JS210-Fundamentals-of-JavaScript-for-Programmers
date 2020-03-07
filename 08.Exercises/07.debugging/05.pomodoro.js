another var minutes gets intasiated in the function defintion of pomodor.
This variable declration gets hoisted to the top of the scope created by pomodoro.
The inside scoped minutes blocks the outside scoped minutes.
This means minutes is undefined. undefined < 25 is false, so the while loop doesn't 
run even once.