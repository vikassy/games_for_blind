document.onkeydown = function(evt) {
evt = evt || window.event;
switch (evt.keyCode) {
    case 37:
        my_car.move_left();
        console.log('left');
        $('#mine').html('Mine position: Left');
        break;
    case 39:
        my_car.move_right();
        console.log('right');
        $('#mine').html('Mine position: Right');
        break;
    }
};