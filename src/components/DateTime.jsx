import React from 'react'

const DateTime = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const date = now.getDate();
    const time = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    
    return `${day} ${month} ${date} ${time}`;
  }

  return (
    <div>{getCurrentDateTime()}</div>
  )
}

export default DateTime