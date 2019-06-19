const Storage = require('@google-cloud/storage');
const vision = require('@google-cloud/vision');

exports.visionapidemo = function(data, callback) {
  const file = data;
  console.log('Processing file: ' + file.bucket + "/" + file.name);  
  
  const client = new vision.ImageAnnotatorClient();
  const storage = Storage();
  const imageUri = `gs://${file.bucket}/${file.name}`

  // Performs label detection on the gcs file
  client.labelDetection(imageUri)
    .then((results) => {
      const labels = results[0].labelAnnotations;
      console.log("Labels found for " + file.name + JSON.stringify(labels));
      const filename = file.name;
      labels.forEach((label) => console.log(filename + ", Label: " + label.description + ", Score: " + label.score));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};