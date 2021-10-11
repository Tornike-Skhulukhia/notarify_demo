import React, { useState } from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {
    const [loading_status, switchLoadingStatusTo] = useState(0);
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company_tax_code, setCompanyTaxCode] = useState("");
    const [country, setCountry] = useState("Georgia");
    

    function submit_data(){
        switchLoadingStatusTo( 1 )

        // validate and return error/show warnings if something seems not good
        // Not Implemented        
        let data = new FormData()
        data.append("name", name,)
        data.append("last_name", lastname,)
        data.append("country", country,)
        data.append("email", email,)
        data.append("company_tax_code", company_tax_code,)
        data.append("document_picture", document.querySelector("#img_upload_btn").files[0])


        console.log("Sending ", data)

        axios.post(
            "/reports/api/handle_data_submission/",
            data,
            {headers: {'Content-Type': 'multipart/form-data'}}
        )
            .then(res => {
                
                console.log(res.data)
                
                if (res.data.errors.length === 0){
                    // show success alert
                    toast.success("Congratulations, please check your email in few minutes to see your report link", {
                        position: "bottom-center",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }else{
                    // show error alert
                    for (let err_text of res.data.errors){
                        toast.error(err_text, {
                            position: "bottom-center",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                }
                switchLoadingStatusTo( 0 )
            })
            .catch(error => console.log(error));
    }

    return (

    <div className="content">

        {
            loading_status === 1 ? <div style={{textAlign: "center"}}>Loading...</div> : ""
        }
        <div>
            <h1 style={{ textAlign: "center" }}>Please fill in some details</h1>
            <div id="inputs">
                <TextField
                    style={{margin: "20px"}}
                    label="Name" value={name}
                    onChange={e => setName(e.target.value)}
                    variant="filled"
                    fullWidth 
                />
                <br />
                <TextField
                    style={{margin: "20px"}}
                    label="Last Name" value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    variant="filled"
                    fullWidth 
                />
                
                <br />
                <TextField
                    style={{margin: "20px"}}
                    label="Email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    variant="filled"
                    fullWidth 
                />

                <div style={{margin: "20px"}}>
                    <label htmlFor="img_upload_btn">
                        <Button style={{ fontWeight: "bold", marginRight: "30px" }}
                            variant="outlined"
                            component="span"
                            >
                            Select Image
                        </Button>
                    </label>
                    <input id="img_upload_btn" accept="image/*" type="file"/>
                </div>

                <FormControl component="fieldset" style={{marginLeft: "20px", marginTop: "10px"}}>
                    <FormLabel component="legend">Country</FormLabel>
                    <RadioGroup
                        aria-label="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    >
                        <FormControlLabel value="Georgia" control={<Radio />} label="Georgia" />
                        <FormControlLabel value="Italy" control={<Radio />} label="Italy" />
                        <FormControlLabel value="Spain" control={<Radio />} label="Spain" />
                        <FormControlLabel value="France" control={<Radio />} label="France" />
                    </RadioGroup>
                </FormControl>
                <br />
                <TextField
                    style={{margin: "20px"}}
                    label="Company Tax Code" value={company_tax_code}
                    onChange={e => setCompanyTaxCode(e.target.value)}
                    variant="filled"
                    fullWidth 
                />

                <br />
                <Box textAlign='center'>
                    <Button
                        onClick={submit_data}
                        style={{ fontWeight: "bold", background: "#007494", color: "#fff", fontSize: "1rem", padding: "12px 120px"}}
                        variant="contaned"
                        size="large">
                            Submit
                    </Button>
                </Box>
            </div>
        </div>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>
    )
}
