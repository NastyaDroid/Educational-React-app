import axios from 'axios';

const address = `${process.env.PUBLIC_URL}`;

export async function getCatalog() {
    
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

export async function getTeaser() {
    try {
        const response = await axios.get(address+'/database/teasers.json');
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
