import React, { useState } from 'react';
import "../Styles/FinanceForm.css";
import { useForm } from 'react-hook-form';
import JotformEmbed from 'react-jotform-embed';
const FinanceForm = () => {
    const [step, setStep] = useState(1);

    const [applicantInfo, setApplicantInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        socialSecurity: '',
        dateOfBirth: '',
        driversLicenseNumber: '',
        driversLicenseState: '',
        driversLicenseExp: '',
        mobilePhone: '',
        homePhone: '',
        email: '',
        timeAtResidenceYears: '',
        timeAtResidenceMonths: '',
        residenceType: '',
        rentOrMortgage: '',
    });

    const [previousResidence, setPreviousResidence] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: '',
        timeAtResidenceYears: '',
        timeAtResidenceMonths: '',
        residenceType: '',
        rentOrMortgage: '',
    });

    const [employmentInfo, setEmploymentInfo] = useState({
        employer: '',
        employerType: '',
        monthlyIncome: '',
        occupation: '',
        workAddress1: '',
        workAddress2: '',
        workCity: '',
        workState: '',
        workZip: '',
        workPhone: '',
        timeOnJobYears: '',
        timeOnJobMonths: '',
    });

    const [vehicleInfo, setVehicleInfo] = useState({
        vehicleToFinance: '',
        stockNumber: '',
        year: '',
        make: '',
        model: '',
        trim: '',
        vin: '',
        mileage: '',
        additionalComments: '',
    });



    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
 <div className='form'>

            <JotformEmbed type="text/javascript" src="https://form.jotform.com/232638187531157"/>
            </div>
            );
};

            export default FinanceForm;
