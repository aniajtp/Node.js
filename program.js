process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    switch(input) {
        case null:
          process.stdout.write('Quitting app!');
          process.exit();
          break;
        case '/exit':
          process.stdout.write('Quitting app!');
          process.exit();
          break;
        default :
          console.log(process.env);
    }
});