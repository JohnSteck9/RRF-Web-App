import {storage} from '../../firebase';

// Now we get the references of these images


const loadFiles = (storageRef) => {
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (imageRef) {
            // And finally display them
            let fileData = {}
            fileData['name'] = imageRef.name;
            // console.log(imageRef.name)
            let fullRef = storageRef.child(`${imageRef.name}`);
            // Get metadata properties
            fullRef.getMetadata()
                .then((metadata) => {
                    // Metadata now contains the metadata for 'images/forest.jpg'
                    fileData['timeCreated'] = metadata.timeCreated;
                    fileData['updated'] = metadata.updated;
                })
                .catch((error) => {
                    console.log(error)
                });

            // storageGetMetadata(imageRef.name)

            return displayImage(imageRef, fileData)
            // console.log('222')
        });
    }).catch(function (error) {
        console.log(error)
    })
}
function displayImage(imageRef, fileData, filesData) {
    imageRef.getDownloadURL().then(function (url) {
        fileData['url'] = url;
        filesData.push(fileData)
        // console.log('333')
        console.log(filesData)
        return filesData
        // setCount(fileList.push()[filesData]);
        // setCount([filesData]);

        // count.forEach(element => console.log(element));

        // console.log(count + '88')
    }).catch(function (error) {
        console.log(error)
    });
}




const storageGetMetadata = (ref) => {
    ref.getMetadata()
        .then((metadata) => {
            // Metadata now contains the metadata for 'images/forest.jpg'
            // console.log(metadata)
            return metadata
        })
        .catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error)
        });
}

export {loadFiles, displayImage, storageGetMetadata};
