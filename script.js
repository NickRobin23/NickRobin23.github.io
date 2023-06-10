function doPost(e) {
    var name = e.parameter.name;
    var email = e.parameter.email;
    var title = e.parameter.title;
    var message = e.parameter.message;
    
    var recipient = 'your-email@example.com';
    var subject = title + ' - Received from ' + name;
    var body = 'Name: ' + name + '\n' +
               'Email: ' + email + '\n' +
               'Message: ' + message;
    
    MailApp.sendEmail(recipient, subject, body);
    
    return ContentService.createTextOutput('Email sent successfully!');
  }
  