$(document).ready(function () {
    fetch('../scripts/data.json')
        .then(results => results.json())
        .then(data => {
            var tmp = '';
            var counter = 0;
            let list = Object.entries(data);

            $.each(list, function (key, value) {
                tmp += '                <div class="position-container">\n' +
                    '                    <div class="first-row">\n' +
                    '                        <div class="name">' + value[1].Nazwa + '</div>\n' +
                    '                        <div class="price">' + value[1].Cena + '</div>\n' +
                    '                    </div>\n' +
                    '                    <div class="second-row">' + value[1].Miara + '</div>\n' +
                    '                </div>';

                counter++;
            });

            console.log('counter: ' + counter + '\n\n')
            console.log(tmp)
            // $('#positionss').prepend(tmp);
        });


});
