exports.fileUpload = function (req, res) {
    try {
      if (!req.files) {
        return res.status(404).json({ message: "No file uploaded" });
      }
  
      res.status(200).json({
        message: "File uploaded successfully",
        file: req.files
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
};