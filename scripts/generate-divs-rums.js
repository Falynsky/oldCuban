$(document).ready(function () {
    fetch('../scripts/data.json')
        .then(results => results.json())
        .then(data => {
            var tmp = '';
            var counter = 0;
            let map = new Map(Object.entries(data));

            $.each(map.get('Azja'), function (key, value) {
                tmp += '                <div class="position-container">\n' +
                    '                    <div class="first-row">\n' +
                    '                        <div class="name">' + value.Nazwa + '</div>\n' +
                    '                        <div class="price">' + value.Cena + ',-</div>\n' +
                    '                    </div>\n' +
                    '                    <div class="second-row">' + value.Składniki + '</div>\n' +
                    '                </div>';

                counter++;
            });

            console.log('counter: ' + counter + '\n\n')
            console.log(tmp)
            // $('#positionss').prepend(tmp);
        });


});
