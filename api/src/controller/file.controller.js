const fs = require("fs");
const baseUrl = "http://localhost:7654/files/";
const path = require('path');

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/files";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/files/";
    if (path.extname(fileName) == ".pcap") {
        res.download(directoryPath + fileName, fileName, (err) => {
            if (err) {
                res.status(500).send({
                    message: "Could not download the file. " + err,
                });
            }

        }
        );
    }
    else if (path.extname(fileName) == ".csv") {
        res.download(directoryPath + fileName, fileName, (err) => {
            if (err) {
                res.status(500).send({
                    message: "Could not download the file.",
                    possibleReason: "the csv file might not have been generated yet.",
                    solution: "please try downloading after 1 hour"
                });
            }

        }
        );
    }
    else {
        res.status(500).send("Could not download the file " + fileName + ", please check the url!!");
    }
};

module.exports = {
    getListFiles,
    download
};