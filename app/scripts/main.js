$(document).ready(function(){

    var quotes = [

        {phrase: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', author: 'Edsger Dijkstra'},

        {phrase: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', author: 'Bill Gates'},

        {phrase: 'Nine people can’t make a baby in a month.', author: 'Fred Brooks'},

        {phrase: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', author: 'Martin Golding'},

        {phrase: 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.', author: 'Bjarne Stroustrup'},

        {phrase: 'When debugging, novices insert corrective code; experts remove defective code.', author: 'Richard Pattis'},

        {phrase: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler'},

        {phrase: 'One of my most productive days was throwing away 1000 lines of code.', author: 'Ken Thompson'},

        {phrase: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson'},

        {phrase: 'Programming is like sex. One mistake and you have to support it for the rest of your life.', author: 'Michael Sinz'}
    ];

    var urlString;

    function phraseLinkAppender() {
        // Re-initiate twitter button
        $('#tweet-link').text('');

        var randomNum = Math.floor(Math.random() * 10 );
        console.log(randomNum);

        setTimeout(function(){

            $('#phrase').text(quotes[randomNum].phrase).fadeIn('fast');
            $('#author').text(quotes[randomNum].author).fadeIn('fast');

            var urlString = '\'' + $('#phrase').html() + '\' - ' + $('#author').html();
            var finalUrl = "<a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text=" + urlString + "\" target=\"_blank\" data-size=\"large\"><button class=\"btn btn-block\"><i class=\"fa fa-twitter\"></i> Tweet this quote</button></a>";
            $(finalUrl).appendTo('#tweet-link');
            console.log(urlString);
        }, 400);


    }
    
    phraseLinkAppender();
    
    $(".btn-area").click(function() {
        $('#phrase').fadeOut();
        $('#author').fadeOut();
        phraseLinkAppender();
    });
});