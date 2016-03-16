
//region statics

    var featureUrl = "{{feature-url}}";
    var featureImage = "{{feature-image}}";
    var featureTitleUrl = "{{feature-title-url}}";
    var featureDescription = "{{feature-description}}";
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
    while(true){
        var index = html.indexOf(currentToken);
        if(index == -1){
            break;
        }
        var firstHalf = html.substr(0, index);
        var secondHalf = html.substr(index + currentToken.length);

        var currentFeatureValue = listOfFeatures[currentSelection][currentToken];
        html = firstHalf + currentFeatureValue + secondHalf;
        currentSelection ++;
    }
}



function init() {

    listOfFeatures = [
        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },
        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },
        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },

        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },

        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },

        {
            "{{feature-url}}": "url",
            "{{feature-image}}": "imageurl",
            "{{feature-title-url}}": "titleurl",
            "{{feature-description}}": "description"
        },

        {
            "{{feature-url}}": "http://www.amazon.com/gp/product/B00C4PCKTI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00C4PCKTI&linkCode=as2&tag=dailycontr0e-20&linkId=WCLHBOTWTDO3226S",
            "{{feature-image}}": "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00C4PCKTI&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=dailycontr0e-20",
            "{{feature-title-url}}": "Camera Mug!",
            "{{feature-description}}": "Great gift for those of you know who one of THOSE people... film people"
        }
    ];


    html = '<!DOCTYPE HTML> <!-- Hyperspace by HTML5 UP html5up.net | @n33co Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) --> <html> <head> <title>Hyperspace by HTML5 UP</title> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]--> <link rel="stylesheet" href="assets/css/main.css" /> <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]--> <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]--> </head> <body> <!-- Sidebar --> <section id="sidebar"> <div class="inner"> <nav> <ul> <li><a href="#currentitem">Todays choice</a></li> <li><a href="#welcome">Hi There!</a></li> <li><a href="#previouschoices">Previous selections</a></li> </ul> </nav> </div> </section> <!-- Wrapper --> <div id="wrapper"> <!-- One --> <section id="currentitem" class="wrapper style2 spotlights"> <section> <a href="{{feature-url}}" class="image"><img src="{{feature-image}}" alt="" data-position="center center" /></a> <div class="content"> <div class="inner"> <h2>{{feature-title-url}}</h2> <p>{{feature-description}}</p> <ul class="actions"> <li><a href="{{feature-url}}" class="button">Buy Now</a></li> </ul> </div> </div> </section> </section> <!-- Intro --> <section id="welcome" class="wrapper style1 fullscreen fade-up"> <div class="inner"> <h1>Hyperspace</h1> <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br /> and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p> <ul class="actions"> <li><a href="#currentitem" class="button scrolly">Learn more</a></li> </ul> </div> </section> <!-- Two --> <section id="previouschoices" class="wrapper style3 fade-up"> <div class="inner"> <h2>What we do</h2> <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p> <div class="features"> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> <section> <span class="icon major"><a href="{{feature-url}}"> <img src="{{feature-image}}"/></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></span> <h3><a href="{{feature-url}}">{{feature-title}}</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dailycontr0e-20&l=as2&o=1&a=B00C4PCKTI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></h3> <p>{{feature-description}}</p> </section> </div> <ul class="actions"> <li><a href="#" class="button">Learn more</a></li> </ul> </div> </section> </div> <!-- Footer --> <footer id="footer" class="wrapper style1-alt"> <div class="inner"> <ul class="menu"> <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li> </ul> </div> </footer> <!-- Scripts --> <script src="assets/js/jquery.min.js"></script> <script src="assets/js/jquery.scrollex.min.js"></script> <script src="assets/js/jquery.scrolly.min.js"></script> <script src="assets/js/skel.min.js"></script> <script src="assets/js/util.js"></script> <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]--> <script src="assets/js/main.js"></script> </body> </html>';
}