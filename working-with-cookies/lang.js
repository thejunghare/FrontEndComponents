var LanguageList = {
    "EN": "English",
    "MR": "Marathi",
    "ES": "Español",
    "PT": "Português"
};

// Languages Objects
var WORDS_EN = {
    "text1": "text One",
    "text2": "text Two"
};

var WORDS_ES = {
    "text1": "texto Un",
    "text2": "texto Dos"
};

var WORDS_PT = {
    "text1": "texto Um",
    "text2": "texto Dois"
};

var WORDS_MR = {
    "text1": "मजकूर एक",
    "text2": "मजकूर दोन"
};

window.onload = initialize;

function initialize() {
    var $dropdown = $("#country_select");
    $.each(LanguageList, function (key, value) {
        $dropdown
            .append($("<option/>")
                .val(key)
                .text(value));
    });

    
    var selectedLanguage = Cookies.get('selectedLanguage'); // Check if a language cookie exists, and load the language from the cookie
    if (selectedLanguage) {
        loadsLanguage(selectedLanguage);
        $dropdown.val(selectedLanguage);
    } else {
        loadsLanguage("EN"); // Default language
    }
}

function loadsLanguage(lang) {
    // Save the selected language in a cookie
    Cookies.set('selectedLanguage', lang, { expires: 365 }); // Cookie will expire in 365 days

    /* Fills all the span tags with class="lang-" pattern */
    $('span[class^="lang"]').each(function () {
        var LangVar = (this.className).replace('lang-', '');
        var Text = window["WORDS_" + lang][LangVar];
        $(this).text(Text);
    });
}
