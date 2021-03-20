import React from 'react';
import {Col, } from "react-bootstrap";
import exel_img from "../../assets/icons8-microsoft-excel-2019.svg";
import close_img from "../../assets/cancel.svg";
import {storage} from "../../firebase";

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

const FileCard = ({name, timeCreated, updated, url}) => (

    <Col md="auto" sm={5} xs={10} className="file-box">
        <img src={exel_img} className="exel-img" alt="exel image"/>
        <img src={close_img} className="close-img" onClick={deleteFile} alt="close"/>
        <span className="file-name align-middle">{name}</span>
    </Col>

);

export default FileCard;