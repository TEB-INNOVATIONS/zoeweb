// ===========================
// Document Ready
// ===========================
$(document).ready(function() {

    // ===========================
    // Preloader / Loading Screen
    // ===========================
    setTimeout(function() {
        $('#preloader').fadeOut(500);
    }, 2000);

    // ===========================
    // AOS Animation Initialization
    // ===========================
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // ===========================
    // Navbar Scroll Effect
    // ===========================
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-lg');
        } else {
            $('.navbar').removeClass('shadow-lg');
        }
    });

    // ===========================
    // Smooth Scrolling for Nav Links
    // ===========================
    $('.nav-link[href^="#"]').on('click', function(e) {
        e.preventDefault();

        // Close mobile menu if open
        $('.navbar-collapse').collapse('hide');

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // ===========================
    // Active Nav Link on Scroll
    // ===========================
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 100;

        $('.nav-link[href^="#"]').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });

    // ===========================
    // Login Form Validation & Authentication
    // ===========================
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        var username = $('#username').val().trim();
        var password = $('#password').val().trim();

        // Authentication check
        if (username === 'admin' && password === 'zoe@teb') {
            // Success
            $('#loginError').addClass('d-none');

            // Store login state
            sessionStorage.setItem('loggedIn', 'true');

            // Show success message
            showLoginSuccess();

            // Redirect to dashboard after short delay
            setTimeout(function() {
                window.location.href = 'dashboard.html';
            }, 1500);

        } else {
            // Failed login
            $('#loginError').removeClass('d-none');

            // Shake animation
            $('.modal-content').addClass('shake');
            setTimeout(function() {
                $('.modal-content').removeClass('shake');
            }, 500);
        }
    });

    // ===========================
    // Show Login Success Message
    // ===========================
    function showLoginSuccess() {
        $('#loginError').removeClass('alert-danger').addClass('alert-success d-none');
        $('#loginError').html('<i class="fas fa-check-circle me-2"></i>Login successful! Redirecting...');
        $('#loginError').removeClass('d-none');
    }

    // ===========================
    // Stats Counter Animation
    // ===========================
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.text(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Trigger counter animation when stats section is visible
    var statsAnimated = false;
    $(window).scroll(function() {
        var statsSection = $('.hero-stats');
        if (statsSection.length) {
            var statsTop = statsSection.offset().top;
            var statsBottom = statsTop + statsSection.outerHeight();
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (!statsAnimated && scrollTop + windowHeight > statsTop) {
                statsAnimated = true;
                // You can add counter animations here if needed
            }
        }
    });

    // ===========================
    // Navbar Mobile Menu Close on Click Outside
    // ===========================
    $(document).on('click', function(e) {
        var navbarCollapse = $('.navbar-collapse');
        if (!$(e.target).closest('.navbar').length && navbarCollapse.hasClass('show')) {
            navbarCollapse.collapse('hide');
        }
    });

    // ===========================
    // Back to Top Button (Optional Enhancement)
    // ===========================
    // Uncomment below code to add a back to top button
    /*
    var backToTopBtn = $('<button class="back-to-top"><i class="fas fa-arrow-up"></i></button>');
    $('body').append(backToTopBtn);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    backToTopBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    */

    // ===========================
    // Form Input Focus Animation
    // ===========================
    $('.form-control').on('focus', function() {
        $(this).parent().addClass('focused');
    });

    $('.form-control').on('blur', function() {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focused');
        }
    });

    // ===========================
    // Parallax Effect on Hero Section (Optional)
    // ===========================
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.hero-section').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
    });

    // ===========================
    // Modal Reset on Close
    // ===========================
    $('#loginModal').on('hidden.bs.modal', function() {
        $('#loginForm')[0].reset();
        $('#loginError').addClass('d-none').removeClass('alert-success').addClass('alert-danger');
    });

    // ===========================
    // Typed Text Effect for Hero Tagline (Optional Enhancement)
    // ===========================
    // You can add a typing effect library here if desired

    // ===========================
    // Image Lazy Loading Enhancement
    // ===========================
    $('img[data-src]').each(function() {
        var img = $(this);
        img.attr('src', img.attr('data-src'));
        img.removeAttr('data-src');
    });

});

