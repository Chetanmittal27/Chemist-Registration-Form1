import React from 'react'
import { useEffect , useRef , useState} from 'react'

function ChemistStepper({steps , currentStep}) {

    const stepRef = useRef([]);

    const [newStep , setNewStep] = useState([]);

    const updateStep = (stepNumber , steps) => {

        const newSteps = [...steps];
        let count = 0;

        while(count < steps.length){
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    completed : true,
                    highlighted : true,
                    selected : true,
                }
                count++;
            }

            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    completed : true,
                    highlighted : false,
                    selected : true,
                }
                count++;
            }

            else{
                newSteps[count] = {
                    ...newSteps[count],
                    completed : false,
                    highlighted : false,
                    selected : false,
                }
                count++;
            }
        }
        return newSteps;
    }

    useEffect(() => {
        const stepState = steps.map((step , index) => (
            Object.assign({} , {
                description : step,
                completed : false,
                highlighted : index === 1 ? true : false,
                selected : index === 1 ? true : false,
            })
        ))

        const stepRef = stepState;
        stepRef.current = updateStep(currentStep - 1 , stepState);
        setNewStep(stepRef.current);

    } , [currentStep , steps]);


    const displaystep = newStep.map((step , index) => {

        return(
            <div key={index} className={index != newStep.length-1  ? 'w-full flex items-center relative  mb-10' : 'flex items-center relative mb-10'}>
                <div className='flex flex-col items-center relative'>
                    <div className={`h-10 w-10 flex justify-center items-center rounded-full border-2 border-blue-800 transition duration-500 ease-in-out  ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : " "}`}>{step.completed ? (<span className='text-white font-bold text-2xl'>&#10003;</span>) : (index + 1)}</div>
                    <div className={`font-medium uppercase text-xs w-32 absolute top-0 mt-11 text-center ${step.highlighted ? "text-gray-900 text-2xl font-medium" : "text-gray-400"}`}>{step.description}</div>
                </div>
                <div className={`flex border-t-2 flex-auto transition duration-500 ease-in-out ${step.completed ? "border-green-600 border-3" : "border-gray-600"}`}></div>
            </div>
        )
    })


  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
        {displaystep}
    </div>
  )
}

export default ChemistStepper