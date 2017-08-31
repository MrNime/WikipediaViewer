$(document).ready(function() {
    $('#searchBox').on('keyup', function(e) {
        let searchVal = e.target.value;
        console.log(searchVal);
        // make request to Wikipedia API
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchVal,
            // data: queryData,
            dataType: 'jsonp',
            type: 'POST',
            headers: { 'Api-User-Agent': 'Example/1.0' },
        }).done(function(data){
            $('#results').empty();
            let results = data.query.search;
            console.log(results);
            for(let i = 0; i < results.length; i++) {
                const url = `https://en.wikipedia.org/wiki/${results[i].title.replace(/ /g, "_")}`;
                $('#results').append(url);
            }
        });
    });
});
