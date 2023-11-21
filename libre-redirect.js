/*
DESCRIPTION:
Redirect from tracking websites to privacy respecting alternatives
*/

var url = location.href;
var domain = location.host;
url = url.replace(/\bwww\.\b/,"");
domain = domain.replace(/\bwww\.\b/,"")

var basics = {
    "youtube.com": "piped.video",
    "youtu.be": "piped.video",
    "twitch.tv": "safetwitch.projectsegfau.lt",
    "tiktok.tv": "cringe.whateveritworks.org",
    "twitter.com": "nitter.net",
    "reddit.com": "safereddit.com"
};

var target = basics[domain];

if (target) {
    location.href = url.replace(domain, target)
}