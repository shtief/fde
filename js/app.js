var button = document.getElementById("test");
$(button).text(__("click me"));

// send lead
button.addEventListener("click", function() {
    require.ensure(["./fde-lead"], function() {
        var fdeLead = require('./fde-lead');
        fdeLead.import({data:"test"});
        console.log("change");
        $(":mobile-pagecontainer").pagecontainer("change", "#p3");
    });
});
