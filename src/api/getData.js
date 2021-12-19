import axios from 'axios';

export async function getData() {
    const address = `${process.env.PUBLIC_URL}`;
    try {
        const response = await axios.get(address+'/database/coffeeMachines.json');
        const data = response.data;
        return {
            data
        
        }
    } catch (e) {
        alert(e)
    }

}

// 'http://localhost:3000/database/coffeeMachines.json'
