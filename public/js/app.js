 var socket = io();
 var name = getQueryVariable('name') || 'Anonymous';
 var room = getQueryVariable('room');

 console.log(name + ' wants to join ' + room);



 socket.on('connect', function() {
     console.log('Connected to socket.io server !');
     socket.emit('joinRoom',{
        name: name,
        room: room
     });

 });


//h1
jQuery('.roomName').text(room);

 socket.on('message', function(message) {
     var momentTimestamp = moment.utc(message.timestamp);
     var $messages = jQuery('.messages');
     var $message = jQuery('<li class="list-group-item"></li>')



     console.log('New Message:');
     console.log(message.text);

     $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('LT') + '</strong></p>')
     $message.append('<p>' + message.text + '</p>');
     $messages.append($message);
 });



 // Handles submitting of new message

 var $form = jQuery('#message-form');

 $form.on('submit', function(event) {
     event.preventDefault();

     var $message = $form.find('input[name=message]');

     socket.emit('message', {
         name: name,
         text: $message.val()
     });

     $message.val('');
 });