import React from 'react';
import PropTypes from 'prop-types';

//import images

//import components

//import styles
import styles from './EventModal.module.css';

import {Modal,Button} from 'react-bootstrap'

export function EventModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className={styles.thumbnail} src={props.thumbnail}></img>
          <p className={styles.desc}>
            {props.desc}
          </p>
    { props.author !== "" && <p><b>Author - {props.author}</b></p> }
    { props.date && <p><b>Scheduled On - {props.date}</b></p>}
    {props.venue && <p><b>Venue - {props.venue}</b></p>}
    {props.form !== '#' && <p><b>Register <a href={props.form}>here</a></b></p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
