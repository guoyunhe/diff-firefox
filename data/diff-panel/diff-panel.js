$(function() {
    var linkList = [
        {
            title: "System76 is screwing me -- need a laptop",
            url: "https://www.reddit.com/r/linux/comments/1pwwr0/system76_is_screwing_me_need_a_laptop/"
        },
        {
            title: "System76 Gazelle Professional Review",
            url: "http://www.dieuwe.com/blog/system76-gazelle-professional-review"
        },
        {
            title: "[ubuntu] System76 systems \"unique\"??",
            url: "http://ubuntuforums.org/showthread.php?t=1926489"
        },
        {
            title: "System76 is screwing me -- need a laptop",
            url: "https://www.reddit.com/r/linux/comments/1pwwr0/system76_is_screwing_me_need_a_laptop/"
        },
        {
            title: "System76 Gazelle Professional Review",
            url: "http://www.dieuwe.com/blog/system76-gazelle-professional-review"
        },
        {
            title: "[ubuntu] System76 systems \"unique\"??",
            url: "http://ubuntuforums.org/showthread.php?t=1926489"
        }
    ];
    
    for (var link in linkList) {
        addLinkToList(linkList[link].url, linkList[link].title);
    }
    
    function addLinkToList(url, title) {
        var linkElement = $('<div class="link"></div>');
        var titleElement = $('<div class="title"></div>');
        titleElement.text(title);
        var urlElement = $('<div class="url"></div>');
        urlElement.text(url);
        var closeElement = $('<div class="close"><i class="fa fa-times"></i><div>');
        linkElement.append(titleElement);
        linkElement.append(urlElement);
        linkElement.append(closeElement);
        $("#link-list").prepend(linkElement);
        
        linkElement.click(function () {
            self.port.emit("openTab", url);
        });
        
        closeElement.click(function () {
            linkElement.remove();
        });
    }
    
    $("#add-link").click(function () {
        $("#add-link-page").fadeIn();
    });
    
    $("#add-link-page .close").click(function () {
        $("#add-link-page").fadeOut();
    });
    
    $("#report-problem").click(function () {
        $("#report-problem-page").fadeIn();
    });
    
    $("#report-problem-page .close").click(function () {
        $("#report-problem-page").fadeOut();
    });
});