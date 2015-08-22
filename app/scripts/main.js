$(document).ready(function(){
    var quotes = [

        {phrase: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', author: 'Edsger Dijkstra'},

        {phrase: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', author: 'Bill Gates'},

        {phrase: 'Nine people can’t make a baby in a month.', author: 'Fred Brooks'},

        {phrase: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', author: 'Brian W. Kernighan'},

        {phrase: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', author: 'Martin Golding'},

        {phrase: 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.', author: 'Bjarne Stroustrup'},

        {phrase: 'When debugging, novices insert corrective code; experts remove defective code.', author: 'Richard Pattis'},

        {phrase: 'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.', author: 'Eric S. Raymond'},

        {phrase: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.', author: 'Linus Torvalds'},

        {phrase: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler'},

        {phrase: 'Good code is its own best documentation. As you\’re about to add a comment, ask yourself, \‘How can I improve the code so that this comment isn’t needed?\'', author: 'Steve McConnell'},

        {phrase: 'The problem with using C++ … is that there’s already a strong tendency in the language to require you to know everything before you can do anything.', author: 'Larry Wall'},

        {phrase: 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.', author: 'Donald Knuth'},

        {phrase: 'One of my most productive days was throwing away 1000 lines of code.', author: 'Ken Thompson'},

        {phrase: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson'},

        {phrase: 'Programming is like sex. One mistake and you have to support it for the rest of your life.', author: 'Michael Sinz'},

        {phrase: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization.', author: 'Gerald Weinberg'},
    ];
    var urlString;

    function randomNumGen() {
        var randomNum = Math.floor(Math.random() * 17 );
        $('#phrase').text(quotes[randomNum].phrase);
        $('#author').text(quotes[randomNum].author);

        var urlString = '\'' + $('#phrase').html() + '\' - ' + $('#author').html();
        
        var finalString = "<a class=\"twitter-share-button\"href=\"https://twitter.com/intent/tweet?text=\"" + urlString + "data-size=\"large\">Tweet</a>";

        $(finalString).appendTo('#tweet-link')
        console.log(finalString);
    }
    
    randomNumGen();
    
    $("button").click(function() {
        randomNumGen();
    });


});


