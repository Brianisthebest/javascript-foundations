function createEvent(title, month, day) {
  if(day <= 0 || day > 31) {
    return `Error: ${day} is not a valid day`
  } else {
    return {
      title: title,
      month: month,
      day: day
    }
  }
}

function createCalendar(owner, events) {
  return {
    owner: owner,
    events: events
  }
}

function reportMonthlyEvents(calendar, month) {
  monthlyEvents = []
  for(i = 0; i < calendar.events.length; i++) {
    if(calendar.events[i].month == month) {
      monthlyEvents.push(calendar.events[i])
    }
  }
  return monthlyEvents
}

module.exports = { 
  createEvent,
  createCalendar,
  reportMonthlyEvents,
 };