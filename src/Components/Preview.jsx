import React,{useState,useEffect} from 'react';
import './Component Styles/Preview.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function Preview(props) {
    let [Application,SetApplication] = useState({});
    let Token = useSelector((store)=>{
        return store.User.Token;
    })
    let {id} = useParams();

    let DownloadPDF = () => {
        let pdf = new jsPDF();

        let URL = Application.Photo.replace('http','https')
        // console.log(URL);

        let Width = pdf.internal.pageSize.getWidth();
        const Center = Width / 2;

        pdf.rect(5, 5,Width - 10, 280);

        pdf.setFontSize(30);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text('Application Form',Center,20,{align:'center'});
        
        pdf.addImage(URL,'PNG',Center-20,25,50,50)

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`Name: ${Application.Name}`,Center, 90, { align: 'center' });

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`DOB: ${Application.DOB}`, Center, 100, { align: 'center' });

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`Age during application: ${Application.Age}`, Center, 110, { align: 'center' });

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`Address: ${Application.Address}`, Center, 120, { align: 'center' });

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`Sum: ${Application.Sum}`, Center, 130, { align: 'center' });

        pdf.setFontSize(16);
        pdf.setTextColor('#222e50');
        pdf.setFont('times','bold')
        pdf.text(`Average: ${Application.Average}`, Center, 140, { align: 'center' });

        let tdata = [
            ['Numbers','Sum','Average'],
            
            [[...Application.Series],Application.Sum,Application.Average],
           
        ]
        pdf.autoTable({
            head:tdata.splice(0,1),
            body:tdata.splice(0),
            startY:160
        })
        // pdf.text(`Address: ${Application.Average}`, Center, 500, { align: 'center' });
        // console.log(pdf.getFontList());

        pdf.save(`${Application._id}.pdf`);

    }


    useEffect(()=>{
        let getData = async() => {
            try {
                let result = await fetch(`https://formeaseserver.onrender.com/application/v1/single/${id}`,{
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
            <p className='preview_age'>Age: {Application.Age}</p>
            <p className='preview_address'>Address: {Application.Address}</p>
            <p className='preview_address'>Sum: {Application.Sum}</p>
            <p className='preview_address'>Average:{Application.Average}</p>
            <button className='pdf_download_btn' onClick={DownloadPDF}>Download</button>
        </div>
    );
}

export default Preview;