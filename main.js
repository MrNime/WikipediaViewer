$(document).ready(function() {
    $('#searchBox').on('keyup', function(e) {
        let searchVal = e.target.value;
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchVal,
            // data: queryData,
            dataType: 'jsonp',
            type: 'POST',
            headers: { 'Api-User-Agent': 'Example/1.0' },
        }).done(function(data){
            $('#results').empty();
            let results = data.query.search;
            for(let i = 0; i < results.length; i++) {
                // const url = `https://en.wikipedia.org/wiki/${results[i].title.replace(/ /g, "_")}`;
                const url = 'https://en.wikipedia.org/?curid=' + results[i].pageid;
                const html =
                `<div class="card">
                  <a href="${url}" target="_blank">
                    <div class="card-body">
                        <h4 class="card-title">${results[i].title}</h4>
                        <p class="card-text">${results[i].snippet}</p>
                    </div>
                  </a>
                </div>
                <br>`;
                $('#results').append(html);
            }
        });
    });
});
