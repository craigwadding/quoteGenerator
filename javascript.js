$(document).ready(function() {








    $('.btn').on('click', function() {
        var valueHolder = $('#dropdownValue').val();

        $('.quote').html('<h1></h1>');
        $('.name').html('<p></p>');

        for (i = 1; i <= valueHolder; i++) {

            //loop however many times the value of the dropdown is
            var rng = Math.floor(Math.random() * quotes.length);
            $('.quote').append('<h1>"' + quotes[rng][0] + '"</h1>').hide().fadeIn(200);
            $('.name').append('<p>~' + quotes[rng][1] + '</p>').hide().fadeIn(200);
        }

    });


    var quotes = [

        ["Talking out of turn…that’s a paddling.Looking out the window…that’s a paddling.Staring at my sandals…that’s a paddling.Paddling the school canoe…ooh, you better believe that’s a paddling.", "Jasper"],
        ["How can I prove we’re live ? Penis!", "Kent Brockman"],
        ["Now make like my pants, and split.", "Comic Book Guy"],
        ["For the next five minutes, I’m going to party like it’s on sale for $19.99.", "Apu Nahasapeemapetilon"],
        ["Ahh, there’s nothing better than a cigarette… unless it’s a cigarette lit with a hundred - dollar bill.", "Krusty the Clown"],
        ["Remember the time he ate my goldfish, and you lied to me and said I never had any goldfish.Then why’d I have the bowl, Bart ? Why did I have the bowl ?", "Milhouse Van Houten"],
        ["Stupider like a fox!", "Homer Simpson"],
        ["Uh, no you’ve got the wrong number.This is 9 - 1… 2.", "Chief Wiggum"],
        ["Yes, but I’d trade it all for a little more.", "Mr.Burns"],
        ["What do you mean I can’t take off my sweater ? I’m HOT!", "Drunk Mr.Rogers"],
        ["I’m so hungry, I could eat at Arby’s.", "Sherri or Terri"],
        ["Oh, dear God.Can’t this town go one day without a riot?", "Mayor Quimby"],
        ["By the time I got to a phone, my discovery had already been reported by Principal Kohoutek.I got back at him, though…him and that little boy of his.", "Principal Skinner"],
        ["You must love this country more than I love a cold beer on a hot Christmas morning.", "Homer Simpson"],
        ["My cat’s breath smells like cat food.", "Ralph Wiggum"],
        ["I didn’t think it was physically possible, but this both sucks and blows.", "Bart Simpson"],
        ["Jesus must be spinning in his grave!", "Barney Gumble"],
        ["I’ve been called ugly, pug ugly, fugly, pug fugly, but never ugly ugly.", "Moe the Bartender"],
        ["You don’t win friends with salad.", "Homer Simpson"],
        ["Oh yeah, I set it down when I got a piece of cake.", "Chief Wiggum"],
        ["Homer, you’re as dumb as a mule and twice as ugly.If a strange man offers you a ride, I say take it!", "Grampa Simpson"],
        ["Well, if it isn’t my old friend, Mr.McGreg, with a leg for an arm, and an arm for a leg.", "Dr.Nick Riviera"],
        ["Shut up, brain, or I’ll stab you with a Q - tip!", "Homer Simpson"],
        ["Everything’s coming up Milhouse!", "Milhouse Van Houten"],
        ["I can’t promise I’ll try, but I’ll try to try.", "Bart Simpson"],
        ["To alcohol! The cause of, and solution to, all of life’s problems.", "Homer Simpson"]
    ];



});