// ===========================
// Shake Animation CSS (Add to inline styles if needed)
// ===========================
$(document).ready(function() {
    var shakeCSS = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .shake {
            animation: shake 0.5s;
        }
    `;

    if ($('style#shake-animation').length === 0) {
        $('head').append('<style id="shake-animation">' + shakeCSS + '</style>');
    }
});

// ===========================
// Disable Right Click (Optional Security)
// ===========================
// Uncomment below if you want to disable right-click on images
/*
$(document).on('contextmenu', 'img', function() {
    return false;
});
*/

// ===========================
// Page Visibility API - Pause animations when tab is not active
// ===========================
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations or videos
        console.log('Page is hidden');
    } else {
        // Resume animations or videos
        console.log('Page is visible');
    }
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c DR.Zoe - Where Technology Meets Healthcare ', 'background: linear-gradient(135deg, #ed127c 0%, #2797dc 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Developed by TEB Innovations ', 'background: #212529; color: white; font-size: 14px; padding: 5px; border-radius: 3px;');
console.log('%c Version 1.0.0 ', 'color: #ed127c; font-size: 12px;');

// ===========================
// Service Worker Registration (PWA - Optional)
// ===========================
// Uncomment below code if you want to make this a Progressive Web App
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
*/

// ===========================
// Prevent Form Resubmission on Page Refresh
// ===========================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// Dynamic Year for Copyright
// ===========================
$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('.footer p:contains("2024")').html(function(i, html) {
        return html.replace('2024', currentYear);
    });
});

// ===========================
// Click Analytics (Optional - for tracking)
// ===========================
$(document).ready(function() {
    // Track button clicks
    $('.btn-brand, .btn-outline-brand').on('click', function() {
        var buttonText = $(this).text().trim();
        console.log('Button clicked: ' + buttonText);
        // You can send this data to Google Analytics or your analytics service
    });

    // Track navigation clicks
    $('.nav-link').on('click', function() {
        var navText = $(this).text().trim();
        console.log('Navigation clicked: ' + navText);
    });
});

// ===========================
// Mobile Device Detection
// ===========================
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Apply mobile-specific classes or behaviors
$(document).ready(function() {
    if (isMobileDevice()) {
        $('body').addClass('mobile-device');
        console.log('Mobile device detected');
    } else {
        $('body').addClass('desktop-device');
        console.log('Desktop device detected');
    }
});

// ===========================
// Network Status Detection
// ===========================
window.addEventListener('online', function() {
    console.log('Network connection restored');
    // You can show a notification to user
});

window.addEventListener('offline', function() {
    console.log('Network connection lost');
    // You can show a notification to user
});

// ===========================
// Accessibility: Keyboard Navigation Enhancement
// ===========================
$(document).ready(function() {
    // Allow ESC key to close modal
    $(document).keydown(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            if ($('#loginModal').hasClass('show')) {
                $('#loginModal').modal('hide');
            }
        }
    });

    // Focus trap for modal
    $('#loginModal').on('shown.bs.modal', function() {
        $('#username').focus();
    });
});

// ===========================
// Copy to Clipboard Function (for sharing links)
// ===========================
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    // Show notification (you can customize this)
    alert('Link copied to clipboard!');
}

// ===========================
// Print Functionality (for dashboard)
// ===========================
function printPage() {
    window.print();
}

// ===========================
// Export Table to CSV (for dashboard)
// ===========================
function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }

        csv.push(row.join(","));
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

// ===========================
// Auto-save Form Data (for longer forms)
// ===========================
function autoSaveFormData(formId) {
    var form = $('#' + formId);

    form.find('input, textarea, select').on('change', function() {
        var formData = form.serialize();
        localStorage.setItem(formId + '_data', formData);
        console.log('Form data auto-saved');
    });
}

// Restore form data on page load
function restoreFormData(formId) {
    var savedData = localStorage.getItem(formId + '_data');

    if (savedData) {
        var form = $('#' + formId);
        $.each(savedData.split('&'), function(index, elem) {
            var vals = elem.split('=');
            form.find('[name="' + decodeURIComponent(vals[0]) + '"]').val(decodeURIComponent(vals[1]));
        });
        console.log('Form data restored');
    }
}

// ===========================
// Session Timeout Warning
// ===========================
var sessionTimeout;
var warningTimeout;

function resetSessionTimeout() {
    clearTimeout(sessionTimeout);
    clearTimeout(warningTimeout);

    // Warn user 2 minutes before timeout
    warningTimeout = setTimeout(function() {
        console.log('Session will expire in 2 minutes');
        // You can show a modal warning here
    }, 28 * 60 * 1000); // 28 minutes

    // Logout after 30 minutes of inactivity
    sessionTimeout = setTimeout(function() {
        if (sessionStorage.getItem('loggedIn') === 'true') {
            sessionStorage.removeItem('loggedIn');
            alert('Your session has expired. Please login again.');
            window.location.href = 'index.html';
        }
    }, 30 * 60 * 1000); // 30 minutes
}

// Reset timeout on user activity
if (sessionStorage.getItem('loggedIn') === 'true') {
    $(document).on('mousemove keypress scroll', function() {
        resetSessionTimeout();
    });
    resetSessionTimeout();
}

// ===========================
// Performance Optimization: Debounce Function
// ===========================
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Example usage: Debounce scroll event
var efficientScrollHandler = debounce(function() {
    // Your scroll handling code here
}, 250);

window.addEventListener('scroll', efficientScrollHandler);
