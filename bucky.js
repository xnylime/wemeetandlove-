function updateBuddyList() {
    var buddies = [
        {"name": "Alestar29", "status": "online"},
        {"name": "Evelyen32", "status": "online"},
        {"name": "Roseyane28", "status": "offline"}
    ];

    var $list = $('<ul>');

    $.each(buddies, function (index, item) {
        console.log(index);
        console.log(item.name, item.status);
        $list.append($('<li>').html('<h1>'  + item.name +  '</h1>'));
    });

    $('.main-area').html($list);
}

function displayChatWindow() {
    $.get('component/chat-window.html', function (data) {
        $('.main-area').html(data);
        $chatHeight = $(document).height() - $('.top-nav').height() - $('.bottom').height();
        $('.chat-window').css('height', $chatHeight);
    });
}
