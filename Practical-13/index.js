const fs = require("fs");
fs.writeFile("example.txt", "This is a test file.", (err) => {
  if (err) {
    console.error("Error creating file:", err);
  } else {
    console.log("File created successfully.");
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("File content:", data);
        fs.appendFile("example.txt", "\nThis is additional content.", (err) => {
          if (err) {
            console.error("Error appending to file:", err);
          } else {
            console.log("Data appended successfully.");
            fs.readFile("example.txt", "utf8", (err, newData) => {
              if (err) {
                console.error("Error reading file after appending:", err);
              } else {
                console.log("Updated file content:", newData);
                fs.unlink("example.txt", (err) => {
                  if (err) {
                    console.error("Error deleting file:", err);
                  } else {
                    console.log("File deleted successfully.");
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
