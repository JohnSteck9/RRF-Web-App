import React, {useEffect, useState} from 'react';
import {storage} from '../../firebase';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {storageGetMetadata, loadFiles} from './storageScripts.js';
import './About.css'
import FileCard from "./FileCard";





function About() {
    const [filesList, setFilesList] = useState([]);
    const [file, setFile] = useState(null);
    // let filesData = []
    // let storageRef = storage.ref(FOLDER_NAME);


    const handleChange = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`docs/${file.name}`).put(file);
        uploadTask.on("state_changed", snapshot => {
            }, error => {
                console.log(error)
            },
            () => {
                storage.ref("docs").child(file.name).getDownloadURL().then(url => {
                    // console.log(url)
                    setFilesList(filesList => [...filesList, {'name': file.name}])
                });
            })
    };


    // console.log("image:", file)
    useEffect(() => {
        // let filesData = []
        const FOLDER_NAME = 'docs'
        let storageRef = storage.ref(FOLDER_NAME);

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
                displayImage(imageRef, fileData)
                // console.log('222')
            });
        }).catch(function (error) {
            console.log(error)
        })

        function displayImage(imageRef, fileData) {
            imageRef.getDownloadURL().then(function (url) {
                fileData['url'] = url;
                // filesData.push(fileData)
                // console.log('333')
                console.log(fileData)
                setFilesList(filesList => [...filesList, fileData])
                // setCount(fileList.push()[filesData]);
                // setCount([filesData]);
                // count.forEach(element => console.log(element));
                console.log(filesList + '88')
            }).catch(function (error) {
                console.log(error)
            });
        }

        // console.log(loadFiles())
        // console.log(filesData)
        // setCount(count => [...count, filesData]);
        // console.log(count, '22')
    }, []);

    function qwer(data) {
        try {
            data[0].forEach(element => console.log(element.name))
        } catch (error) {
            console.error(error);
        }
    }

    function deleteFile(id, filename) {
        // Create a reference to the file to delete
        let desertRef = storage.child(`images/desert.jpg`);
        // Delete the file
        desertRef.delete().then(() => {
            // File deleted successfully
        }).catch((error) => {
            console.log(error)
        });
        alert("close")
    }

    return (
        <Container>
            {console.log(filesList, '111')}
            <Row className="justify-content-start">
                <Col md={{offset: 1, span: 7}} xs={12} lg={{offset: 2, span: 5}} sm={{offset: 1, span: 7}}
                     className="vertical-align-center">
                    <Form class="file-form">
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="" onChange={handleChange}/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xl={2} lg={2} md={2} xs={12} sm={4} className="">
                    <Button onClick={handleUpload} variant="primary submit-button">Завантажити</Button>
                </Col>
            </Row>
            <Row className="justify-content-evenly ">
                {filesList.map(({name, timeCreated, updated, url}) => (
                    <FileCard
                        name={name}
                        timeCreated={timeCreated}
                        updated={updated}
                        url={url}
                        key={name}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default About;