import axios from 'axios';

export async function getData() {
    try {
        const response = await axios.get('http://localhost:3000/database/coffeeMachines.json');
        const data = response.data;
        return {
            data
        
        }
    } catch (e) {
        alert(e)
    }

}

// 'http://localhost:3000/database/coffeeMachines.json'