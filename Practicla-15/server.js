const express = require("express");
const connectToDB = require("./src/DB/db");
const Book = require("./src/Book/bookModel");

const app = express();
connectToDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Ok" });
});

// Create New Book
app.post("/book/create", async (req, res) => {
  try {
    const { bookName, author, description } = req.body;

    if (!bookName || !author || !description) {
      return res.json({ error: "All Fields Are Required..!" });
    }

    const newBook = await Book.create({ bookName, author, description });

    res.json({ message: "Book Created Successfully..!", newBook });

    // end
  } catch (error) {
    console.log(error);
  }
});

// Get All Books
app.get("/book/allbooks", async (req, res) => {
  try {
    const book = await Book.find();

    res.json({ message: `Total Books : ${book.length}`, book });

    // end
  } catch (error) {
    console.log(error);
  }
});

// Update Book By Id
app.put("/book/update/:id", async (req, res) => {
  const { bookName, author, description } = req.body;
  const { id } = req.params;

  try {
    const book = await Book.findById({ _id: id });

    if (!book) {
      return res.status(404).send("Book Not Found!!");
    }

    // Update Note
    const updatedBook = await Book.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          bookName,
          author,
          description,
        },
      },
      { new: true }
    );

    res.json({ message: "Book Updated Successfully!", updatedBook });
    // end
  } catch (error) {
    console.log(error);
  }
});

// Delete Single Book By ID
app.delete("/book/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete({ _id: id });

    res.json({ message: "Book Deleted Successfully..!", deletedBook });

    // end
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT : 8080");
});
