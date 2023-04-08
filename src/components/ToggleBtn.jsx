import React, {useState} from 'react'

const ToggleBtn = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '5px',
                }}
                >
                <div
                    onClick={handleToggle}
                    style={{
                    width: '45px',
                    height: '20px',
                    borderRadius: '15px',
                    backgroundColor: isToggled ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    }}
                >
                    <div
                    style={{
                        
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '2px',
                        left: isToggled ? '6px' : '0',
                        transform: isToggled ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'left 0.3s ease, transform 0.3s ease',
                    }}
                    />
                </div>
            </div>
        </>
    )
}

export default ToggleBtn