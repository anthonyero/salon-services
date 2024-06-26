 export function format_date (date) {
    return `${new Date(date).getMonth() +1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`
};

export function formatDateTime (date) {
  const formattedDate = `${new Date(date).getMonth() +1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()}` 
  
  const originalHour = new Date(date).getHours()
  const formattedHour = originalHour > 12 ? originalHour - 12 : originalHour
  
  const orignalMinute = new Date(date).getMinutes()
  const formattedMinute = orignalMinute < 10 ? `0${orignalMinute}` : orignalMinute 

  const amPM = originalHour > 12 ? `PM` : `AM`

  return `${formattedDate} at ${formattedHour}:${formattedMinute} ${amPM}`
}

export const minutesToHours = (minutesSum) => {
  const hours = Math.floor(minutesSum/60);
  const minutes = minutesSum % 60;
  
  switch (true) {
    case (hours == 0 && minutes == 0):
      return `${minutes} minutes`;  
    case (hours == 0 && minutes == 1):
      return `${minutes} minute`;
    case (hours == 0 && minutes > 1):
      return `${minutes} minutes`;
    case (hours == 1 && minutes == 0):
      return `${hours} hour`
    case (hours > 1 && minutes == 0):
      return `${hours} hours`
    case (hours == 1 && minutes == 1):
      return `${hours} hour and ${minutes} minute`;
    case (hours == 1 && minutes > 1):
      return `${hours} hour and ${minutes} minutes`;
    case (hours > 1 && minutes == 1):
      return `${hours} hours and ${minutes} minute`;
    case (hours > 1 && minutes > 1): 
      return `${hours} hours and ${minutes} minutes`
  }
};

