$(document).ready(function() {
    /* =========================================
       1. GLOBAL DROPDOWN LOGIC
       ========================================= */
    window.toggleDropdown = function(id) {
        // Closes other open menus first
        $('.dropdown-content-small, .dropdown-content-wide').not('#' + id).hide();
        $('#' + id).fadeToggle(200);
    };

    // Close dropdowns if user clicks outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.input-answer-box, .currency-trigger-m').length) {
            $('.dropdown-content-small, .dropdown-content-wide, .dropdown-small-m, .dropdown-wide-m').hide();
        }
    });

    /* =========================================
       2. DONATE PAGE LOGIC
       ========================================= */
    let selectedDesigVal = "";

    window.selectPeriod = function(btn) {
        $('.toggle-btn-period').removeClass('active-period');
        $(btn).addClass('active-period');
    };

    window.updateCurrency = function(val) {
        $('#selectedCurrency').text(val);
        $('#currencyMenu').hide();
    };

    window.selectDesig = function(el, name) {
        $('.desig-opt').removeClass('selected-highlight');
        $(el).addClass('selected-highlight');
        $('#activeDesigName').text(name);
        selectedDesigVal = name;
        $('#desigMenu').hide();
        checkDonateForm();
    };

    window.checkForm = function() {
        checkDonateForm();
    };

    function checkDonateForm() {
        const amount = $('#donationAmount').val();
        const btn = $('#donateSubmitBtn');
        if (amount > 0 && selectedDesigVal !== "") {
            btn.css({'opacity': '1', 'cursor': 'pointer'});
        } else {
            btn.css({'opacity': '0.6', 'cursor': 'not-allowed'});
        }
    }

    window.submitForm = function() {
        const amount = $('#donationAmount').val();
        const currency = $('#selectedCurrency').text();
        if (amount > 0 && selectedDesigVal !== "") {
            alert(`Thank you! You have chosen to donate ${currency} ${amount} to ${selectedDesigVal}.`);
        } else {
            alert("Please enter an amount and select a designation.");
        }
    };

    /* =========================================
       3. VOLUNTEER FORM (GET INVOLVED)
       ========================================= */
    $('.volunteer-form').on('submit', function(e) {
        e.preventDefault();
        alert("Thank you for volunteering! Our team will contact you for orientation soon.");
        this.reset();
    });

    /* =========================================
       4. CONTACT/FEEDBACK FORM
       ========================================= */
    $('.feedback-form-container form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name-box').val();
        alert(`Thank you ${name}, your feedback has been received.`);
        this.reset();
    });

    // Decorative logic for the feedback lines
    $('.feedback-text-overlay').on('focus', function() {
        $('.internal-line').css('background-color', '#1D724F');
    }).on('blur', function() {
        $('.internal-line').css('background-color', '#000000');
    });

    /* =========================================
       5. GALLERY PAGE
       ========================================= */
    $('.view-more-btn').on('click', function() {
        alert("Loading more amazing moments...");
        // You could append more <img> tags here in a real project
    });

    $('.video-placeholder').on('click', function() {
        alert("This will open our campaign video!");
    });

    /* =========================================
       6. MOBILE NAVIGATION TOGGLE
       ========================================= */
    // If you decide to add a hamburger menu icon later:
    $('.menu-icon').on('click', function() {
        $('.nav-menu').slideToggle();
    });
});