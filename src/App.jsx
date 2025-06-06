import React from 'react'
import { useState } from 'react'
import ChemistStepperControl from './components/ChemistStepperControl'
import ChemistStepper from './components/ChemistStepper'
import ChemistInformation from './components/ChemistInformation'
import LocationServices from './components/LocationServices'
import Contact_Details from './components/Contact_Details'
import DocumentUploads from './components/DocumentUploads'
import ReviewSubmit from './components/ReviewSubmit'

import ChemistContextProvider from './context/ChemistContextProvider'

function App(){

    const [currentStep , setCurrentStep] = useState(1);

    const steps = [
        "Chemist Information",
        "Location & Services",
        "Contact Details",
        "Document Uploads",
        "Review and Submit"
    ];

    function DisplaySteps (step) {
        switch(step){
            case 1:
                return <ChemistInformation />
            case 2:
                return <LocationServices />
            case 3:
                return <Contact_Details />
            case 4:
                return <DocumentUploads />
            case 5:
                return <ReviewSubmit />
            default:
        }
    }


    const handleDirections = (direction) => {
        let nextStep = currentStep;
        if(direction === "Submit"){
            console.log("Form submission prevented");
        }

        else{
            direction === "Next" ? nextStep++ : nextStep--;
            nextStep > 0 && nextStep <= steps.length && setCurrentStep(nextStep);
        }
    };


    return(
        <ChemistContextProvider>
            <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl bg-white pb-2 overflow-x-hidden px-3'>
                <div className='container horizontal mt-5'>
                    <ChemistStepper steps={steps} currentStep={currentStep} />
                </div>
                {DisplaySteps(currentStep)}
                <ChemistStepperControl handleDirections={handleDirections} currentStep={currentStep} steps={steps}/>
            </div>
        </ChemistContextProvider>
    )
}

export default App