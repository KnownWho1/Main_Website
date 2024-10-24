let originalTitle = document.title;
    
    // Change to the "I see you" title and eye favicon
    function changeTitle() {
        document.title = "🪙⛏️ Mining Bitcoin";
    }

    // Restore the original title and favicon
    function restoreTitle() {
        document.title = originalTitle;
    }

    // Listen for page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            changeTitle();
        } else {
            restoreTitle();
        }
    });