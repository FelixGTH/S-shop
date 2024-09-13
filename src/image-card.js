import React, { useEffect } from 'react';

function imageCard(props) {

    const [jsonobj, setJsonobj] = React.useState(null)

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const response = await fetch("")
            } 
            catch (error) {
                alert(error);
            }
        }
        
        fetch_data();
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default imageCard;