let originalTitle = document.title;
    let originalFavicon = document.getElementById('favicon').href;
    
    // Change to the "I see you" title and eye favicon
    function changeTitleAndFavicon() {
        document.title = "I See You ";
        document.getElementById('favicon').href = "assets/images/profile.jpg";
    }

    // Restore the original title and favicon
    function restoreTitleAndFavicon() {
        document.title = originalTitle;
        document.getElementById('favicon').href = originalFavicon;
    }

    // Listen for page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            changeTitleAndFavicon();
        } else {
            restoreTitleAndFavicon();
        }
    });