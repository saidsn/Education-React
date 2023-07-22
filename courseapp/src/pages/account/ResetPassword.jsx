import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

function ResetPassword() {

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { email } = useParams();
    let route = window.location.href;
    let token = route.split('token=')[1];

    const 






  return (
    <div>
      
    </div>
  )
}

export default ResetPassword
