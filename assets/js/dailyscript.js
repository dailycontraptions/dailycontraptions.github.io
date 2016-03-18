
//region statics

    var featureUrl = "{{feature-url}}";
    var featureImage = "{{feature-image}}";
    var featureTitleUrl = "{{feature-title}}";
    var featureDescription = "{{feature-description}}";
    var sectionEnding = '<!--#token#-->';
    var html, listOfFeatures;

//endregion
init();
replaceItems(featureUrl);
replaceItems(featureImage);
replaceItems(featureTitleUrl);
replaceItems(featureDescription);
console.log(html);

function replaceItems(currentToken){
    var currentSelection = 0;

    //get all indexes of sections in app
    var sections = getIndicesOf(sectionEnding, html, false);
    console.log(sections);
    var actualCount = 0;
    while(true){
        var index = html.indexOf(currentToken);
        if(index == -1){
            break;
        }
        var tempSelection = currentSelection;
        var firstHalf = html.substr(0, index);
        var secondHalf = html.substr(index + currentToken.length);

        console.log(currentSelection );
        var item = listOfFeatures[tempSelection];
        var currentFeatureValue = item[currentToken];
        html = firstHalf + currentFeatureValue + secondHalf;
        actualCount ++;
        sections = getIndicesOf(sectionEnding, html, false);
        console.log(listOfFeatures[currentSelection][featureUrl]);
        if(html.substr(0, sections[currentSelection]).indexOf(currentToken) == -1) {
            currentSelection++;
        }
        // a a b c
        // 0234567
        // zz zz b c
        //
    }
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function init() {

    listOfFeatures = [
        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00N1EJXUU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00N1EJXUU&linkCode=as2&tag=dailycontr0e-20&linkId=PV6YAQ7R37JQPLQP",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/51Xo7HXGy-L._SL1000_.jpg",
            "{{feature-title}}": "Marvel: Dancing Groot Bobble Action Figure",
            "{{feature-description}}": "Putting this up here because my girlfriend loved this when she saw it. Good small novelty gift!"
        },
        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B015YCRZ0G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B015YCRZ0G&linkCode=as2&tag=dailycontr0e-20&linkId=ALQCA6O4VOTUCJNX",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/81jlb0qu9gL._SL1500_.jpg",
            "{{feature-title}}": "Nexus 6p",
            "{{feature-description}}": "My current phone, it's pretty tight actually. Finger print scan is super fast, camera is amazing even at night, on and its very smooth since it's stock Android"
        },
        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B000YLAOEW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000YLAOEW&linkCode=as2&tag=dailycontr0e-20&linkId=63HPG77YFGSVQWAF",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/91RclP16lkL._SL1500_.jpg",
            "{{feature-title}}": "Race for the Galaxy",
            "{{feature-description}}": "I'll be frank, not my favorite board game of all time, but definitely super fun. Definitely worth it for under $30"
        },
        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00429N19W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00429N19W&linkCode=as2&tag=dailycontr0e-20&linkId=NR3SPA5JIG4TV2YU",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/61PAWxNDKzL._SL1000_.jpg",
            "{{feature-title}}": "APC Pure Sinewave 1500 VA UPS",
            "{{feature-description}}": "Well received UPS. Love this thing, let me finish last bits of t.v. shows when the power goes out. Oh, and gives yo peace of mind with your equipment"
        },

        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00FB45SI4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00FB45SI4&linkCode=as2&tag=dailycontr0e-20&linkId=5WKETPOTIQCP2LRJ",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/51VrYESKRzL._SL1000_.jpg",
            "{{feature-title}}": "ASUS (RT-AC68U) - Kickass",
            "{{feature-description}}": "Really awesome router, before this I lived in the land of 50 dollar routers, with this I have reception on my second floor even with router in the basement."
        },

        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00KXZC762/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00KXZC762&linkCode=as2&tag=dailycontr0e-20&linkId=JWTZYQXBFK4VWOYG",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/51mv79BuapL._SL1000_.jpg",
            "{{feature-title}}": "Cheap Mini Quadcopter",
            "{{feature-description}}": "Great for roving around your house, lasts a few minutes, lots of fun. However you quickly realize how bad you are at piloting"
        },

        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B01B2KFI1C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01B2KFI1C&linkCode=as2&tag=dailycontr0e-20&linkId=H2YBX2XSEQNR2B23",
            "{{feature-image}}": "http://ecx.images-amazon.com/images/I/718Fz9nCoGL._SL1000_.jpg",
            "{{feature-title}}": "Shower Speaker",
            "{{feature-description}}": "Great for listening to podcasts or music. But don't forget to mute turn off blue tooth, when... well you know when you do that thing."
        },

        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00C4PCKTI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00C4PCKTI&linkCode=as2&tag=dailycontr0e-20&linkId=WCLHBOTWTDO3226S",
            "{{feature-image}}": "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00C4PCKTI&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=dailycontr0e-20",
            "{{feature-title}}": "Camera Mug!",
            "{{feature-description}}": "Great gift for those of you know who one of THOSE people... film people"
        },
        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00C4PCKTI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00C4PCKTI&linkCode=as2&tag=dailycontr0e-20&linkId=WCLHBOTWTDO3226S",
            "{{feature-image}}": "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00C4PCKTI&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=dailycontr0e-20",
            "{{feature-title}}": "Camera Mug!",
            "{{feature-description}}": "Great gift for those of you know who one of THOSE people... film people"
        }
    ];


    html = '<!DOCTYPE HTML> <!-- Hyperspace by HTML5 UP html5up.net | @n33co Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) --> <html> <head> <title>Daily Contraptions</title> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]--> <link rel="stylesheet" href="assets/css/main.css" /> <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]--> <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]--> </head> <body> <!-- Sidebar --> <section id="sidebar"> <div class="inner"> <nav> <ul> <li><a href="#currentitem">Today&#8217s choice</a></li> <li><a href="#welcome">Hi There!</a></li> <li><a href="#previouschoices">Previous selections</a></li> </ul> </nav> </div> </section> <!-- Wrapper --> <div id="wrapper"> <!-- One --> <section id="currentitem" class="wrapper style2 spotlights"> <section> <a href="{{feature-url}}" id="currentImage" class="image"><img src="{{feature-image}}" alt="" data-position="center center" /> </a> <div class="content"> <div class="inner"> <h2>{{feature-title}}</h2> <p>{{feature-description}}</p> <ul class="actions"> <li><a href="{{feature-url}}" class="button">Buy Now</a></li> </ul> </div> </div> </section><!--#token#--> </section> <!-- Intro --> <section id="welcome" class="wrapper style1 fullscreen fade-up"> <div class="inner"> <h1>Oh Hi there!</h1> <p>This app seeks to accomplish one goal. Post daily random things that people might be interested in. Gadgets, cheap deals, movies, books, you name it. Every day there&#8217ll be a new item, and that item will then become a past item, and finally archived.</p> </div> </section> <!-- Two --> <section id="previouschoices" class="wrapper style3 fade-up"> <div class="inner"> <h2>Previous Selections</h2> <p>Below is a list of past selections. These selections will slowly move down the list until they become archived.</p> <div class="features"> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a></span> <h3><a href="{{feature-url}}">{{feature-title}}</a></h3> <p>{{feature-description}}</p> </section><!--#token#--> </div> <ul class="actions"> <li><a href="#" class="button">Archives (WiP)</a></li> </ul> </div> </section> </div> <!-- Footer --> <footer id="footer" class="wrapper style1-alt"> <div class="inner"> <ul class="menu"> <li>&copy; Patryk Poborca. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li> </ul> </div> </footer> <!-- Scripts --> <script src="assets/js/jquery.min.js"></script> <script src="assets/js/jquery.scrollex.min.js"></script> <script src="assets/js/jquery.scrolly.min.js"></script> <script src="assets/js/skel.min.js"></script> <script src="assets/js/util.js"></script> <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]--> <script src="assets/js/main.js"></script> <script type="text/javascript" src="http://ir-na.amazon-adsystem.com/s/impression-counter?tag=dailycontr0e-20&o=1"></script> <noscript><img src="http://ir-na.amazon-adsystem.com/s/noscript?tag=dailycontr0e-20" alt="" /></noscript> <!-- Google Analytics --> <script> (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,"script","//www.google-analytics.com/analytics.js","ga"); ga("create", "UA-26348201-3", "auto"); ga("send", "pageview"); </script> <!-- End Google Analytics --> </body> </html>';
}