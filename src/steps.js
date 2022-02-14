import React from "react";

const Steps = ({steps, current, setCurrent}) => {
    const StepButtons = () => steps?.map((step, index) => <button 
        className={`step-button ${current === index && "current"}`} 
        onClick={() => setCurrent(index)}>
            {step.title}
        </button>
    )

    // Refactor to Step.tsx
    const Content = () => {
        if(current !== null){
            const {title, image}= steps[current]?.content;
            return(
                <div className="content">
                    <h2 className="content-title">{title}</h2>
                    <img src={image} alt={title}/>
                </div>
            )
        }
        return null
    }
    
    return(
        <div className="steps">
            <div className="steps-header">
                <StepButtons/>
            </div>
            <div className="steps-content">
                <Content/>
            </div>
        </div>
    )
}

export default Steps