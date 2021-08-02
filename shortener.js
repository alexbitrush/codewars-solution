var shortener = function(message) {
    while(message.length > 160 && (n = message.lastIndexOf(' ')) >= 0)
    m = m.slice(0, n) + m[n+1].toUpperCase() + m.slice(n+2);
    return m;
  }
  
  let message = 'SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.'
  console.log(shortener(message))