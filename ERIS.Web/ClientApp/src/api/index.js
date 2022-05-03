import axios from 'axios';

const BASE_URL = 'http://localhost:50188/api/';

export const ENDPOINTS = {
    ASSESSMENTPROFILE: 'AssessmentProfile',
    ASSESSMENTDETAILS: 'AssessmentDetails',
    PHOTO: 'PHOTO',
    LOGIN: "Login"
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll : () => axios.get(url),
        fetchById : id => axios.get(url+id),
        update : (id, updatedRecord) => axios.put(url+id,updatedRecord)
    }
}