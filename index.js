var btn = document.querySelector('#btn')
        btn.addEventListener('click', function() {
            var hex_numbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
            var hexcode = ''
            for (let i = 0; i < 6; i++) {
                var random_code = Math.floor(Math.random() * hex_numbers.length)
                hexcode += hex_numbers[random_code]
                console.log('#'+ hexcode);
            }
            // changing div value
            document.getElementById('hex_code').innerHTML = hexcode
            // changing body background color
            document.getElementById('body').style.background = '#'+hexcode
            // changing div value color
            document.getElementById('value').style.color = '#'+hexcode
            if (hexcode == '000000') {
                document.getElementById('value').style.color = '#fff'
            }
        })