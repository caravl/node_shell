var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdin.on("data", function (data) {
      var cmd = data.toString().trim();
      if (cmd === "pwd") {
        process.stdout.write(__filename);
      }
      process.stdout.write("prompt > ");
    })
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    })
  }
}
