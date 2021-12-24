import axios from 'axios';

const address = `${process.env.PUBLIC_URL}`;

export async function getData(file) {
    
    try {
        const response = await axios.get(address+file);
        const data = response.data;
        return {
            data
        }
    } catch (e) {
        alert(e)
    }
}

// 'http://localhost:3000/database/coffeeMachines.json'

// (address+'/database/coffeeMachines.json');
