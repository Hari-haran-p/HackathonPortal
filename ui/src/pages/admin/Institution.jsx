import React, { useEffect, useState } from 'react'
import Navbar from '../components/LandingPage/Navbar'
import { adminGetRequest } from '../components/exports';
import { useActionState } from '../../CustomHooks';
import Table from '../components/Institution/Table';
import { useAuth } from '../../AuthContext';
import AddInstitution from '../components/Institution/AddPopup';
import PasswordPopup from '../components/Institution/PasswordPopup';
import { useNavigate } from 'react-router';

export default function Institution() {

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (user.role != 'admin') {
            navigate("/profile")
        }
    }, [])

    const [institution, setInstitution] = useState([]);

    const fetchInstitution = async () => {
        try {
            const response = await adminGetRequest("/institute");
            console.log(response.data.data);
            
            setInstitution(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [fetchInstitutionCall, isLoading] = useActionState(fetchInstitution, true);

    useEffect(() => {
        fetchInstitutionCall();
    }, [])

    const [addVisible, setAddVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <>
            <Navbar />
            {
                isLoading ?
                    <div className='flex items-center justify-center min-h-96 h-full w-full '>
                        <i className="pi pi-spin pi-spinner" style={{ color: "gray", fontSize: '2rem' }}></i>
                    </div>
                    :
                    <section className="home w-full flex flex-col items-center" id="home">
                        <Table data={institution}  fetchInstitutionCall={fetchInstitutionCall} setAddVisible={setAddVisible}/>
                        <AddInstitution visible={addVisible} setVisible={setAddVisible} fetchInstitutionCall={fetchInstitutionCall} setPassword={setPassword} setPasswordVisible={setPasswordVisible} />
                        <PasswordPopup visible={passwordVisible} setVisible={setPasswordVisible} password={password} />
                    </section>

            }
        </>
    )
}
