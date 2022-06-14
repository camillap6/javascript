<><canvas width="600" height="400"></canvas><script>

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 200, 400);

    pincel.fillStyle = 'red';
    pincel.fillRect(400, 0, 200, 400);

    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(200, 400);
    pincel.lineTo(400, 400);
    pincel.fill();

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(300, 200, 50, 0, 2 * 3.14);
    pincel.fill();

</script></>

<canvas width="600" height="400"></canvas>

<script>

    function desenhaQuadrado(x, y, cor) {

        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, 50, 50);
        pincel.strokeStyle = 'black';
        pincel.strokeRect(x, y, 50, 50);

}

desenhaQuadrado(0, 0, 'green');
desenhaQuadrado(50, 0, 'green');
desenhaQuadrado(100, 0, 'green');

</script>