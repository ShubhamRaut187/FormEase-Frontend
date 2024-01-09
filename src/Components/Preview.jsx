import React,{useState,useEffect} from 'react';
import './Component Styles/Preview.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';



function Preview(props) {
    let [Application,SetApplication] = useState({});
    let Token = useSelector((store)=>{
        return store.User.Token;
    })
    let {id} = useParams();

    let DownloadPDF = () => {
        let pdf = new jsPDF();

        // let content = `<h1>Application Form</h1>
        // <div><img src=${Application.Photo} alt=${Application.Name} /></div>
        // <p className='preview_name'>Name: ${Application.Name}</p>
        // <p className='preview_dob'>Date of Birth: ${Application.DOB}</p>
        // <p className='preview_age'>Age: 22</p>
        // <p className='preview_address'>Address: ${Application.Address}</p>`

        // pdf.fromHTML(content, 15, 15);
        pdf.text('Application Form',15,15)
        pdf.addImage(Application.Photo,'PNG',15,40,100,120)
        pdf.save(`${Application._id}.pdf`);

    }


    useEffect(()=>{
        let getData = async() => {
            try {
                let result = await fetch(`http://localhost:8000/application/v1/single/${id}`,{
                    headers:{
                        'authorization':`Bearer ${Token}`
                    }
                })
                let response = await result.json();
                // console.log(response);
                SetApplication(response.Applications)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[Token,id])
    return (
        <div className='preview_main'>
            <h1>Application Form</h1>
            <div className='priview_img_div'>
                <img src={Application.Photo} alt={Application.Name} />
            </div>
            <p className='preview_name'>Name: {Application.Name}</p>
            <p className='preview_dob'>Date of Birth: {Application.DOB}</p>
            <p className='preview_age'>Age: 22</p>
            <p className='preview_address'>Address: {Application.Address}</p>
            <button className='pdf_download_btn' onClick={DownloadPDF}>Download</button>
        </div>
    );
}

export default Preview;