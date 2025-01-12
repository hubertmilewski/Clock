# Pomodoro Timer

This is a **Pomodoro Timer** built with React. It helps users manage their work and break intervals using the Pomodoro technique, which typically consists of 25-minute work sessions followed by 5-minute breaks. The app includes customizable session and break lengths, a countdown timer, and an alarm to signal the end of each session.

## Features
- **Customizable Session Length**: Increase or decrease the length of the work session (default: 25 minutes).
- **Customizable Break Length**: Increase or decrease the length of the break time (default: 5 minutes).
- **Countdown Timer**: Displays the remaining time for the current session or break.
- **Audio Alert**: Plays a sound when the session or break ends.
- **Start/Stop Button**: Toggles the countdown between running and paused.
- **Reset Button**: Resets the session and break lengths to their default values and stops the timer.
- **Session/Break Toggle**: The app automatically switches between work sessions and breaks, and displays the current phase.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the application and creating a responsive layout.
- **HTML5 Audio API**: To play a sound when the session or break ends.

## How It Works
1. The app starts with a 25-minute work session and a 5-minute break.
2. You can increment or decrement the session and break lengths by clicking the "+" or "-" buttons.
3. The countdown timer shows the remaining time in `MM:SS` format.
4. When the timer reaches 0, an alarm sound plays, and the app automatically switches between session and break.
5. The user can start, stop, and reset the timer using the buttons at the bottom.
6. The app uses React’s state management to handle the countdown, switching between session and break, and updating the display.

## How to Use
1. Click the "+" and "-" buttons next to "Session Length" and "Break Length" to set your desired session and break times.
2. Click the "Start/Stop" button to begin or pause the countdown.
3. When the timer hits zero, a sound will play, and the app will switch between session and break.
4. Click the "Reset" button to return the timer to its initial state, with a 25-minute session and 5-minute break.

## Audio
The app uses an audio file (`AlarmSound.mp3`) that plays when a session or break ends to alert the user.

This Pomodoro Timer is a simple and effective way to manage productivity, helping you stay focused while also taking regular breaks.

