/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  //convert string to int 
  const hour_minute = time.split(':');
  const hour = parseInt(hour_minute[0]);
  if(hour < 12) {
    return "Good Morning";
  } 
  else if(hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
};
/* Write your implementation of displayMessage() */
function displayMessage(message)
{
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
};